import { TopLabel } from "./components/TopLabel";
import { LabelTextQuest } from "./components/LabelTextQuests";
import { LabelTextWeek } from "./components/LabelTextWeek";
import { Version } from "./components/version";

function App() {
  return (
    <>
      <header>
        <TopLabel />
      </header>
      <main>
        <LabelTextQuest />
        <LabelTextWeek />
      </main>
      <footer>
        <Version />
      </footer>
    </>
  );
}

export default App;
