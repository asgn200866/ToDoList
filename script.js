const objectBdName = 'AllIbjectStorage'; // Имя хранилища
const objectBdVersion = 8; // Версия хранилища
let objectBd; // Глобальная переменная для хранилища

class ObjectClass {
  constructor(text) {
    this.text = text;
  }
} // Общий класс задач с значениями текста и чекбокса

function createSubclass() {
  return class extends ObjectClass {
    constructor(text, cbCheck, id) {
      super(text);
      this.cbCheck = cbCheck;
      this.id = id;
    }
  };
} // Функция создания задач ObjectClass

const daysWeekList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const questList = ['task', 'nodeadline'];
const smileList = ['tasksmile', 'nodeadlinesmile'];
const monthList = ['month'];
const deleteFunctionList = ['task-delete', 'nodeadline-delete'];

const constructorKey = {
  ...Object.fromEntries(
    questList.map((item) => [
      item,
      {
        name: item,
        type: item.charAt(0).toUpperCase() + item.slice(1),

        baseClassName: `label-text-${item}`,
        inputClassName: `${item}-input`,
        checkboxClassName: `${item}-cb`,

        inputs: document.getElementsByClassName(`${item}-input`),
        checkboxes: document.getElementsByClassName(`${item}-cb`),
        container: document.getElementById(`${item}Text`),

        arrayObjects: [],
      },
    ])
  ), // questList
  ...Object.fromEntries(
    daysWeekList.map((item) => [
      item,
      {
        name: item,
        type: item.charAt(0).toUpperCase() + item.slice(1),

        baseClassName: `label-text-${item}`,
        inputClassName: `${item}-input`,
        checkboxClassName: 'checkbox-day-week',

        inputs: document.getElementsByClassName(`${item}-input`),
        checkboxes: document.getElementsByClassName('checkbox-day-week'),
        currentElement: document.querySelector(`.day-name-${item}`),

        container: document.getElementById(`${item}Text`),

        arrayObjects: [],
      },
    ])
  ), // daysWeekList
  ...Object.fromEntries(
    smileList.map((item) => [
      item,
      {
        name: item,
        type: item.charAt(0).toUpperCase() + item.slice(1),
        container: document.querySelector(`[data-class="${item}"]`),
        smileArray: [
          '(*^ω^)',
          '(´∀*)',
          '٩(◕‿◕)۶',
          '(o^▽^o)',
          '(⌒▽⌒)☆',
          '<(￣︶￣)>',
          'ヽ(・∀・)ﾉ',
          '(´•ω•｡)',
          '(￣ω￣)',
          '(o･ω･o)',
          '(＠＾◡＾)',
          'ヽ(・ω・)ﾉ',
          '(o_ _)ﾉ☆',
          '(^人^)',
          '(o´▽o)',
          '(*´▽)',
          '｡ﾟ(ﾟ^∀^)ﾟ｡',
          '(´ω)',
          '(≧◡≦)',
          '(o´∀o)',
          '(´•ω•)',
          '(＾▽＾)',
          '(⌒ω⌒)',
          '∑d(°∀°d)',
          '╰(▔∀▔)╯',
          '(─‿‿─)',
          '(*^‿^*)',
          'ヽ(o^ ^o)ﾉ',
          '(✯◡✯)',
          '(◕‿◕)',
          '(*≧ω≦*)',
          '(☆▽☆)',
          '(⌒‿⌒)',
          '＼(≧▽≦)／',
          '(*°▽°*)',
          '٩(｡•́‿•̀｡)۶',
          '(✧ω✧)',
          '(´｡•ᵕ•｡)',
          '(´▽)',
          '(￣▽￣)',
          '╰(*´︶)╯',
          'ヽ(>∀<☆)ノ',
          'o(≧▽≦)o',
          '(☆ω☆)',
          '(っ˘ω˘ς)',
          '＼(￣▽￣)／',
          '(¯︶¯)',
          '＼(＾▽＾)／',
          '٩(◕‿◕)۶',
          '(o˘◡˘o)',
          '(★ω★)/',
          '(^ヮ^)/',
          '(〃＾▽＾〃)',
          '(╯✧▽✧)╯',
          'o(>ω<)o',
          'o(❛ᴗ❛)o',
          '｡ﾟ(TヮT)ﾟ｡',
          '(‾́◡‾́)',
          '(bᵔ▽ᵔ)b',
          '(๑˃ᴗ˂)ﻭ',
          '(๑˘︶˘๑)',
          '(˙꒳​˙)',
          '(*꒦ິ꒳꒦ີ)',
          '(´･ᴗ･)',
          '(„•֊•„)',
          '(.❛ᴗ❛.)',
          '(⁀ᗢ⁀)',
          '(￢‿￢)',
          '(¬‿¬)',
          '(￣▽￣)b',
          '(˙▿˙)',
          '(¯▿¯)',
          '(◕▿◕)',
          '(„•ᴗ•„)',
          '(ᵔ◡ᵔ)',
          '(´▿)',
          '(๑>◡<๑)',
          '(=⩊=)',
          '(´꒳)',
          '⸜(´꒳)⸝',
          '⸜(⸝⸝⸝´꒳⸝⸝⸝)⸝',
          '⸜(ˊᗜˋ*)⸝',
          '⸜(ˊᵕˋ)⸝',
          '(>⩊<)',
          '(ᗒ⩊ᗕ)',
          '(ᵔ⩊ᵔ)',
          '(ᵔ⩊ᵔ)',
          '(•⩊•)',
          '(•⩊•)',
          '(^◡^)',
          '(=◡=)',
          '(✿◠‿◠)',
          '(❁´◡)',
          '(´◡`)',
          '(◕ᴗ◕)',
          '(◠‿◠)',
          '(◡‿◡)',
          '(⌒‿⌒)',
          '(•‿•)',
          '(◔‿◔)',
          '(✧‿✧)',
          '(♥‿♥)',
          '(☆‿☆)',
          '(◕‿◕✿)',
          '(◡‿◡✿)',
          '(｡◕‿◕｡)',
          '(｡♥‿♥｡)',
          '(◕ᴗ◕✿)',
          '(◡‿◡｡)',
          '(✿◠‿◠)',
          '(´•‿•)',
          '(´◠‿◠)',
          '(｡◠‿◠｡)',
          '(◕‿◕｡)',
          '(◠‿◠✿)',
          '(ʘ‿ʘ)',
          '(✾‿✾)',
          '(ᵔ‿ᵔ)',
          '(ᵔ◡ᵔ)',
        ],
        arrayObjects: [],
      },
    ])
  ), // smileList
  ...Object.fromEntries(
    monthList.map((item) => [
      item,
      {
        name: item,
        type: item.charAt(0).toUpperCase() + item.slice(1),
        container: document.getElementById(`${item}Element`),
        arrayObjects: [],
      },
    ])
  ), // monthList
  ...Object.fromEntries(
    deleteFunctionList.map((item) => [
      item,
      {
        name: item,
        type: item.charAt(0).toUpperCase() + item.slice(1),
        list: item.slice(0, -7),

        container: document.querySelector(`[data-name="${item}"]`),
        label: document.querySelector(`.label-delete`),
        elements: document.querySelectorAll('[data-type="button-change"]'),
      },
    ])
  ), // deleteFunctionList
}; // Группа для имен объектов задач

