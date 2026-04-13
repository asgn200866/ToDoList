export function ColumnNodeadline() {
  return (
    <ul className="column-nodeadline" id="nodeadlineText">
      <li className="nodeadline-label">
        <h2>no deadline</h2>
        <div>
          <button
            className="smile-btn"
            data-class="nodeadlinesmile"
            aria-label="Выбрать случайный смайлик"
          ></button>
          <button
            className="button-delete"
            data-name="nodeadline-delete"
            aria-label="Удалить все задачи"
          >
            ✕
          </button>
        </div>
      </li>
    </ul>
  );
}
