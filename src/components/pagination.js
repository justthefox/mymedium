import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const COUNT_PAGES_SIDE = 2;

const PaginationRestItem = () => (
  <li className="page-item">
    <span className="page-link" style={{ cursor: 'default' }}>
      ...
    </span>
  </li>
);

const PaginationItem = ({ page, currentPage, url }) => {
  return (
    <li
      className={cn('page-item', {
        active: currentPage === page,
      })}
    >
      <Link to={`${url}?page=${page}`} className="page-link">
        {page}
      </Link>
    </li>
  );
};

const Pagination = ({ total, currentPage, url }) => {
  const generatePagesList = () => {
    const pages = [];

    const startPage = currentPage < COUNT_PAGES_SIDE * 2 ? 1 : currentPage - 2;
    const endPage =
      currentPage + COUNT_PAGES_SIDE + 1 > total ||
      currentPage === total - COUNT_PAGES_SIDE * 2
        ? total
        : currentPage + COUNT_PAGES_SIDE + 1;

    if (currentPage > COUNT_PAGES_SIDE + 1) {
      pages.push(
        <PaginationItem key={1} page={1} currentPage={currentPage} url={url} />,
      );
      pages.push(<PaginationRestItem key={Math.random()} />);
    }

    for (let i = startPage; i < endPage; i++) {
      pages.push(
        <PaginationItem key={i} page={i} currentPage={currentPage} url={url} />,
      );
    }

    if (currentPage + COUNT_PAGES_SIDE * 2 < total) {
      pages.push(<PaginationRestItem key={Math.random()} />);
      pages.push(
        <PaginationItem
          key={total}
          page={total}
          selectedPage={currentPage}
          url={url}
        />,
      );
    }
    return pages;
  };

  return <ul className="pagination">{generatePagesList()}</ul>;
};

export default Pagination;
