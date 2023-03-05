import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../reducers/filter";

const filters = {
  all: "All",
  important: "Important",
  nonimportant: "Not Important",
};

export function VisibilityFilter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(({ filter }) => filter);

  return (
    <div style={{ display: "flex", gap: 16 }}>
      {Object.keys(filters).map((filter) => (
        <label key={filter}>
          {filters[filter]}{" "}
          <input
            type="radio"
            name="filter"
            checked={filter === currentFilter}
            value={filter}
            onChange={({ target }) => dispatch(setFilter(target.value))}
          />
        </label>
      ))}
    </div>
  );
}
