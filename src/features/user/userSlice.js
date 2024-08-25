import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUserOrders,updateUser,fetchLoggedInUser } from "./userAPI";

const initialState = {
   status:'idle',
  //  userOrders:[],
   userInfo:{
      userOrders:[],
   },
}
//action userdata 
export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
  'user/fetchLoggedInUserOrders',
  async () => {

    const response = await fetchLoggedInUserOrders();
    console.log("userSlcie fetchLoggedInUserOrders data",response.data);

    return response.data;

  }
);

//action userdata 
export const fetchLoggedInUserAsync = createAsyncThunk(
  'user/fetchLoggedInUser',
  async () => {
    // console.log("fetchloggedinuse userSlice :" ,id);
    const response = await fetchLoggedInUser();
    return response.data;

  }
);

//action userdata 
export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) => {
    console.log("userSLice update data",update)
    const response = await updateUser(update);
    return response.data;

  }
);

export const userReducer = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  //  resetOrder: (state) => {
  //     state.currentOrder = null;
  //   },
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
          state.userInfo.userOrders = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.userOrders = action.payload;
         state.userInfo = action.payload;

      })
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo = action.payload;
      })
     
  },
});

//action creators

export const selectUserOrders = (state) => state.user.userInfo.userOrders;
export const selectUserInfo = (state) => state.user.userInfo;
export const selectUserInfoStatus = (state) => state.user.status;

export default userReducer.reducer;



