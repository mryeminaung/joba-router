import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div>
			<h2>Page not found...</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
				temporibus quibusdam nisi aliquid amet sint aperiam laboriosam
				reiciendis assumenda rem natus sunt molestias autem similique mollitia
				totam hic perspiciatis alias?
			</p>
			<p>
				Go to the <Link to='/'>Homepage</Link>
			</p>
		</div>
	);
}

export default NotFound;
