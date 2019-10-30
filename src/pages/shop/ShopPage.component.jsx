import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    console.log(this.state.collections);
    const { collections } = this.state;
    return (
      <div>
        <h1>Shop Page</h1>
        {collections.map(({ id, ...otherCollectionPreviewProps }) => (
          <CollectionPreview key={id} {...otherCollectionPreviewProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
