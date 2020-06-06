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
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

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
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='toatl'>
        <span>TOTAL : $ {total}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp : Any date in the future - CVV : 123
      </div>
      <StripeButton price={total} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  CartItems: selectCartItems,
  total: seletCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
