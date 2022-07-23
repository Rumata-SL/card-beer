import React, {FC} from "react";
import ReactPaginate, {ReactPaginateProps} from "react-paginate";
import style from "./Pagination.module.scss"


type PaginationType = {
    currentPage:number
    pageCount:number

    renderOnZeroPageCount?: (props: ReactPaginateProps) => void | null;
    onChangePage:(e:number)=>void
}


export const Pagination:FC<PaginationType> = (props) => {
    const {onChangePage, currentPage, pageCount, renderOnZeroPageCount} = props

    return (
        <ReactPaginate
            className={style.pagination}
            breakLabel="..."
            nextLabel=" >"
            marginPagesDisplayed={1}
            onPageChange={(e)=>onChangePage(e.selected + 1)}
            // pageRangeDisplayed={5}
            pageCount={pageCount}
            forcePage={currentPage - 1}
            previousLabel="< "
            renderOnZeroPageCount={renderOnZeroPageCount}

        />
    );
};
