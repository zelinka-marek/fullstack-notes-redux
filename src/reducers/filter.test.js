import deepFreeze from "deep-freeze";
import { describe, expect, it } from "vitest";
import { filterReducer } from "./filter";

describe("filterReducer", () => {
  it("should set filter if valid with action filter/setFilter", () => {
    const state = "all";
    deepFreeze(state);

    const validFilters = ["all", "important", "notimportant"];

    for (const filter of validFilters) {
      const action = {
        type: "filter/setFilter",
        payload: {
          filter,
        },
      };

      const newState = filterReducer(state, action);
      expect(newState).toBe(action.payload.filter);
    }
  });

  it("should default to all if filter is invalid", () => {
    const state = "all";
    deepFreeze(state);

    const action = {
      type: "filter/setFilter",
      payload: {
        filter: "favorite",
      },
    };

    const newState = filterReducer(state, action);
    expect(newState).toBe(state);
  });
});
