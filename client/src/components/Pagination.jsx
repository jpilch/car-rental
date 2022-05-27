import '../css/Pagination.css'
import {useSelector, useDispatch} from "react-redux";
import { mdiMenuLeft, mdiMenuRight } from '@mdi/js';
import Icon from "@mdi/react";
import {setPage} from "../reducers/paginationSlice";

const Pagination = () => {
    const { page, pageCount } = useSelector(state => state.paginationReducer)
    const dispatch = useDispatch()

    return (
        <section className="pagination">
            <div
                className={"navigate navigate-left".concat(page === 0 ? ' hidden' : '')}
                onClick={
                    page === 0
                        ? () => console.log('End of results.')
                        : () => dispatch(setPage(page-1))
                }
            >
                <Icon
                    path={mdiMenuLeft}
                    size={1}
                />
            </div>
            <div className="pages">
                {
                    [...Array(pageCount).keys()].map((index, pageNumber) => {
                        return (
                            <div key={index} className={'page'.concat(pageNumber === page ? ' current' : '')}>
                                <p className='page-number'>{pageNumber}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div
                className={"navigate navigate-right".concat(page === pageCount ? ' hidden' : '')}
                onClick={
                    page === pageCount -1
                        ? () => console.log('End of results.')
                        : () => dispatch(setPage(page+1))
                }
            >
                <Icon
                    path={mdiMenuRight}
                    size={1}
                />
            </div>
        </section>
    )
}

export default Pagination