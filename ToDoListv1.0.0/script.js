const objectBdName = 'AllIbjectStorage'; // Имя хранилища
const objectBdVersion = 10; // Версия хранилища
let objectBd; // Глобальная переменная для хранилища

class ObjectClass {
  constructor(text) {
    this.text = text;
  }
} // Общий класс задач с значениями текста и чекбокса

function createSubclass() {
  return class extends ObjectClass {
    constructor(text, cbCheck, id, type) {
      super(text);
      this.cbCheck = cbCheck;
      this.id = id;
      this.type = type;
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
        currentElement: document.querySelector(`.${item}-label`),

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
          '(o^▽^o)',
          '(´•ω•｡)',
          '(￣ω￣)',
          '(o･ω･o)',
          '(^人^)',
          '(o´▽o)',
          '(*´▽)',
          '(´ω)',
          '(≧◡≦)',
          '(o´∀o)',
          '(´•ω•)',
          '(＾▽＾)',
          '(⌒ω⌒)',
          '∑d(°∀°d)',
          '(─‿‿─)',
          '(*^‿^*)',
          '(✯◡✯)',
          '(◕‿◕)',
          '(*≧ω≦*)',
          '(☆▽☆)',
          '(⌒‿⌒)',
          '(*°▽°*)',
          '(✧ω✧)',
          '(´｡•ᵕ•｡)',
          '(´▽)',
          '(￣▽￣)',
          '╰(*´︶)╯',
          'o(≧▽≦)o',
          '(☆ω☆)',
          '(っ˘ω˘ς)',
          '(¯︶¯)',
          '(o˘◡˘o)',
          '(★ω★)/',
          '(^ヮ^)/',
          'o(>ω<)o',
          'o(❛ᴗ❛)o',
          '(‾́◡‾́)',
          '(bᵔ▽ᵔ)b',
          '(๑˃ᴗ˂)ﻭ',
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
          '(｡♥‿♥｡)',
          '(◠‿◠✿)',
          '(｡◕‿◕｡)',
          '(´◠‿◠)',
          '(◕ᴗ◕✿)',
          '(◕‿◕｡)',
          '(◡‿◡｡)',
          '(｡◠‿◠｡)',
          '(✾‿✾)',
          '(´•‿•)',
          '(ʘ‿ʘ)',
          '(ᵔ‿ᵔ)',
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
const containerForGroupMap = new Map(); // Список соответствий для связи событий с объектами

arrayAllObject.forEach((obj) => {
  if (obj.container) {
    containerForGroupMap.set(obj.container, obj);
  }
}); // Заполение списка соответствий событий с объектами

function findGroupByContainer(findContainerByEvent) {
  return containerForGroupMap.get(findContainerByEvent);
} // Поиск и связь события с объектом

function allEventListener() {
  arrayAllObject.forEach((group) => {
    group.container.addEventListener('input', handlerInputEvent);
    group.container.addEventListener('change', handlerChangeEvent);
    group.container.addEventListener('click', handlerClickEvent);
    group.container.addEventListener('keydown', pressEnterHandler);
  });
} // Объявление различных типов обработчиков событий и добавление их на все элементы
allEventListener(); // Инициализация функции обработки событий

function handlerInputEvent(event) {
  if (!event.target.matches('input[type="text"]')) return;
  const group = findGroupByContainer(this);
  pressEnterHandler(event); // Вызов обработчика для клавиши "Ввод"
  if (!group) {
    console.warn('Обьект не найден: ', group);
  }

  if (daysWeekList.includes(group.name) || questList.includes(group.name)) {
    const valuesTargetElement = getValue(event);
    updateObject(group, valuesTargetElement);
    deleteElement(group, valuesTargetElement, event);
    saveStorage(group);
  } else if (monthList.includes(group.name)) {
    updataMonth(group, event);
  }
} // Функция обработки ввода текста

function handlerChangeEvent(event) {
  if (!event.target.matches('input[type="checkbox"]')) return;
  const group = findGroupByContainer(this);

  if (!group) {
    console.warn('Обьект не найден: ', group);
  }

  if (questList.includes(group.name)) {
    checkboxUpdateStyle(group, event);
    saveStorage(group);
  }
} // Функция обработки выбора чекбокса

function handlerClickEvent(event) {
  if (!event.target.matches('button')) return;
  const group = findGroupByContainer(this);

  if (!group) {
    console.warn('Обьект не найден: ', group);
  }

  if (smileList.includes(group.name)) {
    updataSmile(group, event);
  }
  if (deleteFunctionList.includes(group.name)) {
    updataDelete(group);
    labelDeleteImage();
  }
} // Функция обработки нажатия кнопок

function pressEnterHandler(event) {
  const currentParent = event.target.parentElement;

  if (event.key === 'Enter' && !event.altKey) {
    event.preventDefault();

    const nextElement = currentParent.nextElementSibling;

    if (nextElement) {
      const nextInput = nextElement.querySelector('input[type="text"]');
      if (nextInput) {
        nextInput.focus();
      }
    } else {
      console.warn('Достигнут последний элемент!');
    }

    if (event.shiftKey) {
      event.preventDefault();
      const previosElement = currentParent.previousElementSibling;

      if (previosElement) {
        const previosInput = previosElement.querySelector('input[type="text"]');
        if (previosInput) {
          previosInput.focus();
        } else {
        }
      }
    }
  }
} /* Функция обработки переноса между строками */

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
  fragmentMain.dataset.category = config.name;

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

  const objectClass = new nameObject(inputValue, checkboxValue, inputId, group.name);
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
  const clearObject = constructorKey[group.list];

  group.elements.forEach((element) => {
    element.onclick = async () => {
      if (element.id == 'yes') {
        try {
          await deleteElementBdAll(clearObject);
          configObject.arrayObjects.length = 0;
          const elementsToRemove = Array.from(configObject.container.children).slice(1);
          elementsToRemove.forEach((child) => child.remove());

          createElement(clearObject);
          config.label.style.visibility = 'hidden';
        } catch (error) {
          console.error(`При очистке хранилища ${group.name} произошла ошибка: `, error);
        }
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

async function saveStorage(object) {
  try {
    await arraySaveToStorage(object);
    console.log(`Сохранение прошло успешно!`);
  } catch (error) {
    console.error(`Ошибка при сохранении данных: `, error);
  }
} // Основная функция сохранения в БД

function arraySaveToStorage(object) {
  return new Promise((resolve, reject) => {
    const storeName = `store_${object.name}`;
    const transaction = objectBd.transaction([storeName], 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    const saveArray = object.arrayObjects;

    if (saveArray.length === 0) {
      transaction.oncomplete = () => resolve();
      transaction.onerror = (event) => reject(event.target.error);
      console.log(`Массив объекта ${object.name} пуст!`);
      return;
    }

    let requestComplected = 0;
    const totalReqests = saveArray.length;

    saveArray.forEach((item) => {
      const request = objectStore.put(item);

      request.onsuccess = () => {
        requestComplected++;
        if (requestComplected === totalReqests) {
          console.log(`Объект ${object.name} сохранен  в ${storeName} `);
        }
      };
      request.onerror = (event) => {
        console.error(
          `Ошибка при сохранении объекта ${name} в "${storeName}":`,
          event.target.error
        );
        reject(event.target.error);
      };
    });
    transaction.oncomplete = () => {
      console.log(`Сохранение в хранилище ${storeName} завершено.`);
      resolve();
    };
    transaction.onerror = (event) => {
      console.error(`Ошибка транзакции при сохранении в ${storeName}:`, event.target.error);
      reject(event.target.error);
    };
  });
} //Функция для сохранения monthListб, smileList, questList, daysWeekList в БД

const renderFunctions = {
  monday: renderDaysOrQuests,
  tuesday: renderDaysOrQuests,
  wednesday: renderDaysOrQuests,
  thursday: renderDaysOrQuests,
  friday: renderDaysOrQuests,
  saturday: renderDaysOrQuests,
  sunday: renderDaysOrQuests,
  task: renderDaysOrQuests,
  nodeadline: renderDaysOrQuests,
  month: renderMonth,
  tasksmile: renderSmile,
  nodeadlinesmile: renderSmile,
}; // Список ключей для функций рендера

async function loadStorage() {
  const promises = arrayAllObject
    .filter((object) => 'arrayObjects' in object)
    .map(async (object) => {
      const storeName = `store_${object.name}`;
      try {
        const loadArray = await loadAllStore(storeName);
        object.arrayObjects = loadArray;

        const renderer = renderFunctions[object.name];

        if (renderer) {
          renderer(object, loadArray);
        } else {
          console.warn(`Неизвестный тип объекта для рендера: ${object.name}`);
        }
      } catch (error) {
        console.error(`Ошибка при загрузке из ${storeName}:`, error);
      }
    });
  await Promise.all(promises);
  console.log('Загрузка данных из всех хранилищ завершена.');
} // Общая функция загрузки

function loadAllStore(storeName) {
  return new Promise((resolve, reject) => {
    const transaction = objectBd.transaction([storeName], 'readonly');
    const objectStore = transaction.objectStore(storeName);

    const request = objectStore.getAll();

    request.onsuccess = (event) => {
      console.log(`Данные ${storeName} успешно загружены!`);
      resolve(event.target.result);
    };
    request.onerror = (event) => {
      console.error(`Ошибка при загрузке ${storeName}:`, event.target.error);
      reject(event.target.error);
    };
    transaction.onerror = (event) => {
      console.error(`Ошибка транзакции при загрузке ${storeName}:`, event.target.error);
      reject(event.target.error);
    };
  });
} // Функция загрузки хранилищ БД

function renderDaysOrQuests(object, loadArray) {
  const reversedArray = [...loadArray].reverse();

  reversedArray.forEach((loadObject) => {
    const fragmentMain = document.createElement('li');
    fragmentMain.className = object.baseClassName;
    fragmentMain.dataset.id = loadObject.id;
    fragmentMain.dataset.category = loadObject.type;

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

    object.currentElement.insertAdjacentElement('afterEnd', fragmentMain);
  });
} // Функция рендера questList, daysWeekList

function renderMonth(object, loadArray) {
  loadArray.forEach((loadObject) => {
    object.container.value = loadObject.text;
  });
} // Функция рендера monthList

function renderSmile(object, loadArray) {
  loadArray.forEach((loadObject) => {
    object.container.textContent = loadObject.text;
  });
} // Функция рендера smileList

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
