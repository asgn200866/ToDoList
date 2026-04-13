import "./TopLabel.css";

export function TopLabel() {
  return (
    <header className="top-label">
      <h1>Monthly Planner</h1>
      <div>
        <span>month:</span>
        <input type="text" />
      </div>
    </header>
  );
}
