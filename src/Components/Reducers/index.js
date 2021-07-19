import React from 'react';
import { combineReducers } from 'redux';
import BookReducers from './BookReducers';
import ProductReducers from './ProductReducers';
export default combineReducers({
    books : BookReducers,
    products : ProductReducers
})
