import { ToolMarquee } from "./ui/ToolMarquee";

export const Tools = () => {
  return (
    <section id="tools" className="flex-col py-10 items-center px-4 sm:px-18 md:px-[10vw] lg:px-[20vw]">
      <div className="pb-4 text-2xl md:text-3xl">
        <strong>Tools</strong>
      </div>
      <div className="text-lg text-muted-foreground md:text-xl">
        I have worked with the following tools
      </div>
      <div>
        <ToolMarquee />
      </div>
    </section>
  );
};