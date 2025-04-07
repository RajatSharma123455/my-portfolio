import { useState } from "react";
import logo from "../assets/Logo.png";
import sayaCareLogo from "../assets/circle_logo.png";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 ">
        <h2 className="section-title text-center transform transition-all duration-500 hover:scale-105">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-r from-primary to-secondary opacity-75 flex items-center justify-center">
                  <img src={logo} />
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <a
                  href=""
                  className="px-6 py-2 bg-white text-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  Go to site
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl text-gray-600 dark:text-white font-bold mb-2">
                Safe Signal
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
              <p> • Real-time Disaster Map – Displays live disaster reports with geolocation for quick response and situational awareness.</p>
              <p> • User Reporting System – Enables users to report incidents, request help, and share critical updates.</p>
              <p> • Volunteer Coordination – Connects volunteers with people in need, facilitating resource distribution and emergency response.</p>
              <p> • SMS Alerts & Notifications – Sends instant alerts to users in affected areas to ensure timely safety measures.</p>
             
              </p>
              <div className="mt-4 flex gap-2 flex-wrap items-center justify-center">
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">
                  Javascript
                </span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">
                  Tailwind css
                </span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-r from-primary to-secondary opacity-75 flex items-center justify-center">
                  <img src={sayaCareLogo} />
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <a
                  href="https://sayacare.in/"
                  className="px-6 py-2 bg-white text-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  Go to site
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl text-gray-600 dark:text-white font-bold mb-2">
                 Sayacare Jan Aushadhi Website 
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
               
                <p>• Developed website front-end Architecture from
                scratch and converted it into User friendly interface. </p>
                <p>• Integrated API's with smooth workflow of web app. </p>
               <p> • Operated with the team of 5 developers. </p>
               <p> • Designed complex web page layouts, created reusable components and optimized application performance. </p>
              <p>  • Developed code that complied with coding standards, designed web services and integrated 3rd party services for improved functionality. </p>
              </p>
              <div className="mt-8 flex gap-2 flex-wrap items-center justify-center">
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">
                  Javascript
                </span>
                <span className="px-3 py-1 bg-gray-700 dark:bg-gray-700 rounded-full text-sm">
                  Tailwind css
                </span>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