const arrayAllObject = Object.values(constructorKey); // Массив для перебора групп объектов

arrayAllObject.forEach((group) => {
  group.container.addEventListener('input', (event) => {
    if (!event.target.matches('input[type="text"]')) return;
    if (daysWeekList.includes(group.name) || questList.includes(group.name)) {
      const valuesTargetElement = getValue(event);
      updateObject(group, valuesTargetElement);
      deleteElement(group, valuesTargetElement, event);
      saveStorage(group);
    } else if (monthList.includes(group.name)) {
      updataMonth(group, event);
    }
  });
  group.container.addEventListener('change', (event) => {
    if (!event.target.matches('input[type="checkbox"]')) return;

    if (questList.includes(group.name)) {
      checkboxUpdateStyle(group, event);
      saveStorage(group);
    }
  });
  group.container.addEventListener('click', (event) => {
    if (!event.target.matches('button')) return;
    if (smileList.includes(group.name)) {
      updataSmile(group, event);
    }
    if (deleteFunctionList.includes(group.name)) {
      updataDelete(group);
      labelDeleteImage();
    }
  });
}); // Обработчик событий

function getValue(event) {
  const currentElement = event.target;

  const cardElement = currentElement.closest('[data-id]');
  const inputElement = currentElement.closest('input[type="text"]');
  const checkboxElement = cardElement.querySelector('input[type="checkbox"]');

  const inputId = cardElement.dataset.id;
  const inputObject = inputElement.value;
  const checkboxObject = checkboxElement.checked;

  return { inputId, inputObject, checkboxObject, cardElement, currentElement };
} // Функция получение данных из HTML в реальном времени days quest

