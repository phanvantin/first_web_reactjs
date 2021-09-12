import React from 'react';
import Col from '../../../common/reponsive/col';
import {useSelector} from 'react-redux';
import CartItems from './cartItem';
import NoCart from './noCart';
import { Link } from 'react-router-dom';

function HeaderCart() {
	const items = useSelector(state=>state.Carts);
	const showCart = items.length>0;
	return (
		<Col l={1}>
			<div className="header__cart">
				<Link to="/cart" className="header__cart-wrap">
						<i className="header__cart-icon fas fa-shopping-cart" />
						{showCart && <span className="header__cart-notice">{items.length}</span>}
						{/* no-cart: list--no-cart */}
				</Link>	
				<div className="header__cart-list">
					{showCart ? <CartItems items={items}/> : <NoCart/> }
				</div>
			</div>
		</Col>
	);
}

export default HeaderCart;