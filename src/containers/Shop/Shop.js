import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Shop.module.css';
import Banner from '../../components/UI/Banner/Banner';
import CartButton from '../../components/UI/CartButton/CartButton';
import ShopControls from '../../components/ShopControls/ShopControls';
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
        let shop = this.props.error ? <p>Products could not be loaded</p> : <Loader />
        if (this.props.products) {
            shop = (
                <div>
                    <Banner 
                        currentPage={this.props.page} 
                        itemsPerPage={this.props.itemsPerPage}
                        inventory={this.props.products} >
                        <CartButton />
                    </Banner>
                    <div className={classes.Shop}>
                        <ShopControls />
                        <Products 
                                inventory={this.props.products} 
                                updatePage={this.props.onUpdateProductPage}
                                currentPage={this.props.page}
                                itemsPerPage={this.props.itemsPerPage} />
                    </div>
                </div>
            );
        }

        return shop;
    }
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
        error: state.shop.error,
        page: state.shop.currentProductPage,
        itemsPerPage: state.shop.itemsPerPage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(actions.fetchProducts()),
        onUpdateProductPage: (page) => dispatch(actions.updateProductPage(page))
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Shop, axios));