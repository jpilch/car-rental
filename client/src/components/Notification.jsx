import '../css/Notification.css'
import {useDispatch, useSelector} from "react-redux";
import { mdiExclamationThick } from '@mdi/js';
import Icon from '@mdi/react'

const Notification = () => {
    const {message, success, show} = useSelector(state => state.notificationReducer)

    const notificationStyle = {
        backgroundColor: success ? '#5dc278' : '#b84848',
        border: `2px solid ${success ? '#1f8f3d' : '#8f231f'}`
    }

    return (
        <div id="notification" className={show ? '' : 'none'} style={{
            display: show ? '' : 'none'
        }}>
            <Icon size={1} path={mdiExclamationThick} />
            <p style={notificationStyle}>{message}</p>
            <Icon size={1} path={mdiExclamationThick} />
        </div>
    )
}

export default Notification