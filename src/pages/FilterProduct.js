import React, { useEffect } from 'react';

import Filterproduct from '../components/filterProduct/FilterProduct';

function FilterProduct() {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	return (
		<>
			<Filterproduct/>
		</>
	);
}

export default FilterProduct;