import { useState, useEffect } from "react";
import portfolio from "../assets/portfolioImage.jpg"

export default function Hero() {
  const [text, setText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const phrases = ["Full Stack Developer", "UI/UX Designer", "Problem Solver"];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    let typeSpeed = isDeleting ? 100 : 200; // Typing speed control

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000; // Wait before starting deletion
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    const timeout = setTimeout(() => {
      setText(currentPhrase.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhraseIndex]);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div 
            className="flex-1 transform transition-all duration-500 hover:scale-105"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm {''}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
               Rajat Sharma
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl mb-6 h-20">
              <span className="inline-block min-h-[2em]">{text}</span>
              <span className="animate-pulse">|</span>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Turning ideas into reality through elegant and efficient code.
            </p>

            <button
              className="btn-primary transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Download Resume
            </button>
          </div>

          <div
            className="flex-1 flex justify-center transform transition-all duration-500 hover:scale-105"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
              <img
                src={portfolio}
                alt="Profile"
                className="absolute inset-1 rounded-full object-cover animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}