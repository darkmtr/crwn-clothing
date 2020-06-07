import { takeEvery, call, put } from 'redux-saga/effects';
import shopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess } from './shop.actions';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    console.log(err);
  }

  // collectionRef.onSnapshot(async (snapshot) => {
  //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
  //   dispatch(fetchCollectionsSuccess(collectionMap));
  // });
}

export function* fetchCollectionStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
