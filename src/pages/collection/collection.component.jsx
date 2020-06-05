import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

function CollectionPage({ collection }) {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <div className='title'>{title}</div>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
