// app/project/[id]/page.tsx
import path from 'path';
import fs from 'fs/promises';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tech: string;
}

async function getProject(id: string): Promise<Project | null> {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return data.allProjects.find((proj: Project) => proj.id === id) || null;
}

// Static params for pre-rendering
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return data.allProjects.map((proj: Project) => ({
    id: proj.id,
  }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);

  if (!project) return notFound();

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <div className='text-white/60 flex'>
          <img src="/arrow-left.svg" className="my-1 w-4 h-4 mx-1"></img>Go back
        </div>
        <div className="bg-blue/60 w-[100%] h-[10%] flex justify-end gap-5 text-sm">
          <div className='flex gap-2'>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80"
              >
                Visit Project
              </a>
            )}
          </div>

          {/* code portion */}
          <div className='flex gap-2'>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View Code
            </a>
          </div>
        </div>

        {/* the small boxes */}

        <div className='w-50 h-10'>
          {project.tech.split(',').map((item, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 mr-2 mb-2 text-sm rounded border border-gray-700"
            >
              {item.trim()}
            </span>
          ))}

        </div>
        <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>
        {project.description && (
          <p className="text-sm text-white/60 mb-4">{project.description}</p>
        )}
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={500}
            className="rounded-lg mb-6 object-cover"
          />
        )}
        <p className="text-lg text-zinc-300 mb-4">{project.description}</p>
      </div>
    </div>
  );
}