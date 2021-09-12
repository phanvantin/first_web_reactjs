import React from 'react';
import {
      Switch
  } from "react-router-dom";
import routes from './router-config';
import ProductList from './ProductList';
import { Route } from 'react-router';
import { useRouteMatch} from 'react-router-dom';

function  Catalogue() {
    var match = useRouteMatch();
    console.log(match)
    const showRouter= (routes) => {
        let xhtml = null;
        if(routes.length >0) {
            xhtml = routes.map((route, index) => {
            return (<Route key={index} exact={route.exact} path={`${match.url}${route.path}`} component={route.main}/> );
          });
      }
      return <Switch>{xhtml}</Switch>;
    }
		return (
            
            <section className="gallery" id="gallery">
                <h1 className="heading"> <span> product gallery </span> </h1>
                <ProductList />
                <div className="image-container">
                {/* <Route path='/Catalogue/all' component={ProductItem} />
                <Route path='/Catalogue/phone' component={ProductItem1} />
                <Route path='/Catalogue/laptop' component={ProductItem2} /> */}
                {showRouter(routes)}
                </div>
            </section>
		);
        
}       

export default Catalogue;