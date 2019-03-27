import * as actionTypes from './actionTypes';
import axios from '../../axios-shop';

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products
    };
};

export const fetchProductsFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED
    };
};

export const fetchProducts = () => {
    return dispatch => {
        axios.get('/products.json')
            .then(res => {
                dispatch(setProducts(res.data));
            })
            .catch(err => {
                dispatch(fetchProductsFailed())
            });
    };
};