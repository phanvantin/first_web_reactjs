import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Product extends Component {
	render() {
		return (
			<div className="grid wide">
				<div className="row">
					<div className="col l-4">
						<div className="product">
							<a href="/">
								<div className="img-product" />
							</a>
							<div className="title">
								<h5 className="title-header"><a href="/">SANDAL VENTO</a></h5>
								<NavLink to ="/Catalogue" className="link-view">XEM CHI TIẾT</NavLink>
							</div>
						</div>    
					</div>
					<div className="col l-4">
						<div className="product">
							<a href="/">
								<div className="img-product" />
							</a>
							<div className="title">
								<h5 className="title-header"><a href="/">SANDAL VENTO</a></h5>
								<a href="/" className="link-view">XEM CHI TIẾT</a>
							</div>
						</div>    
					</div>
					<div className="col l-4">
						<div className="product">
							<a href="/">
								<div className="img-product" />
							</a>
							<div className="title">
								<h5 className="title-header"><a href="/">SANDAL VENTO</a></h5>
								<a href="/" className="link-view">XEM CHI TIẾT</a>
							</div>
						</div>    
					</div>
				</div>
			</div>
		);
	}
}

export default Product;
