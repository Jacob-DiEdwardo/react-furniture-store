import React from 'react';

import classes from './CartButton.module.css';

const cartButton = (props) => {
    return (
        <div className={classes.CartButton}>
            <button>Cart Button</button>
        </div>
    );
}
 
export default cartButton;