import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/Navigation/Home/Home';
import Shop from './containers/Shop/Shop';

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    )
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
