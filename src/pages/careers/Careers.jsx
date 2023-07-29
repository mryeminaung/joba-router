import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CareerError from './CareerError';
import '../../server';

const Careers = () => {
	const [careers, setCareers] = useState(null);
	// const careers = useLoaderData();
	const navigate = useNavigate();

	useEffect(() => {
		careersLoader();
	}, []);

	const careersLoader = async () => {
		const res = await fetch('/api/careers');
		const data = await res.json();
		if (res.ok) {
			setCareers(data.careers);
		}
	};

	// useEffect(() => {
	// 	careersLoader();
	// }, []);

	// const careersLoader = async () => {
	// 	const res = await fetch('http://localhost:5000/careers');
	// 	const data = await res.json();
	// 	setCareers([...data]);
	// };

	return (
		<div className='careers'>
			{careers ? (
				careers.map((career) => (
					<div key={career.id} onClick={() => navigate(`${career.id}`)}>
						<p>{career.title}</p>
						<p>Based in {career.location}</p>
					</div>
				))
			) : (
				<CareerError message='Could not fetch that careers' />
			)}
		</div>
	);
};

export const careersLoader = async () => {
	// const res = await fetch('http://localhost:5000/careers');

	// if (!res.ok) {
	// 	throw Error('Could not fetch that careers...');
	// }

	// return res.json();
	return null;
};

export default Careers;
