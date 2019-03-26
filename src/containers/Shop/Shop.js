import React, { Component } from 'react';

import classes from './Shop.module.css';
import Banner from '../../components/UI/Banner/Banner';
import CartButton from '../../components/UI/CartButton/CartButton';
import ShopControls from '../../components/UI/ShopControls/ShopControls';
import Products from '../../components/Products/Products';

class Shop extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Banner>
                    <CartButton />
                </Banner>
                <div className={classes.Shop}>
                    <ShopControls />
                    <Products />
                </div>
            </div>
        );
    }
}
 
export default Shop;