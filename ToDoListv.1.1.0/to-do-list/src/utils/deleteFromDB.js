import { getDB } from './openDB';

export const storesToDelete = async () => {
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
  console.log('База данных получена');

  for (const storeName of storesToLoad) {
    console.log(`\nОбработка хранилища: ${storeName}_store`);

    try {
      const transaction = db.transaction([`${storeName}_store`], 'readwrite');
      const objectStore = transaction.objectStore(`${storeName}_store`);

      const allItems = await new Promise((resolve, reject) => {
        const request = objectStore.getAll();
        request.onsuccess = () => {
          console.log(`  Найдено записей: ${request.result.length}`);
          resolve(request.result);
        };
        request.onerror = () => {
          console.error(`  Ошибка при получении записей:`, request.error);
          reject(request.error);
        };
      });

      const itemsToDelete = allItems.filter((item) => {
        const isEmpty = !item.text || item.text.trim() === '';
        if (isEmpty) {
          console.log(`  Найден объект для удаления: id=${item.id}, text="${item.text}"`);
        }
        return isEmpty;
      });

      console.log(`  Объектов для удаления: ${itemsToDelete.length}`);

      for (const item of itemsToDelete) {
        await new Promise((resolve, reject) => {
          const deleteRequest = objectStore.delete(item.id);
          deleteRequest.onsuccess = () => {
            console.log(`  ✓ Удалён объект с id ${item.id} из ${storeName}`);
            resolve();
          };
          deleteRequest.onerror = () => {
            console.error(`  ✗ Ошибка при удалении id ${item.id}:`, deleteRequest.error);
            reject(deleteRequest.error);
          };
        });
      }

      await new Promise((resolve, reject) => {
        transaction.oncomplete = () => {
          console.log(`  Транзакция для ${storeName}_store завершена`);
          resolve();
        };
        transaction.onerror = () => {
          console.error(`  Ошибка транзакции:`, transaction.error);
          reject(transaction.error);
        };
        transaction.onabort = () => {
          console.error(`  Транзакция прервана`);
          reject(new Error('Transaction aborted'));
        };
      });
    } catch (error) {
      console.error(`Ошибка при обработке ${storeName}_store:`, error);
    }
  }

  console.log('\nГотово!');
};
