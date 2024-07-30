import { createSlice } from "@reduxjs/toolkit";

export const stepperSlice = createSlice({
  name: "stepper",
  initialState: 1,
  reducers: {
    setStepper: (state, action) => {
      console.log(state, "state data----");
      console.log(action, "action data");
      return action.payload;
    },
  },
});
export const { setStepper } = stepperSlice.actions;
