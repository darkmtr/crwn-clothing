import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview';

function ShopPage({ match }) {
  console.log(match);
  return (
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  );
}

export default ShopPage;
