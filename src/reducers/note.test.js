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

  it("should update important propery with action notes/toggleNoteImportance", () => {
    const state = [
      {
        content: "The app state is in redux store",
        important: false,
        id: 1,
      },
      {
        content: "state changes are made with actions",
        important: false,
        id: 2,
      },
    ];
    deepFreeze(state);

    const action = {
      type: "notes/toggleNoteImportance",
      payload: 2,
    };

    const newState = noteReducer(state, action);
    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual({
      ...state[1],
      important: true,
    });
  });
});
