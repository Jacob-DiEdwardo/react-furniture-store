import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Shop.module.css';
import Banner from '../../components/UI/Banner/Banner';
import CartButton from '../../components/UI/CartButton/CartButton';
import ShopControls from '../../components/UI/ShopControls/ShopControls';
import Products from '../../components/Products/Products';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-shop';
import Loader from '../../components/UI/Loader/Loader';
import * as actions from '../../store/actions/index';

class Shop extends Component {
    
    componentDidMount() {
        this.props.onFetchProducts();
    }

    render() { 
        let products = this.props.error ? <p>Products could not be loaded</p> : <Loader />
        if (this.props.products) {
            products = <Products inventory={this.props.products} />
        }

        return (
            <div>
                <Banner>
                    <CartButton />
                </Banner>
                <div className={classes.Shop}>
                    <ShopControls />
                    {products}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
        error: state.shop.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(actions.fetchProducts())
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Shop, axios));