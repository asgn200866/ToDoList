import { ColumnNodeadline } from "./ColumnNodeadline";
import { ColumnTask } from "./ColumnTask";
import "./LabelTextQuest.css";

export function LabelTextQuest() {
  return (
    <section className="label-text-quests" aria-label="Поля ввода задач">
      <ColumnTask />
      <div className="main-photo">
        <img src="gallery/mainphoto.jpg" alt="Главное фото" />
      </div>
      <ColumnNodeadline />
    </section>
  );
}
