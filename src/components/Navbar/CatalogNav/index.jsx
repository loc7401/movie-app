import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const CatalogNav = () => {
    const movieKind = ['Featured', 'Popular', 'Newest'];
    const [currentBtnIndex, setCurrenBtnIndex] = useState(0);

    return (
        <div className="mx-auto mt-5 flex max-w-[1200px] items-center justify-between rounded-2xl bg-[#151f30] px-8 py-4">
            <nav className="flex space-x-6">
                <a
                    href="#"
                    className="flex items-center text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                >
                    Thể Loại
                    <ChevronDown className="ml-1" size={14} />
                </a>
                <a
                    href="#"
                    className="flex items-center text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                >
                    Năm
                    <ChevronDown className="ml-1" size={14} />
                </a>
            </nav>

            <div className="flex min-w-[251px] items-center justify-between rounded-3xl bg-[#131720] p-[6px]">
                {movieKind.map((elem, index) => {
                    return (
                        <button
                            key={index}
                            id={index}
                            onClick={() => setCurrenBtnIndex(index)}
                            className={`rounded-2xl ${currentBtnIndex === index ? 'bg-[#151f30] text-[#2f80ed]' : 'text-[#e0e0e0]'} cursor-pointer p-2 text-sm font-medium transition-colors duration-200 ease-in-out`}
                        >
                            {elem}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CatalogNav;
