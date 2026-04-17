import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

import { createObjectClass } from '../utils/createObjects';
import { saveToDB, LoadFromDB } from '../utils/saveToDB';

export function LabelTextInputTaskLoad({ item }) {
  const [task, setTask] = useState(item.text);
  const [isChecked, setIsChecked] = useState(item.cbCheck);

  useEffect(() => {
    setTask(item.text);
    setIsChecked(item.cbCheck);
  }, [item]);

  const hundlerInput = (e) => {
    setTask(e.target.value);
  };

  const hundlerChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const hundlerOnBlur = async (e) => {
    const name = e.target.dataset.name;
    const objectClass = createObjectClass(name, item.id, task, isChecked);

    try {
      await saveToDB(objectClass);
    } catch (error) {
      console.error('Ошибка сохранения:', error);
    }
  };

  return (
    <li className="label-text-task" id={item.id}>
      <input
        type="checkbox"
        data-name="task"
        className="task-cb"
        checked={isChecked}
        onChange={hundlerChange}
        onBlur={hundlerOnBlur}
      />
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
