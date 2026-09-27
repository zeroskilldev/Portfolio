import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-6 sm:px-18 md:px-[10vw] lg:px-[20vw]">
      <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground md:flex-row md:text-left">
        <div>© {year} | Krish Mewari</div>

        <div className="flex items-center gap-3">
          <a href="#top" className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-muted-foreground">
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};