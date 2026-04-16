import { LabelTextInput } from './LabelTextInput';

export function ColumnTask() {
  return (
    <ul className="column-task" id="taskText">
      <li className="task-label">
        <h2>tasks</h2>

        <div>
          <button
            className="smile-btn"
            data-class="tasksmile"
            aria-label="Выбрать случайный смайлик"
          ></button>
          <button className="button-delete" data-name="task-delete" aria-label="Удалить все задачи">
            ✕
          </button>
        </div>
      </li>
      <LabelTextInput />
    </ul>
  );
}
