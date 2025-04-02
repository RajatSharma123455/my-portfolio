import { useState } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center transform transition-all duration-500 hover:scale-105">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-r from-primary to-secondary opacity-75"></div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <button className="px-6 py-2 bg-white text-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl text-gray-600 dark:text-white font-bold mb-2">Project Title</h3>
              <p className="text-gray-600 dark:text-gray-300">Project description goes here</p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}