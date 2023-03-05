import deepFreeze from "deep-freeze";
import { describe, expect, it } from "vitest";
import { filterReducer } from "./filter";

describe("filterReducer", () => {
  it("should return new filter with action filter/setFilter", () => {
    const state = "all";
    deepFreeze(state);

    const action = {
      type: "SET_FILTER",
      payload: {
        filter: "important",
      },
    };

    const newState = filterReducer(state, action);
    expect(newState).toBe(action.payload.filter);
  });
});
