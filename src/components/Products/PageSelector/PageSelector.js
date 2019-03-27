import React from 'react';

import classes from './PageSelector.module.css';

const pageSelector = (props) => {
    return (
        <div 
            className={classes.PageSelector} 
            onClick={() => props.clicked(props.pageNumber)}>{props.pageNumber}</div>
        );
}
 
export default pageSelector;