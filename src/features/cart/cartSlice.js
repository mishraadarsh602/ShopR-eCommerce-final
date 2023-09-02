import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {addToCart, fetchItemsByUserId, updateCart, deleteItemFromCart, resetCart} from "./cartAPI";

const initialState = {
   status:'idle',
  items:[],
  cartLoaded:false,
}
//action userdata 
export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
    console.log("add to cart cartslice before reposnse",item)

    const response = await addToCart(item);
    console.log("add to cart cartslice",response.data)
    return response.data;

  }
);
export const fetchItemsByUserIdAsync = createAsyncThunk(
    'cart/fetchItemsByUserId',
    async () => {
      const response = await fetchItemsByUserId();
      return response.data;
  
    }
  );


  export const updateCartAsync = createAsyncThunk(
    'cart/updateCart',
     async (update) => {
      // console.log("update cart cartslice before reposnse",update)
     const response = await updateCart(update);
    //  console.log("update cart cartslice after reposnse",response.data)

    return response.data;
  
    }
  );


  
  export const deleteItemFromCartAsync = createAsyncThunk(
    'cart/deleteItemFromCart',
     async (itemId) => {
     const response = await deleteItemFromCart(itemId);
    return response.data;
  
    }
  );

  
  
  export const resetCartAsync = createAsyncThunk(
    'cart/resetCart',
     async () => {
     const response = await resetCart();
    return response.data;
  
    }
  );


export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
   
  },
  extraReducers: (builder) => {
    builder
   
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);

      })
      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=action.payload;
        state.cartLoaded=true;
      })
      .addCase(fetchItemsByUserIdAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.cartLoaded=true;
      })
      .addCase( updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase( updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id);
        state.items[index]=action.payload;

      })
      .addCase( deleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase( deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id);
        state.items.splice(index,1)
        // state.items[index]=action.payload;

      })
      .addCase( resetCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase( resetCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=[];
      })

     


     
  },
});

//action creators
// export const { increment } = productSlice.actions;

export default cartReducer.reducer;
export const selectItems = (state) => state.carts.items;
export const selectCartStatus = (state) => state.carts.status;
export const selectCartLoaded = (state) => state.carts.cartLoaded;
