import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    products: null,
    currentProductPage: 1,
    itemsPerPage: 12,
    cart: null,
    error: false
}

const setProducts = (state, action) => {
    return updateObject(state, {
        products: action.products,
        error: false
    });
}

const fetchProductsFailed = (state, action) => {
    return updateObject(state, {error: true});
}

const updateProductPage = (state, action) => {
    return updateObject(state, {currentProductPage: action.page});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS: return setProducts(state, action);
        case actionTypes.FETCH_PRODUCTS_FAILED: return fetchProductsFailed(state, action);
        case actionTypes.UPDATE_PRODUCT_PAGE: return updateProductPage(state, action);
        default: return state;
    }
};

export default reducer;