import { useState } from "react"; // Импорт хука
import { TopLabel } from "./components/TopLabel";
import "./components/TopLabel.css";

function App() {
  const [month, setMonth] = useState("");

  return (
    <main className="App">
      <TopLabel value={month} onInput={setMonth} />
    </main>
  );
}

export default App;
