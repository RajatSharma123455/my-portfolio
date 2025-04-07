export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center transform transition-all duration-500 hover:scale-105">
          Work Experience
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8 ">
          {/* Experience Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-102 hover:shadow-xl space-y-4">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full">
              <h3 className="text-xl text-gray-600 dark:text-gray-300 font-bold mb-2">Frontend Developer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 font-semibold">Saya Care</p>
              <p className="text-sm text-gray-500">Feb 2023 - Sept 2024</p>
              <div className="mt-4">
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li className="mb-2">Engineered a React-based patient dashboard with Redux state management, improving data visibility for 2000+ users and reducing
                   page load time by 35% through code-splitting and lazy loading.</li>
                  <li className="mb-2">Implemented Tailwind CSS across 15+ modules, reducing CSS bundle size by 25% and accelerating UI development by standardizing reusable components.</li>
                  <li>Collaborated with backend teams to integrate RESTful APIs for medicines, achieving 99.9% uptime and improving user engagement by 40%.</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full">
              <h3 className="text-xl text-gray-600 dark:text-gray-300 font-bold mb-2">Internship: Frontend Developer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 font-semibold">Mad Scientist</p>
              <p className="text-sm text-gray-500">Aug 2022 - Jan 2023</p>
              <div className="mt-4">
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li className="mb-2">Spearheaded the development and implementation of a dynamic web application using React.js, JavaScript, and Tailwind CSS, 
                  optimizing performance by 80% and delivering a seamless user experience.</li>
                  <li className="mb-2">Focused on creating responsive and visually appealing UI components, improving user engagement and accessibility across devices.</li>
                  <li>Collaborated closely with backend developers to integrate APIs efficiently, enhancing data flow and application responsiveness.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}