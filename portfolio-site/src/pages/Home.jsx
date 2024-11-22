import { BackgroundLines } from "../components/ui/background-lines";
import { TypewriterEffectTextGreeting } from "../components/typewriter-text-Home-Greeting";
import { FloatingNavbar } from "../components/navbar";
const Home = () => {
  return (
    <>
    <FloatingNavbar/>
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        <TypewriterEffectTextGreeting className="dark" />{" "}
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
        I’m passionate about data science and proficient in machine learning,
        deep learning, and analytics, while also excelling in full-stack
        development to craft seamless applications
      </p>
    </BackgroundLines>
    </>
  );
};

export default Home;
