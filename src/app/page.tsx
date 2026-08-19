import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SpiderWebBackground } from "@/components/ui/spider-web-background";
import { SwingingSpidermanBackground } from "@/components/ui/swinging-spiderman-background";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SpiderEmblem } from "@/components/ui/spider-emblem";
import { WebCursor } from "@/components/ui/web-cursor";
import { WebSlingIntro } from "@/components/ui/web-sling-intro";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <WebSlingIntro />
      <SpiderWebBackground />
      <SwingingSpidermanBackground />
      <ParticlesBackground />
      <WebCursor />
      <ScrollProgress />
      <FloatingNavbar />
      <main className="relative z-10">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <EducationSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <footer className="relative z-10 overflow-hidden border-t border-primary/20 bg-background/80 px-4 py-10 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-0 spider-web-pattern opacity-10" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
          <SpiderEmblem className="h-7 w-7" />
          <p className="font-display text-lg tracking-wide text-primary">
            With great code comes great responsibility
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anil Shrestha · Your friendly
            neighborhood developer
          </p>
        </div>
      </footer>
    </div>
  );
}
