import React from 'react';

// import NotfoundPage from './pages/NotfoundPage';
import HomePage from './pages/HomePage';

import HomeProduct from './pages/HomeProduct';
import HomeServices from './pages/HomeServices';
import FilterProduct from './pages/FilterProduct';
import PostsCategory from './pages/PostsCategory';
import Blogs from './pages/blogs';
import Cart from './pages/Cart';
import Catalogue from './components/product/Catalogue';
import PostDetail from './pages/PostDetail';
import PostNotFound from './components/postNotFound';
import CvPage from './pages/cv';
// import ModalUser from './components/Home/ModalUser';
// import ProductItem from './components/product/ProductItem';



const routes = [
    { 
        path: '/blogs',
        exact: true,
        main: () => <Blogs />
    },
    { 
        path: '/cv',
        exact: true,
        main: () => <CvPage />
    },
    { 
        path: '/Cart',
        exact: true,
        main: () => <Cart />
    },
    { 
        path: '/blogs/:slug',
        exact: true,
        main: () => <PostDetail />
    },
    { 
        path: '/category/:slug',
        exact: true,
        main: () => <PostsCategory />
    },
    { 
        path: '/Services',
        exact: true,
        main: () => <HomeServices />
    },
    { 
        path: '/Filterproduct',
        exact: true,
        main: () => <FilterProduct  />
    },
    { 
        path: '/Product',
        exact: true,
        main: () => <HomeProduct  />
    },
    { 
        path: '/Catalogue',
        exact: false,
        main: () => <Catalogue />
    },
    { 
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    { 
        path: '',
        exact: false,
        main: () => <PostNotFound />
    },
    // { 
    //     path: '/ModalUser',
    //     exact: false,
    //     main: () => <ModalUser />
    // },
    // { 
    //     path: '/Catalogue/all',
    //     exact: true,
    //     main: () => <ProductItem />
    // },
    // { 
    //     path: '',
    //     exact: true,
    //     main: () => <NotfoundPage />
    // },
];

export default routes;