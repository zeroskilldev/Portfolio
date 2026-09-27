import { FaAws } from "react-icons/fa6";
import { IconType } from "react-icons";
import {
  SiDocker,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";

const tools: { name: string; icon: IconType }[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Docker", icon: SiDocker },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "AWS", icon: FaAws },
  { name: "Ubuntu", icon: SiUbuntu },
];

export const ToolMarquee = () => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {tools.map(({ name, icon: Icon }) => (
        <div key={name}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm text-foreground shadow-sm transition-colors hover:bg-muted md:text-base"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};