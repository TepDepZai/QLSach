import './Pagination.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Pagination = ({ totalPages = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    onPageChange && onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`btn_numberpage ${i === currentPage ? 'active' : ''}`}
          onClick={() => changePage(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="Pg-gps">
      <div className="Pg-box">
        <div className="Pg-box2">
          <ChevronLeft
            className="btn_numberpage"
            onClick={() => changePage(currentPage - 1)}
          />
          {renderPageNumbers()}
          <ChevronRight
            className="btn_numberpage"
            onClick={() => changePage(currentPage + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
