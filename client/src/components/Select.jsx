import '../css/Select.css'
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import {useState} from "react";

const Select = ({ children }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='select'>
            <div className="toggle" onClick={() => setOpen(!open)}>
                {children[0]}
                {open ? <Icon
                    path={mdiChevronUp}
                    size={1}
                /> : <Icon
                    path={mdiChevronDown}
                    size={1}
                />}
            </div>
            {open && <div className="options">
                {children.slice(1, children.length).map(option => {
                    return <div className="option">{option}</div>
                })}
            </div>}
        </div>
    )
}

export default Select