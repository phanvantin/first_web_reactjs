import {ADD_TO_CART,REMOVE_FROM_CART,UPDATE_QNT}  from './action';
export const CARTS_FROM_LOCAL_STOGARE 	= "shoppingcart";
// const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// let DataProduct = [
// ];
// let cartItems 	 = JSON.parse(localStorage.getItem(CARTS_FROM_LOCAL_STOGARE));
// DataProduct 	 = (cartItems !== null && cartItems.length > 0) ? cartItems : DataProduct;


// let getProductPosition = (cartItems, product) => {
// 	let total  = cartItems.length;
// 	for(let i = 0; i < total; i++){
// 		if(cartItems[i].product.id === product.id) return i;
// 	}
// 	return -1;
// }

let defaultState = [
	// product: []
];
let cartItems 	 = JSON.parse(localStorage.getItem(CARTS_FROM_LOCAL_STOGARE));
defaultState 	 = (cartItems !== null && cartItems.length > 0) ? cartItems : defaultState;
// console.log(cartItems)
let findProductInCart = (cart, product) => {
	let total  = cart.length;
	for(let i = 0; i < total; i++){
		// if(cart[i].product.id === product.id) return i;
		if(cart[i].product.id === product.id) return i;
	}
	return -1;
}

export const carts = (state = defaultState, action) => {
	let index = -1;
	switch (action.type) {
	 	case ADD_TO_CART:
			const {product,quantity} = action.payload
			// index = findProductInCart(state.product,product)
			index = findProductInCart(state,product)
			if(index !== -1) {
			// state.product[index].quantity += quantity
			state[index].quantity += quantity
			} else {
			// state.product.push(action.payload)
			state.push({product, quantity});
			}
			console.log(state)
			localStorage.setItem(CARTS_FROM_LOCAL_STOGARE, JSON.stringify(state));
			return [
			...state,
			// product: [
			// ...state.product
			// ]
			]
		//   return { ...state,
		// 	product: [
		// 		...state.product,
		// 		action.payload
		// 	]
		// };
		case REMOVE_FROM_CART:
			// return {
			// 	...state,
			// 	product: state.product.filter(itemCart=> itemCart.product.id !== action.item.product.id)
			// 	} 
			state = state.filter(itemCart=> itemCart.product.id !== action.item.product.id)
			localStorage.setItem(CARTS_FROM_LOCAL_STOGARE, JSON.stringify(state));
			return [
				...state
			]
				

		case UPDATE_QNT:
			// index = findProductInCart(state.product,action.payload.product)
			index = findProductInCart(state,action.payload.product)
			if(index !== -1) {
				// state.product[index].quantity = action.payload.quantity
				state[index].quantity = action.payload.quantity
			}
			localStorage.setItem(CARTS_FROM_LOCAL_STOGARE, JSON.stringify(state));
				return [
					...state,
			// product: [
			// ...state.product
			// ]
				]
	  	default:
			return state;
	
	}
  };