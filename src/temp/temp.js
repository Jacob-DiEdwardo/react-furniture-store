import React, { Component } from 'react';

import storage from '../firebase/firebase';

class Temp extends Component {
  state = {
    chair: ''
  }

  componentDidMount() {
    this.getImage('product-0001');
  }

  getImage (productId) {
    storage.child(`${productId}.jpg`).getDownloadURL()
      .then(url => {
        this.setState({chair: url});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <img src={this.state.chair} alt="product" />
      </div>
    );
  }
}

export default Temp;