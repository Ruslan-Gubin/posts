import  { FC  } from "react";
import { paginationNumbers } from "./helper";
import { PaginationRGProps } from "./types";

import "./PaginationRG.css";


const PaginationRG: FC<PaginationRGProps> = ({
  countPerPage,
  totalCount,
  currentPage,
  clickNumber,
  prevPage,
  nextPage,
  className,
  color,
}) => {
  const lastPage = Math.ceil(totalCount / countPerPage)
  const numbers: number[] = [...paginationNumbers(currentPage, lastPage)]
 
  const rootClasses = (initialClass: string) => {
    const result = [initialClass]
    if (color) {
      result.push(`pagination-button__${color}`)
    }
    return result.join(' ')
  }
  
 
  return (
    <section
      className={className ? `pagination-rg ${className}` : "pagination-rg"}
    >
      <button
        onClick={currentPage > 1 ? prevPage : () => false}
        className={currentPage > 1 ? `${rootClasses('pagination-button')} pagination-button__active` : 'pagination-button'}
      >
        Prev
      </button>
      {numbers.map((page, index) => (
        <div
          key={index}
          onClick={() => (page === currentPage || !page ) ?  false : clickNumber(page)}
          className={page === currentPage   ? `${rootClasses('pagination-page')} pagination-current__active` : 'pagination-page'}
        >
          {page === 0 ? <div>...</div> : page}
        </div>
      ))}
      <button
        onClick={currentPage < lastPage ? nextPage : () => false}
        className={currentPage < lastPage ? `${rootClasses('pagination-button')} pagination-button__active` : 'pagination-button'}
      >
        Next
      </button>
    </section>
  );
};

export { PaginationRG };
