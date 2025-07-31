import path from 'path';
import fs from 'fs/promises';

export default async function Body() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  const proj = data.allProjects;

  return (
    <div className="w-[77%] mx-auto">
      <div className="flex gap-x-7 gap-y-1 px-6 mx-auto justify-center flex-wrap">
        {proj.map((project: any, id: number) => (
          <div
            key={`${project.title}-${id}`}
            data-layer="full r1"
            className="FullR1 w-78 h-90 bg-[#080810] rounded-[10px] hover:cursor-pointer m-2"
          >
            <img
              src={project.image || '/dining.jpeg'}
              alt={project.title}
              className="w-full h-45 bg-white/10 rounded-[10px] object-cover transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:brightness-90"
            />

            <div
              data-layer="UT Dining"
              className="UtDining justify-start text-zinc-100 mt-2 text-base font-bold"
            >
              {project.title}
            </div>

            <div
              data-layer="ds1"
              className="Ds1 w-full justify-start text-zinc-400 text-sm font-medium font-['Satoshi'] mt-1"
            >
              {project.description}
            </div>

            <div
              data-layer="link"
              className="w-full justify-start flex text-sm font-bold font-['Satoshi'] mt-2"
              style={{ color: "#484868" }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 max-w-xs"
              >
                <span className="overflow-hidden whitespace-nowrap overflow-ellipsis block max-w-[60%]">
                  {project.link}
                </span>
                <img
                  src="/arrow-up-right.svg"
                  className="w-4 h-4 flex-shrink-0"
                  alt="external link"
                />
                <span className="text-white/60 text-xs font-normal ml-9">Learn more</span>
              </a>

            </div>
          </div>

        ))}
      </div>
    </div>
  );

}
