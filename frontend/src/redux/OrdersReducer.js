import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosConfig from "../Helpers/AxiosConfig";

export const SubmitOrder = createAsyncThunk(
  "orders/SubmitOrder",
  async ({ orderData }) => {
    try {
      const response = await AxiosConfig.post("/Orders/SubmitOrder", orderData);
      return response.data;
    } catch (err) {
      console.warn(`Error in SubmitOrder Reducer ${err}`);
    }
  }
);

export const GetAllOrders = createAsyncThunk('orders/GetAllOrders', async() => {
    try {
        const response = await AxiosConfig.get("/Orders/GetAllOrders")
        return response.data
    } catch (err) {
        console.warn(`Error in GetAllOrders Reducer ${err}`)
    }
})

const OrdersHandler = createSlice({
  name: "OrderHandler",
  initialState: {
    Orders: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SubmitOrder.fulfilled, (state, action) => {
        state.Orders = [...state.Orders, action.payload.order];
        state.status = "accepted";
      })
      .addCase(SubmitOrder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(SubmitOrder.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(GetAllOrders.fulfilled, (state, action) => {
        state.Orders = action.payload.orders
        state.status = "accepted";
      })
      .addCase(GetAllOrders.pending, (state) => {
        state.status = "pending";
      })
      .addCase(GetAllOrders.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default OrdersHandler.reducer;
