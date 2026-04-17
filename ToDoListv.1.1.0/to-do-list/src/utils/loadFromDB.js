import { getDB } from './openDB';

export const LoadFromDB = async () => {
  const storesToLoad = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
    'task',
    'nodeadline',
    'tasksmile',
    'nodeadlinesmile',
    'month',
  ];

  const db = await getDB();

  const promises = storesToLoad.map((storeName) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([`${storeName}_store`], 'readonly');
      const objectStore = transaction.objectStore(`${storeName}_store`);

      const request = objectStore.getAll();

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  });

  try {
    const results = await Promise.all(promises);

    const combinedArray = results.flat(Infinity);
    const sortedData = combinedArray.sort((a, b) => a.createdAt - b.createdAt);

    return sortedData;
  } catch (error) {
    console.error('Ошибка при загрузке хранилищ:', error);
    throw error;
  }
};
