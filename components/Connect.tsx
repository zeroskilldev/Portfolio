import { ArrowUpRight } from "lucide-react";
import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGmail } from "react-icons/si";


type platformType = {
  label: string;
  href: string;
  icon: IconType
}

const platforms = [
  {
    label: "GitHub",
    href: "https://github.com/zeroskilldev",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/krish-mewari/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:krishmewari45@gmail.com",
    icon: SiGmail,
  },
];


export const Connect = () => {
  return (
    <section id="connect" className="flex-col py-10 pb-16 items-center px-4 sm:px-18 md:px-[10vw] lg:px-[20vw]">

      <div className="mt-4 text-center text-lg text-muted-foreground md:text-xl">
        Feel free to connect with me on the following platforms.
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {platforms.map((props: platformType) => (
          <a
            key={props.label}
            href={props.href}
            target={"_blank"}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted md:text-base"
          >
            <props.icon className="h-4 w-4" />
            {props.label}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>

    </section>
  );
};