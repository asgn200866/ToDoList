import { ColumnNodeadline } from './ColumnNodeadline';
import mainPhoto from '../galery/mainphoto.jpg';
import { ColumnTask } from './ColumnTask';
import './LabelTextQuest.css';

export function LabelTextQuest() {
  return (
    <section className="label-text-quests" aria-label="Поля ввода задач">
      <ColumnTask />
      <div className="main-photo">
        <img src={mainPhoto} alt="Главное фото" />
      </div>
      <ColumnNodeadline />
    </section>
  );
}
