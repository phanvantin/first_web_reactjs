import React, { useEffect } from 'react';

import Slider from './../components/Home/Slider';
// import Product from './../components/Home/Product';
import Slider1 from './../components/Home/slider1/Slider1';
// import OpenToast from './../components/toast/openToast';
import SectionHome from '../components/Home/section/sectionHome';


function HomePage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	return (
		<>
			<Slider/>
			<Slider1/>
			<SectionHome/>
		</>
	);
}

export default HomePage;