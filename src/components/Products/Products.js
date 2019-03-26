import React from 'react';

import classes from './Products.module.css';
import Product from './Product/Product';

const products = (props) => {
    return (
        <div className={classes.ProductsSection}>
            <div className={classes.Products}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className={classes.PageSelector}>
                <p>1 2</p>
            </div>
        </div>
    );
}
 
export default products;