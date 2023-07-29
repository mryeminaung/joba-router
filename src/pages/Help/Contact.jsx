import { useNavigate } from 'react-router-dom';

const Contact = () => {
	const navigate = useNavigate();

	return (
		<div className='contact'>
			<h3>Contact Us</h3>
			<form onSubmit={() => navigate('/')}>
				<label>
					<span>Your email:</span>
					<input type='email' name='email' required />
				</label>
				<label>
					<span>Your message:</span>
					<textarea rows='5' name='message' required></textarea>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Contact;
