import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-3 right-4 z-50 p-2 rounded-full bg-gray-800 dark:bg-gray-700 text-gray-100 transform transition-all duration-300 hover:scale-110 active:scale-95"
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}