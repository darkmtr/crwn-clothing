import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0)
);

export const seletCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0)
);
