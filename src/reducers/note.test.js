import deepFreeze from "deep-freeze";
import { describe, expect, it } from "vitest";
import { noteReducer } from "./note";

describe("noteReducer", () => {
  it("should return new state with action notes/createNote", () => {
    const state = [];
    deepFreeze(state);

    const action = {
      type: "notes/addNote",
      payload: {
        content: "the app state is in redux store",
        important: true,
        id: 1,
      },
    };

    const result = noteReducer(state, action);
    expect(result).toHaveLength(1);
    expect(result).toContainEqual(action.payload);
  });
});
