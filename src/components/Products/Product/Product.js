import React from 'react';

import classes from './Product.module.css';
import YellowStar from '../../../assets/images/yellow-star.png';
import GrayStar from '../../../assets/images/gray-star.png';

const product = (props) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        i <= props.rating ? 
            stars.push(
                <div key={i}>
                    <img src={YellowStar} alt="star" />
                </div>
            ) :
            stars.push(
                <div key={i}>
                    <img src={GrayStar} alt="star" />
                </div>
            );
        }

    return (
        <div className={classes.Product}>
            <div className={classes.ProductImage}>
                <img src={props.imageUrl} alt="productImage" />
            </div>
            <div>
                <p>{props.name}</p>
            </div>
            <div className={classes.Stars}>
                {stars}
            </div>
            <div className={classes.PriceSection}>
                <div>
                    <p>${props.price}</p>
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