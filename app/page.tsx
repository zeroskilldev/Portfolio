import { About } from "@/components/About";
import { Connect } from "@/components/Connect";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Tools } from "@/components/Tools";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Tools />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}