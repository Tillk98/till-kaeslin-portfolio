import Image from "next/image";
import { FileUser, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const LOGO_SRC = "/assets/Hippo%20x%20Keith%20Haring%20Logo%20-%20Pale%20Blue.png";

export function MainNav() {
  return (
    <header className="bg-neutral-white border-b border-solid border-blueGrey-50 w-full">
      <Container className="flex items-center justify-between py-lg">
        <div className="flex items-center gap-sm">
          <div className="relative size-11 shrink-0 rounded-sm overflow-hidden">
            <Image src={LOGO_SRC} alt="Till Käeslin" width={44} height={44} className="object-cover" />
          </div>
          <span className="font-satoshi font-bold text-heading-3 text-neutral-black">Till</span>
        </div>
        <nav className="flex items-center gap-md md:gap-lg">
          <Button
            variant="outline"
            href="https://drive.google.com/file/d/1HkrZFNfKh0rUHK-xUZE2gO5tvUKxH7H3/view?usp=sharing"
            icon={<FileUser className="size-[18px]" />}
            className="min-h-[40px] px-md md:min-h-0 md:px-lg"
          >
            <span className="hidden md:inline">Resume</span>
          </Button>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/till-kaeslin/"
            icon={<Linkedin className="size-[18px]" />}
            className="min-h-[40px] px-md md:min-h-0 md:px-lg"
          >
            <span className="hidden md:inline">LinkedIn</span>
          </Button>
        </nav>
      </Container>
    </header>
  );
}
