import  Mail from "../assets/icons8-gmail.svg";
import  Github from "../assets/icons8-github.svg";
import  Linkedin from "../assets/icons8-linkedin.svg";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title transform transition-all duration-500 hover:scale-105">
          Connect with Me
        </h2>

        <div className="flex justify-center gap-6 mt-6">
          {/* Gmail */}
          <a 
      href="mailto:rajatbakshi933@gmail.com" 
      className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center w-12 h-12"
    >
      <img 
        src={Mail} // Replace with your Icons8 email icon URL
        alt="Email Icon"
        className="w-8 h-8"
      />
    </a>

          {/* GitHub */}
          <a href="https://github.com/RajatSharma123455" target="_blank" rel="noopener noreferrer"
             className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-300 shadow-md hover:shadow-lg">
           <img src={Github} className="" />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/rajatsharma-stack/" target="_blank" rel="noopener noreferrer"
             className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-300 shadow-md hover:shadow-lg">
          <img src={Linkedin} className="" />
          </a>
        </div>
      </div>
    </section>
  );
}
