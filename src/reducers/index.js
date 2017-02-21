import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';

const reducers = combineReducers({
  products: ProductsReducer
})

export default reducers;