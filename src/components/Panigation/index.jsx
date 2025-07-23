import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pagination = ({ typeMovie, setListMovie }) => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const currentpage_ = localStorage.setItem('Current page', currentPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
            setListMovie(movies);
        }
    };

    const createPagination = (current, total) => {
        const delta = 2; // số lượng trang trước và sau current
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = 1; i <= total; i++) {
            if (
                i === 1 ||
                i === total ||
                (i >= current - delta && i <= current + delta)
            ) {
                range.push(i);
            }
        }

        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l > 2) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const url =
                    typeMovie === 'all'
                        ? `https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=${currentPage}`
                        : `https://phimapi.com/v1/api/the-loai/${typeMovie}?page=${currentPage}`;

                const res = await axios.get(url);

                const items =
                    typeMovie === 'all' ? res.data.items : res.data.data.items;

                setListMovie(items);
                setTotalPages(res.data.data.params.pagination.totalPages); // hoặc lấy từ res nếu có
                console.log(res);
                console.log(url);
            } catch (error) {
                console.error('Lỗi lấy dữ liệu:', error);
            }
        };

        fetchMovies(); // ← GỌI ở đây thôi là đủ
    }, [typeMovie, currentPage]); // ← Cả 2 đều trigger khi thay đổi

    console.log(typeMovie);
    console.log(currentPage);
    console.log(movies);
    console.log(currentpage_);

    return (
        <div className="mt-6 flex flex-wrap justify-center gap-2 px-3">
            <button
                className="rounded bg-gray-600 px-3 py-1 text-white"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ← Trước
            </button>

            {createPagination(currentPage, totalPages).map((page, index) => (
                <button
                    key={index}
                    disabled={page === '...'}
                    className={`rounded px-3 py-1 ${
                        page === currentPage
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-300 text-black'
                    } ${page === '...' ? 'cursor-default' : ''}`}
                    onClick={() =>
                        typeof page === 'number' && handlePageChange(page)
                    }
                >
                    {page}
                </button>
            ))}

            <button
                className="rounded bg-gray-600 px-3 py-1 text-white"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Tiếp →
            </button>
        </div>
    );
};

export default Pagination;
