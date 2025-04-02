export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center transform transition-all duration-500 hover:scale-105">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Skill Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <span className="text-2xl group-hover:text-white">🚀</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">React</h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div className="bg-primary h-full rounded-full w-[85%] transition-all duration-1000 ease-out animate-fill-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
