import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./reducers/filter";
import { noteReducer } from "./reducers/note";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});
