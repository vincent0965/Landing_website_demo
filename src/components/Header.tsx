export default function Header() {
    return(
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-blue-600">MyBrand</h1>

            {/* Nav Links */}
            <nav className="space-x-6 hidden md:block">
            <a href="#hero" className="text-gray-600 hover:text-blue-600">首頁</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">特色</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600">產品</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">聯絡</a>
            </nav>

            {/* CTA Button */}
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            開始使用
            </button>
        </div>
        </header>
    )
}