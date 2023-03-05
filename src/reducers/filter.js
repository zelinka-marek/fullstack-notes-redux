import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";
const validFilters = ["all", "important", "notimportant"];

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(_state, action) {
      if (!validFilters.includes(action.payload)) {
        return initialState;
      }

      return action.payload;
    },
  },
});

const { reducer } = filterSlice;
export { reducer as filterReducer };

export const { setFilter } = filterSlice.actions;
