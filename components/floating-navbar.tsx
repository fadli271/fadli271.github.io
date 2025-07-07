import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

interface FloatingNavbarProps {
  content: Record<string, string>;
  setLang: (lang: string) => void;
  currentLang: string;
}

export default function FloatingNavbar({
  content,
  setLang,
  currentLang,
}: FloatingNavbarProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLangChange = (lang: string) => {
    setLang(lang);
    setIsLangOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 mx-96 mt-10">
      {/* Language Switcher */}
      <div className="relative">
        <button
          className="flex items-center gap-2 content-card px-3 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          <span>{currentLang === "id" ? "Indonesia" : "English"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isLangOpen && (
          <div className="dropdown-menu absolute right-0 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <button
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleLangChange("id")}
              >
                Indonesia
              </button>
              <button
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleLangChange("en")}
              >
                English
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Menu Button */}
      <div className="relative">
        <button
          className="w-12 h-12 flex items-center justify-center bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 transition-all transform hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
        {isMenuOpen && (
          <div className="dropdown-menu absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {Object.entries(content).map(([key, value]) => (
                <a
                  key={key}
                  className="nav-link text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  href={`#${key}`}
                >
                  {value}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
