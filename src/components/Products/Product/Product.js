import React from 'react';

import classes from './Product.module.css';
import TestImage from '../../../assets/images/product-0001.jpg';
import YellowStar from '../../../assets/images/yellow-star.png';
import GrayStar from '../../../assets/images/gray-star.png';

const product = (props) => {
    return (
        <div className={classes.Product}>
            <div className={classes.ProductImage}>
                <img src={TestImage} alt="lamp" />
            </div>
            <div>
                <p>A nice lamp</p>
            </div>
            <div className={classes.Stars}>
                <div>
                    <img src={YellowStar} alt="yellow star" />
                </div>
                <div>
                    <img src={YellowStar} alt="yellow star" />
                </div>
                <div>
                    <img src={YellowStar} alt="yellow star" />
                </div>
                <div>
                    <img src={GrayStar} alt="gray star" />
                </div>
                <div>
                    <img src={GrayStar} alt="gray star" />
                </div>
            </div>
            <div className={classes.PriceSection}>
                <div>
                    <p>$100</p>
                </div>
                <div className={classes.AddToCart}>
                    <button>ADD TO CART</button>
                </div>
            </div>
            <div className={classes.Quantity}>
                <label>Quantity: </label>
                <input type="number" name="quantity" defaultValue="1" min="1" max="4" />
            </div>
        </div>
    );
}
 
export default product;