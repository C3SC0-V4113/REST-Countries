import { Theme, UIState } from "@/contracts/types/TUiStore";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "system",
  } as UIState,
  reducers: {
    onCheckingTheme: (state) => {
      state.theme = "system";
    },
    onSetTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { onCheckingTheme, onSetTheme } = uiSlice.actions;
