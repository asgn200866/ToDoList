import './TopLabel.css';

import { useState } from 'react';
import { useData } from '../DataContext';

import { createObjectClass } from '../utils/createObjects';
import { saveToDB } from '../utils/saveToDB';

export function TopLabel() {
  const allData = useData();

  const months = allData.find((item) => item.type === 'month');

  const [month, setMonth] = useState(months?.text || '');

  const hundlerInput = (e) => {
    setMonth(e.target.value);
  };

  const hundlerOnBlur = async (e) => {
    const name = e.target.dataset.name;
    const objectClass = createObjectClass(name, undefined, month, undefined);

    try {
      await saveToDB(objectClass);
    } catch (error) {
      console.error('Ошибка сохранения:', error);
    }
  };

  return (
    <header className="top-label">
      <h1>Monthly Planner</h1>
      <div>
        <span>month:</span>
        <input
          type="text"
          data-name="month"
          onChange={hundlerInput}
          onBlur={hundlerOnBlur}
          value={month}
        />
      </div>
    </header>
  );
}
