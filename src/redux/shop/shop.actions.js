import shopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (payload) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload,
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionMap));
    });
  };
};
