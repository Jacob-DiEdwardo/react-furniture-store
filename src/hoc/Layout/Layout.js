import React, { Component } from 'react';

import classes from './Layout.module.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() { 
        return (  
            <React.Fragment>
                <Navbar 
                    menuButtonClicked={this.sideDrawerToggleHandler}
                    // isAuth={this.props.isAuthenticated}
                     />
                <SideDrawer
                    // isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}
 
export default Layout;