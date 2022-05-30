import '../css/Select.css'
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {sortDefault, sortPriceAsc, sortPriceDesc} from "../reducers/sortSlice";
import {setPage} from "../reducers/paginationSlice";

const Select = ({ children }) => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const {
        defaultVal,
        priceAsc,
        priceDesc
    } = useSelector(state => state.sortReducer)
    return (
        <div className='select'>
            <div className="toggle" onClick={() => setOpen(!open)}>
                {
                    defaultVal
                        ? children[0]
                        : (priceDesc ? children[1]
                            : priceAsc ? children[2] : <p>Error</p>)
                }
                {open ? <Icon
                    path={mdiChevronUp}
                    size={1}
                /> : <Icon
                    path={mdiChevronDown}
                    size={1}
                />}
            </div>
            {open && (
                <div className="options">
                    {children.map((option, index) => {
                        return (
                            <div className="option" key={index} onClick={() => {
                                setOpen(false)
                                dispatch(setPage(0))
                                switch (index) {
                                    case 0:
                                        dispatch(sortDefault())
                                        break
                                    case 1:
                                        dispatch(sortPriceDesc())
                                        break
                                    case 2:
                                        dispatch(sortPriceAsc())
                                        break
                                    default:
                                        dispatch(sortDefault())
                                }
                            }}>
                                {option}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Select