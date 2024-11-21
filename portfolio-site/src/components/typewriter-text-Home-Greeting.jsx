import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectText() {
  const words = [
    {
      text: "Hi!!",
    },
    {
      text: "I'm",
    },
    {
      text: "Dhruv Krrish Ghimiray",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
