import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShop],
  (collections) => {
    const data = collections.collections
      ? Object.keys(collections.collections).map(
          (key) => collections.collections[key]
        )
      : [];
    console.log('data', data);
    return data;
  }
);

export const selectCollection = (collectionUrlParm) =>
  createSelector([selectShopItems], (collections) =>
    collections ? collections[collectionUrlParm] : null
  );
