import '../css/Notification.css'
import {useSelector} from "react-redux";
import { mdiExclamationThick } from '@mdi/js';
import Icon from '@mdi/react'

const Notification = () => {
    const {message, success, show} = useSelector(state => state.notificationReducer)

    const notificationStyle = {
        backgroundColor: success ? '#5dc278' : '#b84848',
        border: `2px solid ${success ? '#1f8f3d' : '#8f231f'}`,
        width: '90%',
        height: '100%',
        borderRadius: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    return (
        <div id="notification-container" style={{
            display: show ? '' : 'none',
        }}>
            <div className="notification" style={notificationStyle}>
                <Icon size={1} path={mdiExclamationThick} />
                <p >{message}</p>
                <Icon size={1} path={mdiExclamationThick} />
            </div>
        </div>
    )
}

export default Notification