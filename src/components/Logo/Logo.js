import React from 'react';

import chairLogo from '../../assets/images/chair-logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={chairLogo} alt="chair-logo" />
    </div>
)
 
export default logo;