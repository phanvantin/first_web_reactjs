import React from 'react';
import { NavLink, useRouteMatch} from 'react-router-dom';


function  ProductList() {
    const match = useRouteMatch();
		return (
            <ul className="controls">
                <li className="btn button-active" data-filter="all"><NavLink to={`${match.url}/all`} activeClassName="active" >all</NavLink></li>
                <li className="btn" data-filter="phone"><NavLink to={`${match.url}/phone`} activeClassName="active" >phone</NavLink></li>
                <li className="btn" data-filter="laptop"><NavLink to={`${match.url}/laptop`} activeClassName="active" >laptop</NavLink></li>
                <li className="btn" data-filter="headphone"><NavLink to={`${match.url}/phone`} activeClassName="active" >laptop</NavLink></li>
                <li className="btn" data-filter="shoes"><NavLink to={`${match.url}/all`} activeClassName="active" >laptop</NavLink></li>
            </ul>
		);
	}

export default ProductList;