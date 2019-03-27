import React from 'react';

import classes from './Banner.module.css';

const banner = (props) => {
    let productsLength = Object.keys(props.inventory)
        .map(prodKey => {
            return [...Array(props.inventory[prodKey])].map(prod => {
                return prod.shouldDisplay
            });
        }).length;

    let startingNumber = props.itemsPerPage * (props.currentPage - 1) + 1;
    let endingNumber;
    if (props.itemsPerPage * props.currentPage > productsLength) {
        endingNumber = productsLength;
    } else {
        endingNumber = props.itemsPerPage * props.currentPage;
    }

    return (
        <div className={classes.Banner}>
            <div className={classes.Showing}>
                <h2>Showing {startingNumber} - {endingNumber} of {productsLength} Items</h2>
            </div>
            <div className={classes.ButtonContainer}>
                {props.children}
            </div>
        </div>
    );
}
 
export default banner;