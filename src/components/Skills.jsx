// export default function Skills() {
//   return (
//     <section id="skills" className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="section-title text-center transform transition-all duration-500 hover:scale-105">
//           Skills & Technologies
//         </h2>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {/* Skill Card */}
//           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
//             <div className="mb-4">
//               <div className="w-16 h-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
//                 <span className="text-2xl group-hover:text-white">🚀</span>
//               </div>
//             </div>
//             <h3 className="text-lg font-semibold mb-2">React</h3>
//             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
//               <div className="bg-primary h-full rounded-full w-[85%] transition-all duration-1000 ease-out animate-fill-bar"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Skills() {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "📜" },
    { name: "Node.js", icon: "🟢" },
    { name: "Git", icon: "🐙" },
    { name: "HTML", icon: "🖥️" },
    { name: "CSS", icon: "🎨" },
    { name: "Tailwind", icon: "🌊" },
    { name: "MongoDB", icon: "🍃" },
    
  ];

  return (
    <section id="skills" className="py-12 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-8 transform transition-all duration-500 hover:scale-105">
          Skills & Technologies
        </h2>
        
        <div className="relative">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent z-10"></div>
          
          {/* Auto-scrolling container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="inline-flex flex-col items-center mx-8 py-4 transform transition-all duration-300 hover:scale-125"
                >
                  <div className="text-5xl mb-2">{skill.icon}</div>
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>
                </div>
              ))}
              
              {/* Duplicate for seamless looping */}
              {skills.map((skill, index) => (
                <div 
                  key={`copy-${index}`}
                  className="inline-flex flex-col items-center mx-8 py-4 transform transition-all duration-300 hover:scale-125"
                >
                  <div className="text-5xl mb-2">{skill.icon}</div>
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

