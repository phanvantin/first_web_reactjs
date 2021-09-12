export const LIST_PRODUCT 		= 'LIST_PRODUCT';
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QNT ="UPDATE_QUANTITY"



export const actAddToCart = (product, quantity)=> {
	return {
		type : ADD_TO_CART,
		payload: {
			product, 
			quantity
		}
		
	}
}
export const actDeleteItem = (item) => {
	return {
		type: REMOVE_FROM_CART,
		item
	}
}
export const actUpdateQnt = (product, quantity)=> {
	return {
		type : UPDATE_QNT,
		payload: {
			product, 
			quantity
		}
		
	}
}


// export const addToCart = (product) => (dispatch, getState) => {

// 	const cartItems = getState().Carts.cartItems.slice();
// 	console.log(cartItems)
// 	let alreadyExists = false;
// 	cartItems.forEach((x) => {
// 	  if (x._id === product._id) {
// 		alreadyExists = true;
// 		x.count++;
// 	  }
// 	});
// 	if (!alreadyExists) {
// 	  cartItems.push({ ...product, count: 1 });
// 	}
// 	dispatch({
// 	  type: ADD_TO_CART,
// 	  payload: { cartItems },
// 	});
// 	localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   };
  