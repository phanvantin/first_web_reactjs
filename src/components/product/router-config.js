import React from 'react';

import ProductItem from './ProductItem';
import ProductItem2 from './ProductItem2';
import ProductItem1 from './ProductItem1';



const routes = [
    {
        path: '',
        exact: true,
        main: () => <ProductItem />
    },
    {
        path: '/all',
        exact: false,
        main: () => <ProductItem />
    },
    {
        path: '/phone',
        exact: false,
        main: () => <ProductItem1 />
    },
    {
        path: '/laptop',
        exact: false,
        main: () => <ProductItem2 />
    }
  
    // { 
    //     path: '',
    //     exact: true,
    //     main: () => <NotfoundPage />
    // },
];

export default routes;