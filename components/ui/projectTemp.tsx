import { ArrowUpRight } from "lucide-react";

type ProjectTempProps = {
  title: string;
  summary: string;
  techStack: string[];
  href: string;
};

export const ProjectTemp = (props: ProjectTempProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4">
        <div className="text-xl font-medium md:text-2xl">{props.title}</div>
        <a
          href={props.href}
          target="_blank"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <p className="mt-3 text-base text-muted-foreground md:text-lg">
        {props.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {props.techStack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground md:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};