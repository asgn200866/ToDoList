import { v4 as uuidv4 } from 'uuid';

export function LabelTextInputNodeadline() {
  const idElement = uuidv4();

  return (
    <li className="label-text-nodeadline" id={idElement}>
      <input type="checkbox" className="nodeadline-cb" />
      <input type="text" className="nodeadline-input" />
    </li>
  );
}
