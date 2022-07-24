import ReactPaginate, {ReactPaginateProps} from "react-paginate";
import style from "./Pagination.module.scss"
import React, {FC} from "react";

type PaginationType = {
    pageCount:number
    currentPage:number
    onChangePage:(e:number)=>void
    renderOnZeroPageCount?: (props: ReactPaginateProps) => void | null;
}

export const Pagination:FC<PaginationType> = (props) => {
    const {onChangePage, currentPage, pageCount, renderOnZeroPageCount} = props

    return (
        <ReactPaginate
            nextLabel=" >"
            breakLabel="..."
            previousLabel="< "
            pageCount={pageCount}
            marginPagesDisplayed={1}
            forcePage={currentPage - 1}
            pageRangeDisplayed={1}
            className={style.pagination}
            renderOnZeroPageCount={renderOnZeroPageCount}
            onPageChange={(e)=>onChangePage(e.selected + 1)}

        />
    );
};
