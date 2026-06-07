import { ArrowDown } from "lucide-react";
import { QABlock } from "@/components/ui/QABlock";

const QA_ITEMS = [
  {
    question: "What does AI-native mean to you?",
    tlDr:
      "Tl;dr: I entered Product Design when AI was actually useful, so I never had a manual process to unlearn — AI was just part of the job from day one.",
    answer:
      "Fair question, as it's quite a buzzy word. To me, something being \"native\" to you means you grew up with it. I transitioned into Product Design right at the time AI was becoming actually useful – good timing I can't take credit for. I joined without an established manual design process to be precious about, and so I embraced AI eagerly, learning how to ship to code in Cursor at the same time as mastering Figma.",
  },
  {
    question: "What does this actually look like, day-to-day?",
    tlDr:
      "Tl;dr: My workflow runs Claude → Figma → Cursor: AI for early ideation, Figma for high-quality input and annotations, then Cursor to ship it to code via the Figma MCP.",
    answer:
      "I typically start in Claude, throwing the proverbial spaghetti at the wall with AI, generating mock ups for initial inspo and to secure buy-in from stakeholders. Then I turn to Figma - yes, Figma, not Cursor. Through a lot of trial and error, I learned that agents work best with high quality, well thought out input. That part of the process - the orchestration process - is our new role as designers. Once I've got my screens mapped out, I's dotted and T's crossed with my developer colleagues, and the file thoroughly marked up with annotations, I send that all to Cursor via the Figma MCP. From there, I'm trusted to bring the screens to life in the code and create PRs in Github or prototypes on isolated branches for my team.",
  },
];

export function IntroductionSection() {
  return (
    <div className="flex flex-col gap-2xl text-neutral-black">
      <h2 className="font-satoshi font-bold text-heading-3 w-full">
        Hi, I&apos;m Till 👋 an AI-native product designer.
      </h2>
      <div className="flex flex-col gap-xl w-full">
        {QA_ITEMS.map((item) => (
          <QABlock key={item.question} {...item} />
        ))}
        <div className="flex items-center gap-md">
          <a
            href="#example"
            className="font-inter font-medium text-[14px] leading-[22px] text-paleBlue-600 underline decoration-solid whitespace-nowrap hover:text-paleBlue-700 transition-colors"
          >
            Sounds cool, show me an example
          </a>
          <ArrowDown className="size-4 shrink-0 text-paleBlue-600" aria-hidden />
        </div>
      </div>
    </div>
  );
}
