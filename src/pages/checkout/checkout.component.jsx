import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  seletCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import CartItem from '../../components/cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CheckoutPage({ CartItems, total }) {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {CartItems.map((cartItem) => (
        <span>{cartItem.name}</span>
      ))}
      <div className='toatl'>
        <span>TOTAL : $ {total}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  CartItems: selectCartItems,
  total: seletCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
