import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";
const validFilters = ["all", "important", "notimportant"];

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(_state, action) {
      const { filter } = action.payload;

      if (!validFilters.includes(filter)) {
        return initialState;
      }

      return filter;
    },
  },
});

const { reducer } = filterSlice;
export { reducer as filterReducer };

export const { setFilter } = filterSlice.actions;
