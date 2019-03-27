import React, { Component } from 'react';

import storage from '../firebase/firebase';

const productImage = (props) => {
  let imageUrl = null;
  storage.child(`${props.productId}.jpg`).getDownloadURL()
    .then(url => {
      imageUrl = url;
    })
    .catch(err => {
      console.log(err);
    });

  return <img src={imageUrl} alt="productImage" />;
};

export default productImage;

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