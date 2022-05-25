import SimpleButton from "./SimpleButton";
import {useState} from "react";

const Modal = ({ text, onConfirm }) => {
    const [showModal, setShowModal] = useState(false)

    const style = {
        width: '100%',
        fontStyle: 'italic',
        height: '100%',
        display: !showModal ? 'none' : 'flex',
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1,
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }

    const modalStyle = {
        padding: '2rem',
        width: '50%',
        height: '30%',
        backgroundColor: 'var(--clr-lighter)',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }

    const headingStyle = {
        textAlign: 'center'
    }

    const actionsStyle = {
        alignSelf: 'flex-end',
        display: 'flex',
        gap: '2rem'
    }

    return (
        <div id='modal-container' style={style}>
            <div className="modal" style={modalStyle}>
                <h2 style={headingStyle}>{text}</h2>
                <div className="modal-actions" style={actionsStyle}>
                    <SimpleButton
                        text={'Cancel'}
                        bgColor={'var(--clr-red)'}
                        onClick={() => {
                            onConfirm()
                            setShowModal(false)
                        }}
                    />
                    <SimpleButton
                        text={'Confirm'}
                        bgColor={'var(--clr-green)'}
                        onClick={() => {
                            setShowModal(false)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal