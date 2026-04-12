export function TopLabel({ value, onInput }) {
  return (
    <header className="top-label">
      <h1>Monthly Planner</h1>
      <div>
        <span>month:</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onInput(e.target.value)}
        />
      </div>
    </header>
  );
}
