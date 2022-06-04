import '../css/DropDown.css'
import { Link } from 'react-router-dom'

const DropDown = ({setDisplayDropdown, user}) => {
    return (
        <ul className={'dropdown'}>
            <li onClick={() => setDisplayDropdown(false)}>
                <Link to={'/cars'}>Cars</Link>
                </li>
            <li onClick={() => setDisplayDropdown(false)}>
                <Link to={'/contact'}>Contact</Link>
            </li>
            <li onClick={() => setDisplayDropdown(false)}>
                <Link to={user ? '/my-account' : '/login'}>{user ? 'My Account' : 'Login'}</Link>
            </li>
        </ul>
    )
}

export default DropDown