function createElement(group) {
  const config = constructorKey[group.name];
  const idElement = Date.now();

  const fragmentMain = document.createElement('li');
  fragmentMain.className = config.baseClassName;
  fragmentMain.dataset.id = idElement;

  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.className = group.inputClassName;

  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.className = group.checkboxClassName;

  fragmentMain.appendChild(checkboxElement);
  fragmentMain.appendChild(inputElement);

  config.container.insertAdjacentElement('beforeend', fragmentMain);
} // Функция создания элементов days quest

arrayAllObject.forEach((group) => {
  if (daysWeekList.includes(group.name) || questList.includes(group.name)) {
    createElement(group);
  }
}); // Создание первых элементов days quest

function createObject(group, valuesTargetElement) {
  const config = constructorKey[group.name];

  const inputId = valuesTargetElement.inputId;
  const inputValue = valuesTargetElement.inputObject;
  const checkboxValue = valuesTargetElement.checkboxObject;

  const nameObject = createSubclass();

  const objectClass = new nameObject(inputValue, checkboxValue, inputId);
  config.arrayObjects.push(objectClass);
  return { objectClass };
} // Создание объекта и добавление его в массив days quest

function checkboxUpdateStyle(group, event) {
  const config = constructorKey[group.name];
  const currentElement = event.target;

  const cardElement = currentElement.closest('[data-id]');
  const idArray = config.arrayObjects;
  const inputId = cardElement.dataset.id;
  const checkboxObject = currentElement.checked;

  const realId = idArray.find((item) => item.id === inputId);
  if (realId) {
    realId.cbCheck = checkboxObject;
  }
} // Изменение стиля текста при активации чекбокса и обновление чекбокса в объекте days quest

function updateObject(group, valuesTargetElement) {
  const config = constructorKey[group.name];

  const idArray = config.arrayObjects;
  const checkId = valuesTargetElement.inputId;
  const inputObject = valuesTargetElement.inputObject;

  const realId = idArray.find((item) => item.id === checkId);

  if (realId) {
    realId.text = inputObject;
  } else {
    createElement(group);
    createObject(group, valuesTargetElement);
  }
} // Редактирование объекта и создание объекта/DOM элемента days quest

function deleteElement(group, valuesTargetElement) {
  const config = constructorKey[group.name];

  const checkId = valuesTargetElement.inputId;
  const cardElement = valuesTargetElement.cardElement;
  const currentElement = valuesTargetElement.currentElement;

  currentElement.addEventListener('blur', () => {
    if (currentElement.value == '') {
      deleteElementBd(group, valuesTargetElement)
        .then(() => {
          config.arrayObjects = config.arrayObjects.filter((item) => item.id !== checkId);
          cardElement.remove();
        })
        .catch((error) => {
          console.error('Oшибка: ', error);
        });
    }
  });
} // Проверка и удаление пустых обьектов days quest

