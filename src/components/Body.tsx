import path from 'path';
import fs from 'fs/promises';

export default async function Body() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  const proj = data.allProjects;

  return (
    <div className="">
      <div className="flex gap-x-10 gap-y-4 px-6 mx-auto justify-center my-3 flex-wrap">
        {proj.map((project: any, id: number) => (
          <div
            key={`${project.title}-${id}`} // key on outer div
            data-layer="full r1"
            className="FullR1 w-78 h-90 bg-[#080810] rounded-[10px] hover:cursor-pointer m-2"
          >
            <img
              src={project.image || '/dining.jpeg'}
              alt={project.title}
              className="w-full h-[50%] bg-white/10 rounded-[10px] object-cover transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:brightness-90"
            />
            <div
              data-layer="UT Dining"
              className="UtDining justify-start text-zinc-100 my-3 text-lg font-bold"
            >
              {project.title}
            </div>
            <div
              data-layer="ds1"
              className="Ds1 w-full justify-start text-zinc-400 text-sm font-medium font-['Satoshi'] mt-2"
            >
              {project.description}
            </div>
            <div
              data-layer="link"
              className="HttpsAppsAppleComUsAppUtDiningId6743042002 w-full justify-start flex text-sm font-bold font-['Satoshi'] mt-3" style={{color: "#484868"}}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                {project.link}
                <img src="/arrow-up-right.svg" alt="external link" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
