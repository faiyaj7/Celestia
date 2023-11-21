import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isDelete: false, // this one is used to stop the cart value to shake when cart item is getting deleted from the cart
  totalPrice: 0,
  totalQuantities: 0,
  qty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleDelete(state, action) {
      state.isDelete = action.payload;
    },
    emptyCart(state) {
      state.cart = [];
    },
    emptyQuantities(state) {
      state.totalQuantities = 0;
    },
    emptyPrice(state) {
      state.totalPrice = 0;
    },
    incQty(state) {
      state.qty += 1;
    },
    decQty(state) {
      state.qty = Math.max(0, state.qty - 1);
    },
    addToCart(state, action) {
      let product = action.payload.item;
      let qty = action.payload.qty === 0 ? 1 : action.payload.qty;
      const productExist = state.cart.find((item) => item.id === product.id);
      if (!productExist) {
        state.totalPrice += product.price;
        state.totalQuantities += qty;
        product.totalQuantity = 1;
        product.totalPrice = product.price;
        state.cart.push(product);
      } else {
        state.totalQuantities += qty;
        state.totalPrice += product.price * qty;
        const updatedProduct = state.cart.map((item) => {
          if (item.id === product.id)
            return {
              ...item,
              totalQuantity: item.totalQuantity + qty,
              totalPrice: item.totalPrice + item.price * qty,
            };
          else return item;
        });
        state.cart = updatedProduct;
      }
    },

    toggleCartItems(state, action) {
      let id = action.payload.id;
      let operator = action.payload.operator;
      const product = state.cart.find((item) => item.id === id);

      if (operator === "inc") {
        product.totalQuantity += 1;
        product.totalPrice += product.price;
        state.totalPrice += product.price;
        state.totalQuantities += 1;
      } else if (operator === "dec" && product.quantity > 1) {
        product.totalQuantity = Math.max(1, product.totalQuantity - 1);
        state.totalPrice -= product.exactPrice;
        state.totalQuantities -= 1;
      }
    },
    removeItemsFromCart(state, action) {
      // finding this product to reduce the totalPrice and totalQuantity
      let id = action.payload.id;

      const product = state.cart.find((item) => item.id === id);

      const afterRemoveProduct = state.cart.filter((item) => item.id !== id);

      state.cart = afterRemoveProduct;
      state.totalPrice -= product.price * product.totalQuantity;
      state.totalQuantities -= product.totalQuantity;
    },
  },
});
export const {
  toggleDelete,
  emptyCart,
  emptyPrice,
  emptyQuantities,
  incQty,
  decQty,
  addToCart,
  toggleCartItems,
  removeItemsFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
