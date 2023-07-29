import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

// render for every route as root layout
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';

// when there is no match route
import NotFound from './pages/NotFound';

// help section
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/Help/Faq';
import Contact from './pages/Help/Contact';

// careers section
import CareersLayout from './layouts/CareersLayout';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, {
	careerDetailsLoader,
} from './pages/careers/CareerDetails';
import CareerError from './pages/careers/CareerError';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path='about' element={<About />} />

			<Route path='help' element={<HelpLayout />}>
				<Route path='faq' element={<Faq />} />
				<Route path='contact' element={<Contact />} />
			</Route>

			<Route
				path='careers'
				element={<CareersLayout />}
				// errorElement={<CareerError />}
				>
				<Route 
					index 
					element={<Careers />} 
					// loader={careersLoader} 
				/>
				<Route
					path=':careerId'
					element={<CareerDetails />}
					// loader={careerDetailsLoader}
				/>
			</Route>

			<Route path='*' element={<NotFound />} />
		</Route>,
	),
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
