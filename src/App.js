import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Home from './components/Navigation/Home/Home';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Home />
        </Layout>
      </div>
    );
  }
}

export default App;
