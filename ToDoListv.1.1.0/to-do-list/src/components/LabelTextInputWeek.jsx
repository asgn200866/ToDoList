import { v4 as uuidv4 } from 'uuid';

export function LabelTextInputWeek() {
  const idElement = uuidv4();

  return (
    <li id={idElement}>
      <input type="checkbox" />
      <input type="text" />
    </li>
  );
}
