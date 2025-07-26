export default function Header() {
    return (
        <header className="w-[85%] h-[85%] mx-auto mt-8 mb-15 ounded-2xl transition-colors px-3 flex items-center justify-center">
            <div className="relative w-full flex items-center justify-between py-4">

                <div className="text-xl font-semibold">Shorya</div>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <nav className="flex space-x-10">
                        <p className="cursor-pointer hover:underline">About</p>
                        <p className="cursor-pointer hover:underline">Home</p>
                        <p className="cursor-pointer hover:underline">Contact</p>
                    </nav>
                </div>

                {/* Right: Icons */}
                <div className="flex space-x-8">
                    <a href="https://www.github.com/shoryax/" target="_blank" rel="noopener noreferrer">
                        <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/shorya1/" target="_blank" rel="noopener noreferrer">
                        <img src="/coffee.svg" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/shorya1/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                </div>

            </div>
        </header>
    );
}
