import React, {FC} from "react";
import style from "./Pagination.module.scss"
import {useAppSelector} from "../../redux/store";
import ReactPaginate, {ReactPaginateProps} from "react-paginate";

type PaginationType = {
    currentPage: number
    onChangePage: (e: number) => void
    renderOnZeroPageCount?: (props: ReactPaginateProps) => void | null;
}

export const Pagination: FC<PaginationType> = (props) => {
    const {onChangePage, currentPage, renderOnZeroPageCount} = props
    const pageCount = useAppSelector(state => state.cardsReducer.pageCount)

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
            onPageChange={(e) => onChangePage(e.selected + 1)}

        />
    );
};
