export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center transform transition-all duration-500 hover:scale-105">
          Work Experience
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Experience Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full">
              <h3 className="text-xl text-gray-600 dark:text-gray-300 font-bold mb-2">Senior Developer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Tech Company</p>
              <p className="text-sm text-gray-500">2022 - Present</p>
              <div className="mt-4">
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li className="mb-2">Led development of key features</li>
                  <li className="mb-2">Mentored junior developers</li>
                  <li>Improved application performance by 40%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}