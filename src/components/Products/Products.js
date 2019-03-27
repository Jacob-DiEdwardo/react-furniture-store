import React from 'react';

import classes from './Products.module.css';
import Product from './Product/Product';
import PageSelector from './PageSelector/PageSelector';

const products = (props) => {
    let inventory = Object.keys(props.inventory)
        .map(prodKey => {
            return [...Array(props.inventory[prodKey])].map(prod => {
                return prod.shouldDisplay ? 
                    <Product
                        key={prod}
                        id={prod.productId}
                        imageUrl={prod.imageUrl}
                        name={prod.name}
                        rating={prod.rating}
                        price={prod.price} /> : null;
            });
        });
    
    let numberOfPages = Math.ceil(inventory.length / 12);
    let pageSelectors = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pageSelectors.push(
            <PageSelector key={i} pageNumber={i} clicked={props.updatePage} />
        );
    }

    let bottomIndex = props.itemsPerPage * (props.currentPage - 1);
    let topIndex = (props.itemsPerPage * props.currentPage) - 1;
    let productsToDisplay = inventory.filter(prod => {
        return inventory.indexOf(prod) >= bottomIndex && inventory.indexOf(prod) <= topIndex;
    });

    return (
        <div className={classes.ProductsSection}>
            <div className={classes.Products}>
                {productsToDisplay}
            </div>
            <div className={classes.PageSelectors}>
                {pageSelectors}
            </div>
        </div>
    );
}
 
export default products;