import {useContext} from "react";
import {AppContext} from "../AppContext";
import Button from "../components/Button";

const UserAccount = (props) => {
    const {user, handleLogout} = useContext(AppContext)

    const accountOptionsContainerStyle = {
        height: '800px',
        paddingTop: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
    }

    const accountOptionsStyle = {
        border: '1px solid #ccc',
        borderRadius: '20px',
        padding: '40px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px'
    }

    return (
        <div style={accountOptionsContainerStyle}>
            <h1>Hi there, {user.full_name}</h1>
            <div style={accountOptionsStyle}>
                <h3>Information</h3>
                <h3>History</h3>
                <h3>Settings</h3>
            </div>
            <button
                className={'btn'}
                onClick={() => handleLogout()}
            >
                <a href="/">Logout</a>
            </button>
        </div>
    )
}

export default UserAccount