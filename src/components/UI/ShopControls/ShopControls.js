import React from 'react';

import classes from './ShopControls.module.css';

const shopControls = (props) => {
    return (
        <div className={classes.ShopControls}>
            <div>
                <h3>Categories</h3>
                <ul>
                    <li>Lamps (4)</li>
                    <li>Cabinets (4)</li>
                    <li>Dining Sets (4)</li>
                    <li>End Tables (4)</li>
                </ul>
            </div>
            <div>
                <h3>Sort By</h3>
                <ul>
                    <li>Price (low to high)</li>
                    <li>Price (high to low)</li>
                    <li>Rating</li>
                </ul>
            </div>
            <div>
                <h3>Price Range</h3>
                <ul>
                    <li>$49 and under</li>
                    <li>$50 to $99</li>
                    <li>$100 and up</li>
                </ul>
            </div>
        </div>
    );
}
 
export default shopControls;