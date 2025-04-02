import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import portfolio from "../assets/portfolioImage.jpg"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 transform ${
        isScrolled
          ? "bg-gray-800/80 dark:bg-dark/80 backdrop-blur-md shadow-lg translate-y-0"
          : "-translate-y-1"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-96 h-16">
          <div className="flex gap-2 h-full items-center justify-center">
            <img src={portfolio} className="h-12 w-12 rounded-full" />
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-2xl font-bold cursor-pointer hover:text-primary transition-colors duration-300"
            >
              Rajat Sharma
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            {["home", "projects", "experience", "skills", "contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link capitalize hover:text-primary transition-colors duration-300"
                  activeClass="active"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
