import { connect } from 'react-redux';
import { compose } from 'redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionsLoader } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoader(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionContainer;
