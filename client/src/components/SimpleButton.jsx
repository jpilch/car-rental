import '../css/SimpleButton.css'

const SimpleButton = ({text, bgColor, onClick}) => {
    const buttonStyle = {
        backgroundColor: bgColor
    }
    return (
        <button style={buttonStyle} className='simple'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default SimpleButton