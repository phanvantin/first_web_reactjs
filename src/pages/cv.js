import React, { useEffect } from 'react';

import Cv from '../components/cv/cv'

function CvPage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	return (
		<>
			<Cv/>
		</>
	);
}

export default CvPage;