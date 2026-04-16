import { getDB } from './openDB';

export const saveToDB = async (object) => {
  const db = await getDB();
  const storeName = `${object.type}_store`;

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    const objectStore = transaction.objectStore(storeName);

    const request = objectStore.put(object);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);

    transaction.oncomplete = () => {
      console.log(`Данные успешно сохранены в ${storeName}`);
    };
  });
};
