import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { createObjectClass } from '../utils/createObjects';
import { saveToDB, LoadFromDB } from '../utils/saveToDB';

export function LabelTextInputTaskNew() {
  const [task, setTask] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const idElement = uuidv4();

  const hundlerInput = (e) => {
    setTask(e.target.value);
  };

  const hundlerChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const hundlerOnBlur = async (e) => {
    if (task.trim()) {
      const name = e.target.dataset.name;
      const objectClass = createObjectClass(name, idElement, task, isChecked);

      try {
        await saveToDB(objectClass);
      } catch (error) {
        console.error('Ошибка сохранения:', error);
      }
    }
  };

  return (
    <li className="label-text-task" id={uuidv4()}>
      <input type="checkbox" className="task-cb" checked={isChecked} onChange={hundlerChange} />
      <input
        type="text"
        className="task-input"
        data-name="task"
        onChange={hundlerInput}
        onBlur={hundlerOnBlur}
        value={task}
      />
    </li>
  );
}
