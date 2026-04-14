import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// [도전 과제] 비동기 액션: 1초 후 증가
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, status: "idle" },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    reset: (state) => { state.count = 0; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => { state.status = "loading"; })
      .addCase(incrementAsync.fulfilled, (state) => {
        state.count += 1;
        state.status = "idle";
      });
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

