import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react" // npm install lucide-react

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // 偵測滾動狀態
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // 超過 50px 變色
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold transition ${
            isScrolled ? "text-blue-600" : "text-white"
          }`}
        >
          MyBrand
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {["首頁", "特色", "產品", "聯絡"].map((label, idx) => (
            <a
              key={idx}
              href={`#${["hero", "features", "products", "contact"][idx]}`}
              className={`transition ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button
            className={`px-4 py-2 rounded-lg transition ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-600 hover:bg-gray-200"
            }`}
          >
            開始使用
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`md:hidden border-t transition ${
            isScrolled ? "bg-white" : "bg-gray-900"
          }`}
        >
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {["首頁", "特色", "產品", "聯絡"].map((label, idx) => (
              <a
                key={idx}
                href={`#${["hero", "features", "products", "contact"][idx]}`}
                className={`transition ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-gray-200 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <button
              className={`mt-4 px-4 py-2 rounded-lg transition ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-600 hover:bg-gray-200"
              }`}
            >
              開始使用
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
