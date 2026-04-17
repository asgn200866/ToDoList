import { TopLabel } from './components/TopLabel';
import { LabelTextQuest } from './components/LabelTextQuests';
import { LabelTextWeek } from './components/LabelTextWeek';
import { Version } from './components/version';

import { LoadFromDB } from './utils/loadFromDB';
import { useState, useEffect } from 'react';

import { DataProvider, useData } from './DataContext';

function App() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await LoadFromDB();
        setAllData(data);
      } catch (error) {
        console.error('Ошибка при загрузке:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <DataProvider value={allData}>
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
    </DataProvider>
  );
}

export default App;
