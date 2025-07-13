import { Search, LogIn } from 'lucide-react';
import movieLogo from '../../assets/logo/movie-logo.png';

const Header = () => {
    return (
        <header className="sticky top-0 z-[999] w-full bg-[#131720]">
            <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4">
                <a href="/">
                    <img className="w-14" src={movieLogo} alt="logo-image" />
                </a>
                <div>
                    <nav className="space-x-6">
                        <a
                            href="#"
                            className="text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                        >
                            Thể Loại
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                        >
                            Quốc Gia
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                        >
                            Phim Mới
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                        >
                            Phim Bộ
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                        >
                            Phim Lẻ
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                        >
                            Hoạt Hình 4K
                        </a>
                    </nav>
                </div>
                <div className="flex w-80 items-center justify-between">
                    <div className="relative mr-2">
                        <input
                            className="rounded-2xl bg-[#151f30] px-5 py-2 text-white placeholder-white placeholder:text-sm"
                            placeholder="Search"
                        />
                        <Search
                            size={20}
                            className="absolute top-1/2 right-4 -translate-y-1/2 transform text-[#2f80ed]"
                        />
                    </div>

                    <button className="flex items-center text-sm text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]">
                        Sign in
                        <LogIn className="ml-2" size={16} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
