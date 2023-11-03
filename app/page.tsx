import Home from "@/components/Home";
import SectionDivider from "@/components/SectionDivider";
import Aboutme from "@/components/Aboutme";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import Experience from "@/components/Experience";

export default function MainPage() {
  return (
    <main className=" ">
      <Home />
      <SectionDivider />
      <Aboutme />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
    </main>
  );
}
