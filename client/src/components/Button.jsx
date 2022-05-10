import '../css/Button.css'

const Button = ({text, dark}) => {
	return (
		<button type="submit" className={'btn animated-btn '.concat(dark ? 'btn-dark' : 'btn-light')}>
			{text}
		</button>
	)
}

export default Button