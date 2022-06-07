import Button from "./Button";
import '../css/Form.css'
import { useDispatch } from "react-redux";
import { notify } from "../reducers/notificationSlice";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
	const dispatch = useDispatch()
    const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		const topic = e.target.topic.value
		const desc = e.target.desc.value
		e.target.topic.value = ''
		e.target.desc.value = ''
		if (topic.replace(/\W/g, '') === '' || desc.replace(/\W/g, '') === '') {
			dispatch(notify('Please enter topic and description'))
			return
		}
		dispatch(notify('Thanks for submiting', true))
		navigate('/')
	}

    return (
        <div className="form-container">
			<form onSubmit={e => handleSubmit(e)}>
				<h1>Contact Us</h1>
				<div>
					<label htmlFor="topic">Topic</label>
					<input type="text" id="topic" name={'topic'}
					/>
				</div>
				<div>
					<label htmlFor="desc">Description</label>
					<textarea rows='3' id="desc" name={'desc'}
					/>
				</div>
				<Button text={"Submit"}/>
			</form>
		</div>
    )
}

export default ContactForm