import { ProjectTemp } from "./ui/projectTemp";

const projects = [
  {
    title: "DropText",
    summary:
      "A project-based platform designed to share long texts to anyone with the help of sharable links for a limited amount of time.",
    techStack: ["Next.js", "TypeScript", "Prisma"],
    href: "https://droptext.zeroskilldev.me",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="flex-col py-10 items-center px-4 sm:px-18 md:px-[10vw] lg:px-[20vw]">
      
      <div className="text-2xl md:text-3xl">
        <strong>Projects</strong>
      </div>

      <div className="mt-6 grid w-full gap-4">
        {projects.map((project) => (
          <ProjectTemp key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};