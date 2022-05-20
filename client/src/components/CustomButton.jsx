import '../css/Button.css'
import Radium from "radium";

const CustomButton = ({text, bgHover, colorNormal, colorHover, onClick}) => {
    const btnStyle = {
        borderColor: colorNormal,
        color: colorNormal,
        margin: '0',
        boxShadow: 'none',
        ':hover': {
            backgroundColor: bgHover,
            color: colorHover,
            borderColor: colorHover,
            boxShadow: '0px 0px black'
        }
    }

    return (
        <button style={btnStyle} type="submit" className={'btn animated-btn'} onClick={onClick}>
            {text}
        </button>
    )
}

export default Radium(CustomButton)