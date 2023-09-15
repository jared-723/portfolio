import { projects } from "../sources/projects";
import Knowledge from "./Knowledge";

const Projects = () => {
  return (
    <>
      <section className="w-full grid place-content-center text-center gap-4">
        <h3 className="font-bold">Projects</h3>
        <section className="flex flex-wrap gap-4 px-4 justify-center">
          {projects.map((project) => (
            <article
              key={project.url}
              className="text-center grid gap-2 bg-slate-700 p-4 rounded-md hover:translate-y-1"
            >
              <div className="w-[250px]">
                <img src={project.img} alt="" />
              </div>
              <h4 className="font-semibold">{project.name}</h4>
              <a
                href={project.url}
                target="blank"
                className="hover:font-semibold hover:text-blue-200 hover:decoration-solid"
              >
                Show project
              </a>
            </article>
          ))}
        </section>
      </section>
      <Knowledge />
    </>
  );
};
export default Projects;
