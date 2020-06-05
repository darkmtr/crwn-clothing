import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview';

import './collections-overview.styles.scss';
import {
  selectShopItems,
  selectCollectionsForPreview,
} from '../../redux/shop/shop.selector';

function CollectionsOverview({ collections }) {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
