import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

function WithSpinner(WrappedComponent) {
  return function ({ isLoading, ...otherProps }) {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
}

export default WithSpinner;