function updataMonth(group, event) {
  const config = constructorKey[group.name];
  const currentElement = event.target;
  const arrayObjects = config.arrayObjects;
  arrayObjects.length = 0;

  deleteElementBdAll(group)
    .then(() => {
      const textValue = currentElement.value;
      const monthObject = new ObjectClass(textValue);
      arrayObjects.push(monthObject);
      saveStorage(group);
      console.log(arrayObjects);
      console.log('Обьект месяца успешно обновлен!');
    })
    .catch((error) => {
      console.error('Oшибка: ', error);
    });
} // Обработка поля ввода месяца month

function updataSmile(group, event) {
  const config = constructorKey[group.name];
  const currentElement = event.target;

  const randomSmile = group.smileArray[Math.floor(Math.random() * group.smileArray.length)];
  currentElement.textContent = randomSmile;
  const smileObject = new ObjectClass(randomSmile);

  const arrayObjects = config.arrayObjects;
  deleteElementBdAll(group)
    .then(() => {
      arrayObjects.length = 0;
      arrayObjects.push(smileObject);
      saveStorage(group);
      console.log('Смайлик успешно изменен!');
    })
    .catch((error) => {
      console.error('Oшибка: ', error);
    });
} // Обработка кнопки смайла smile

function updataDelete(group) {
  const config = constructorKey[group.name];
  const configObject = constructorKey[group.list];

  const elementText = config.label.querySelector('h2');
  elementText.textContent = `Do you confirm the ${group.list} clearing?`;

  config.label.style.visibility = 'visible';

  group.elements.forEach((element) => {
    element.onclick = () => {
      if (element.id == 'yes') {
        configObject.arrayObjects.length = 0;
        configObject.container.replaceChildren();
        localStorage.removeItem(`item_${group.list}`);

        createElement(configObject);
        config.label.style.visibility = 'hidden';
      } else if (element.id == 'no') {
        config.label.style.visibility = 'hidden';
      }
    };
  });
} // Обработка функций удаления delete

function labelDeleteImage() {
  const elementImage = document.querySelector('.image-mem');
  const arrayImage = ['galery/evreilev.jpg', 'galery/dedinmirror.jpg'];

  const randomPhoto = arrayImage[Math.floor(Math.random() * arrayImage.length)];
  elementImage.src = randomPhoto;
} // Случайная вставка фото в окно удаления delete

function saveStorage(object) {
  const saveArray = object.arrayObjects;
  const name = object.name;
  const storeName = `store_${name}`;

  const transaction = objectBd.transaction([storeName], 'readwrite');
  const objectStore = transaction.objectStore(storeName);

  saveArray.forEach((item) => {
    const request = objectStore.put(item);
  });

  transaction.oncomplete = function (event) {
    console.log(`Сохранение в хранилище "${storeName}" завершено.`);
  };
  transaction.onerror = function (event) {
    console.error(`Ошибка транзакции при сохранении в "${storeName}":`, event.target.error);
  };
} // Функция сохранения в БД

