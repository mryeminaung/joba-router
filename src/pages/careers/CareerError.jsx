import { Link, useRouteError } from 'react-router-dom';

const CareerError = ({ message }) => {
	// const error = useRouteError();

	return (
		<div className='careers-error'>
			<h2>{message}</h2>
			<Link to='/' className='backBtn'>
				Back to the Home
			</Link>
		</div>
	);
};

export default CareerError;
