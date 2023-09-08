import { projects } from "../sources/projects";


const Projects = () => {

  return (
    <section className="w-screen grid place-content-center">
      <h3 className="justify-self-center">Projects</h3>
      <section className="flex flex-wrap gap-4 px-4 justify-center">
        {
            projects.map((project) => <article key={project.url} className="text-center grid gap-2 bg-red-500 p-4 rounded-md">
                <div className="w-[250px]">
                    <img src={project.img} alt="" />
                </div>
                <h4 className="font-bold">{project.name}</h4>
            </article>)
        }
      </section>
    </section>
  );
};
export default Projects;