function loadStorage() {
  arrayAllObject.forEach((object) => {
    if ('arrayObjects' in object) {
      const storeName = `store_${object.name}`;
      const transaction = objectBd.transaction([storeName], 'readonly');
      const objectStore = transaction.objectStore(storeName);

      const request = objectStore.getAll();

      request.onsuccess = function (event) {
        const loadArray = event.target.result;

        if (loadArray != null) {
          object.arrayObjects = loadArray;
          const reversedArray = [...loadArray].reverse();
          if (daysWeekList.includes(object.name) || questList.includes(object.name)) {
            reversedArray.forEach((loadObject) => {
              const fragmentMain = document.createElement('li');
              fragmentMain.className = object.baseClassName;
              fragmentMain.dataset.id = loadObject.id;

              const checkboxElement = document.createElement('input');
              checkboxElement.type = 'checkbox';
              checkboxElement.className = object.checkboxClassName;
              checkboxElement.checked = loadObject.cbCheck;

              const inputElement = document.createElement('input');
              inputElement.type = 'text';
              inputElement.className = object.inputClassName;
              inputElement.value = loadObject.text;

              fragmentMain.appendChild(checkboxElement);
              fragmentMain.appendChild(inputElement);

              if (daysWeekList.includes(object.name)) {
                object.currentElement.insertAdjacentElement('afterEnd', fragmentMain);
              } else if (questList.includes(object.name)) {
                object.container.insertAdjacentElement('afterbegin', fragmentMain);
              }
            });
          } else if (monthList.includes(object.name)) {
            reversedArray.forEach((loadObject) => {
              object.container.value = loadObject.text;
            });
          }
          if (smileList.includes(object.name)) {
            if (object.arrayObjects.length != 0) {
              reversedArray.forEach((loadObject) => {
                object.container.textContent = loadObject.text;
              });
            }
          }
        }
        console.log(`Данные из ${storeName} успешно загружены!`);
      };
      request.onerror = function () {
        console.error(`Произошла ошибка при загрузке ${storeName}`);
      };
    }
  });
} // Функция чтения из локального хранилища

function deleteElementBdAll(group) {
  return openObjectBdPromise()
    .then(() => {
      const storeName = `store_${group.name}`;
      const transaction = objectBd.transaction([storeName], 'readwrite');
      const objectStore = transaction.objectStore(storeName);

      objectStore.clear();

      return new Promise((resolve, reject) => {
        transaction.oncomplete = () => {
          console.log(`Хранилище ${storeName} успешно очищено!`);
          resolve();
        };
        transaction.onerror = (event) => {
          reject(event.target.error);
        };
      });
    })
    .catch((error) => {
      console.error('При открытии базы данных или очистке хранилища произошла ошибка!', error);
      throw error;
    });
} // Очистка всей БД

function deleteElementBd(group, valuesTargetElement) {
  return openObjectBdPromise()
    .then(() => {
      const storeName = `store_${group.name}`;
      const transaction = objectBd.transaction([storeName], 'readwrite');
      const objectStore = transaction.objectStore(storeName);

      objectStore.delete(valuesTargetElement.inputId);

      return new Promise((resolve, reject) => {
        transaction.oncomplete = () => {
          console.log(`Элемент ${valuesTargetElement.inputId} успешно удален!`);
          resolve();
        };
        transaction.onerror = (event) => {
          reject(event.target.error);
        };
      });
    })
    .catch((error) => {
      console.error('При открытии базы данных или удалении элемента произошла ошибка!', error);
      throw error;
    });
} // Удаление определенного элемента из БД

function openObjectBdPromise() {
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
      console.log('База данных загружена!');
      objectBd = event.target.result;

      const groupsToSave = arrayAllObject.filter((obj) => 'arrayObjects' in obj);

      groupsToSave.forEach((object) => {
        const objectname = object.name;

        if (!objectBd.objectStoreNames.contains(`store_${objectname}`)) {
          const objectSave = objectBd.createObjectStore(`store_${objectname}`, {
            keyPath: 'id',
            autoIncrement: true,
          });
        }
      });
    };
  });
} // Создаем промис для открытия БД

openObjectBdPromise() // Обрабатываем промис для загрузки данных
  .then((objectBd) => {
    console.log(`База данных успешно загружена!`);
    console.log('Name:', objectBd.name);
    console.log('Version:', objectBd.version);
    loadStorage();
  })
  .catch(() => {
    console.error(`Ошибка при октрытии хранилища!`);
  });
