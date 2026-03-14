import { Container } from "@/components/ui/Container";
import { MainNav } from "@/components/sections/MainNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { HeadshotSection } from "@/components/sections/HeadshotSection";

export default function Home() {
  return (
    <>
      <MainNav />
      <HeroSection />
      <main>
        <Container className="py-3xl">
          <div className="flex flex-col gap-3xl lg:flex-row lg:items-start lg:gap-4xl">
            <div className="flex-1 min-w-0">
              <IntroductionSection />
            </div>
            <HeadshotSection />
          </div>
        </Container>
      </main>
    </>
  );
}
