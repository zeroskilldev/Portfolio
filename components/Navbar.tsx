import { ModeToggle } from "./ModeToggle";


const links = [
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#connect" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-4 sm:px-18 md:px-[10vw] lg:px-[20vw]">
        <a href="#top" className={`text-xl font-medium`}>
          Portfolio
        </a>

        <nav className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs text-foreground transition-colors hover:bg-muted sm:px-3 sm:text-sm"
            >
              {link.label}
            </a>
          ))}

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};