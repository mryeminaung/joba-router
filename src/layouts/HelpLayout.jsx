import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
	return (
		<div className='help-layout'>
			<h1>Website Help</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, omnis.
			</p>
			<nav>
				<NavLink to='faq'>View the FAQ</NavLink>
				<NavLink to='contact'>Contact Us</NavLink>
			</nav>

			{/* render faq or contact page here */}
			<Outlet />
      
		</div>
	);
};

export default HelpLayout;
