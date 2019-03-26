import React from 'react';

import classes from './Product.module.css';

const product = (props) => {
    return (
        <div className={classes.Product}>
            <div>
                <p>photo</p>
            </div>
            <div>
                <p>A nice lamp</p>
            </div>
            <div>
                <p>ROW OF STARS</p>
            </div>
            <div>
                <p>$100</p>
            </div>
            <div>
                <button>ADD TO CART</button>
            </div>
        </div>
    );
}
 
export default product;