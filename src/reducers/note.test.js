import deepFreeze from "deep-freeze";
import { describe, expect, it } from "vitest";
import { noteReducer } from "./note";

describe("noteReducer", () => {
  it("should return new state with action ADD_NOTE", () => {
    const state = [];
    deepFreeze(state);

    const action = {
      type: "ADD_NOTE",
      payload: {
        note: {
          content: "the app state is in redux store",
          important: true,
          id: 1,
        },
      },
    };

    const result = noteReducer(state, action);
    expect(result).toHaveLength(1);
    expect(result).toContainEqual(action.payload.note);
  });

  it("should default new note important property to false", () => {
    const state = [];
    deepFreeze(state);

    const action = {
      type: "ADD_NOTE",
      payload: {
        note: {
          content: "this note is not important",
          id: 1,
        },
      },
    };

    const newState = noteReducer(state, action);
    expect(newState).toContainEqual({
      ...action.payload.note,
      important: false,
    });
  });

  it("should update important propery with action TOGGLE_IMPORTANCE", () => {
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
      type: "TOGGLE_IMPORTANCE",
      payload: { id: 2 },
    };

    const newState = noteReducer(state, action);
    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(state[0]);
    expect(newState).toContainEqual({
      ...state[1],
      important: true,
    });
  });
});
