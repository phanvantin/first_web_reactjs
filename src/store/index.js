import { createStore, applyMiddleware, combineReducers } from 'redux'
import postsReducer from './posts/reducer'
import authReducer from './auth/reducer'
import categoriesReducer from './categories/reducer';
import products from './shopcart/reducer';
import {carts} from './shopcart/cart';
import menusReducer from './menu/reducer';
import commentsReducer from './comments/reducer';



import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  Posts: postsReducer,
  Auth: authReducer,
  Categories: categoriesReducer,
  Products: products,
  Carts: carts,
  Menus: menusReducer,
  Comments: commentsReducer,

  
  

})
const middlewares = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, middlewares)

export default store