import React, { useEffect } from 'react';

import CartProduct from '../components/cart/cart';

function Cart() {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	return (
		<>
			<CartProduct/>
		</>
	);
}

export default Cart;