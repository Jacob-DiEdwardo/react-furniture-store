import React from 'react';

import classes from './Products.module.css';
import Product from './Product/Product';

const products = (props) => {
    let inventory = Object.keys(props.inventory)
        .map(prodKey => {
            return [...Array(props.inventory[prodKey])].map(prod => {
                return prod.quantityAvailable !== 0 ? 
                    <Product
                        key={prod.productId} /> : null;
            });
        });

    return (
        <div className={classes.ProductsSection}>
            <div className={classes.Products}>
                {inventory}
            </div>
            <div className={classes.PageSelector}>
                <p>1 2</p>
            </div>
        </div>
    );
}
 
export default products;