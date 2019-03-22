import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {  }
    render() { 
        return (  
            <Aux>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}
 
export default Layout;