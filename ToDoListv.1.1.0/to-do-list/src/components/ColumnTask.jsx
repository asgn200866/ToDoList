import { LabelTextInputTaskLoad } from './LabelTextInputTaskLoad';
import { LabelTextInputTaskNew } from './LabelTextInputTaskNew';

import { useData } from '../DataContext';

export function ColumnTask() {
  const allData = useData();
  const tasks = allData.filter((item) => item.type === 'task');

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
      {tasks.map((item) => (
        <LabelTextInputTaskLoad
          key={item.id} // React требует уникальный ключ для элементов списка
          item={item}
        />
      ))}
      <LabelTextInputTaskNew />
    </ul>
  );
}
