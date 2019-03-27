import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    products: null,
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS: return setProducts(state, action);
        case actionTypes.FETCH_PRODUCTS_FAILED: return fetchProductsFailed(state, action);
        default: return state;
    }
};

export default reducer;