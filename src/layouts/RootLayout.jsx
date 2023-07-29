import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function RootLayout() {
	const navigate = useNavigate();

	return (
		<div className='root-layout'>
			<header>
				<nav>
					<h1 onClick={() => navigate('/')}>Jobarouter</h1>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='about'>About</NavLink>
					<NavLink to='careers'>Careers</NavLink>
					<NavLink to='help'>Help</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;
