import React, {useEffect} from 'react';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import { useDispatch } from 'react-redux';
  
import HeaderTop from './components/Home/header/HeaderTop';
import Header from './components/Home/header/Header';
import Footer from './components/Home/footer/Footer';
import routes from './router-config';
import ScrollTop from './components/scrollTop/scrollTop';
import { actFetchCategoriesAsync } from './store/categories/actions';
import { actGetMenuAsync } from './store/menu/action';
import { actFetchMeAsync } from './store/auth/actions';




function App() {
  const isFooter = useRouteMatch(['/cv'])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actFetchMeAsync())
  }, [dispatch])
  useEffect(() => {
    dispatch(actFetchCategoriesAsync());
    dispatch(actGetMenuAsync())
  }, [dispatch])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  function showRouter(routes) {
    let xhtml = null;
    if(routes.length >0) {
        xhtml = routes.map((route, index) => {
        return (<Route key={index} exact={route.exact} path={route.path} component={route.main}/> );
      });
    }
    return <Switch>{xhtml}</Switch>;
  }
  return (
    // <Router>
      <div className="app">
          <HeaderTop />
          <Header/>
          {showRouter(routes)}
          {!isFooter && <Footer/>}
          <ScrollTop/>
      </div>
    // </Router>
  );
}
export default App;
