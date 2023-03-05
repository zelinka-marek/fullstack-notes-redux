import { useSelector } from "react-redux";

const filters = {
  all: "All",
  important: "Important",
  notimportant: "Not Important",
};

export function VisibilityFilter(props) {
  const { onChange } = props;

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
            onChange={({ target }) => onChange(target.value)}
          />
        </label>
      ))}
    </div>
  );
}
