import '../css/Button.css'
import Radium from "radium";

const CustomButton = ({text, bgHover, colorNormal, colorHover}) => {
    const btnStyle = {
        borderColor: colorNormal,
        color: colorNormal,
        ':hover': {
            backgroundColor: bgHover,
            color: colorHover,
            borderColor: colorHover,
            boxShadow: '0px 0px black'
        }
    }

    return (
        <button style={btnStyle} type="submit" className={'btn animated-btn'}>
            {text}
        </button>
    )
}

export default Radium(CustomButton)