const daysWeekList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const questList = ['task', 'nodeadline'];
const smileList = ['tasksmile', 'nodeadlinesmile'];
const monthList = ['month'];

const arrayAllObject = [...daysWeekList, ...monthList, ...smileList, ...questList];

const objectBdName = 'AllIbjectStorage'; // Имя хранилища
const objectBdVersion = 1; // Версия хранилища
let objectBd = null; // Глобальная переменная для хранилища

export const getDB = () => {
  if (objectBd) {
    return Promise.resolve(objectBd);
  }

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(objectBdName, objectBdVersion);

    request.onsuccess = function (event) {
      objectBd = event.target.result;
      resolve(objectBd);
    };

    request.onerror = function (event) {
      reject(event.target.error);
    };

    request.onupgradeneeded = function (event) {
      objectBd = event.target.result;
      arrayAllObject.forEach((name) => {
        if (!objectBd.objectStoreNames.contains(`${name}_store`)) {
          const objectSave = objectBd.createObjectStore(`${name}_store`, {
            keyPath: 'id',
            autoIncrement: true,
          });
        }
      });
    };
  });
}; // Создаем промис для открытия БД

getDB() // Обрабатываем промис для загрузки данных
  .then((objectBd) => {
    console.log(`База данных успешно загружена!`);
    console.log('Name:', objectBd.name);
    console.log('Version:', objectBd.version);
  })
  .catch((error) => {
    console.error(`Ошибка при октрытии хранилища: `, error);
  });
