import "./LabelTextWeek.css";

const daysOfWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export function LabelTextWeek() {
  return (
    <section className="label-text-week" aria-label="Поля ввода дней недели">
      {daysOfWeek.map((day) => (
        <ul key={day} className={`column-${day}`} id={`${day}Text`}>
          <li className={`day-name-${day} day`}>
            <h3>{day}</h3>
          </li>
        </ul>
      ))}
    </section>
  );
}
