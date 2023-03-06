import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDash = createAsyncThunk("fetchDash", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
});

const dashSlice = createSlice({
  name: "dash",
  initialState: { isLoading: false, data: null, isError: false },
  extraReducers: (builder) => {
    builder.addCase(fetchDash.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDash.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDash.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

const dashReducer = dashSlice.reducer;

export default dashReducer;
