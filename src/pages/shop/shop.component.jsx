import React from 'react';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';
// import { fetchCollectionStart } from '../../redux/shop/shop.saga';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  selectIsCollectionsLoader;

  render() {
    return (
      <div className='shop-page'>
        <Route exact path='/shop' component={CollectionsOverviewContainer} />
        <Route path='/shop/:categoryId' component={CollectionContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
