const Button = (props) => {
	return (
		<button type="submit" className="btn">
			<a>{props.text}</a>
		</button>
	)
}

export default Button