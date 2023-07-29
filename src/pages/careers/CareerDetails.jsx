import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CareerError from './CareerError';

const CareerDetails = () => {
	const [career, setCareer] = useState(null);
	const { careerId } = useParams();
	// const career = useLoaderData();

	useEffect(() => {
		careerDetailLoader();
	}, []);

	const careerDetailLoader = async () => {
		const res = await fetch(`/api/careers/${careerId}`);
		const data = await res.json();
		if (res.ok) {
			setCareer(data.careers);
		}
	};
	// useEffect(() => {
	// 	careerDetailLoader();
	// }, [careerId]);

	// const careerDetailLoader = async () => {
	// 	const res = await fetch(`http://localhost:5000/careers/${careerId}`);
	// 	const data = await res.json();

	// 	if (!res.ok) {
	// 		throw Error('Could not find that career');
	// 	}
	// 	setCareer(data);
	// };

	return (
		<div className='career-details'>
			{career ? (
				<>
					<h2>Career Details for {career.title}</h2>
					<p>Starting salary : {career.salary}</p>
					<p>Locatin : {career.location}</p>
					<div className='detail'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
							voluptas repellendus expedita maiores dolor repellat enim culpa
							porro autem praesentium reiciendis fugit laboriosam, a eius omnis
							quo eum impedit consequuntur.
						</p>
					</div>
					<Link to='/careers' className='backBtn'>
						Back to the careers
					</Link>
				</>
			) : (
				<CareerError message='Could not find that career' />
			)}
		</div>
	);
};

export const careerDetailsLoader = async ({ params }) => {
	// const { careerId } = params;
	// const res = await fetch(`http://localhost:5000/careers/${careerId}`);

	// if (!res.ok) {
	// 	throw Error('Could not find that career...');
	// }

	// return res.json();
	return null;
};

export default CareerDetails;
