import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  user: null,
};
 
const token = localStorage.getItem("token");

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (payload, thunkApi) => {
    try {
      const res = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      throw thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkApi) => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", payload);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/admin";
      return res.data;
    } catch (error) {
      throw thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
     builder.addCase(getUser.fulfilled, (state, action) => {
       state.user = action.payload;
     });
     builder.addCase(getUser.rejected, (state, action) => {
       toast.error(action.payload);
     });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      toast.success("Login Successfully");
    });
    builder.addCase(login.rejected, (state, action) => {
      toast.error(action.payload);
    });
  },
});

export default authSlice.reducer;
