class ObjectClass {
  constructor(text, id) {
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

const constructorKey = {
  ...Object.fromEntries(
    questList.map((item) => [
      item,
      {
        name: item,
        type: item.charAt(0).toUpperCase() + item.slice(0),

        baseClassName: `label-text-${item}`,
        inputClassName: `${item}-input`,
        checkboxClassName: `${item}-cb`,

        inputs: document.getElementsByClassName(`${item}-input`),
        checkboxes: document.getElementsByClassName(`${item}-cb`),
        container: document.getElementById(`${item}Text`),

        arrayObjects: [],
      },
    ])
  ),
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
        container: document.getElementById(`${item}Text`),

        arrayObjects: [],
      },
    ])
  ),
  ...Object.fromEntries(
    smileList.map((item) => [
      item,
      {
        name: item,
        type: item.charAt(0).toUpperCase() + item.slice(0),
        container: document.querySelector(`[data-class="${item}"]`),
        smileArray: [
          '(* ^ ω ^)',
          '(´ ∀ *)',
          '٩(◕‿◕｡)۶',
          '☆*:.｡.o(≧▽≦)o.｡.:*☆',
          '(o^▽^o)',
          '(⌒▽⌒)☆',
          '<(￣︶￣)>',
          "。.:☆*:･'(*⌒―⌒*)))",
          'ヽ(・∀・)ﾉ',
          '(´｡• ω •｡)',
          '(￣ω￣)',
          '｀;:゛;｀;･(°ε° )',
          '(o･ω･o)',
          '(＠＾◡＾)',
          'ヽ(・ω・)ﾉ',
          '(o_ _)ﾉ彡☆',
          '(^人^)',
          '(o´▽o)',
          '(*´▽)',
          '｡ﾟ( ﾟ^∀^ﾟ)ﾟ｡',
          '( ´ ω )',
          '(((o(*°▽°*)o)))',
          '(≧◡≦)',
          '(o´∀o)',
          '(´• ω •)',
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
          'ヽ(o＾▽＾o)ノ',
          "☆ ～('▽^人)",
          '(*°▽°*)',
          '٩(｡•́‿•̀｡)۶',
          '(✧ω✧)',
          'ヽ(*⌒▽⌒*)ﾉ',
          '(´｡• ᵕ •｡)',
          '( ´ ▽ )',
          '(￣▽￣)',
          '╰(*´︶)╯',
          'ヽ(>∀<☆)ノ',
          'o(≧▽≦)o',
          '(☆ω☆)',
          '(っ˘ω˘ς )',
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
          'o( ❛ᴗ❛ )o',
          '｡ﾟ(TヮT)ﾟ｡',
          '( ‾́ ◡ ‾́ )',
          '(ﾉ´ヮ)ﾉ*: ･ﾟ',
          '(b ᵔ▽ᵔ)b',
          '(๑˃ᴗ˂)ﻭ',
          '(๑˘︶˘๑)',
          '( ˙꒳​˙ )',
          '(*꒦ິ꒳꒦ີ)',
          '°˖✧◝(⁰▿⁰)◜✧˖°',
          '(´･ᴗ･ )',
          '(ﾉ◕ヮ◕)ﾉ:･ﾟ✧',
          '(„• ֊ •„)',
          '(.❛ ᴗ ❛.)',
          '(⁀ᗢ⁀)',
          '(￢‿￢ )',
          '(¬‿¬ )',
          '(￣▽￣)b',
          '( ˙▿˙ )',
          '(¯▿¯)',
          '( ◕▿◕ )',
          '＼(٥⁀▽⁀ )／',
          '(„• ᴗ •„)',
          '(ᵔ◡ᵔ)',
          '( ´ ▿ )',
          '(๑>◡<๑)',
          '( = ⩊ = )',
          '( ´ ꒳ )',
          '⸜( ´ ꒳ )⸝',
          '⸜(⸝⸝⸝´꒳⸝⸝⸝)⸝',
          '⸜(ˊᗜˋ*)⸝',
          '⸜( ˊᵕˋ )⸝',
          '(>⩊<)',
          '(ᗒ⩊ᗕ)',
          '(ᵔ⩊ᵔ)',
          '( ᵔ ⩊ ᵔ )',
          '(•⩊•)',
          '( • ⩊ • )',
        ],
        arrayObjects: [],
      },
    ])
  ),
  ...Object.fromEntries(
    monthList.map((item) => [
      item,
      {
        name: item,
        type: item.charAt(0).toUpperCase() + item.slice(0),
        container: document.getElementById(`${item}Element`),
        arrayObjects: [],
      },
    ])
  ),
  /* (
  name: 'month',
  input: document.getElementsByClassName('month-input'),
  container: document.getElementById('monthElement'),
  arrayObjects: [{}],
) */
}; // Группа для имен объектов задач

const groupsForEvent = Object.values(constructorKey); // Массив для перебора групп объектов

groupsForEvent.forEach((group) => {
  group.container.addEventListener('input', (event) => {
    if (!event.target.matches('input[type="text"]')) return;
    const valuesTargetElement = getValue(event);
    updateObject(group, valuesTargetElement);
    deleteElement(group, valuesTargetElement, event);
    saveLocalStorage();
    messageLog();
  });
  group.container.addEventListener('change', (event) => {
    if (!event.target.matches('input[type="checkbox"]')) return;
    checkboxUpdateStyle(group, event);
    saveLocalStorage();
    messageLog();
  });
}); // Обработчик событий для задач

function getValue(event) {
  const currentElement = event.target;
  const cardElement = currentElement.closest('[data-id]');
  const inputElement = currentElement.closest('input[type="text"]');
  const inputId = cardElement.dataset.id;
  const inputObject = inputElement.value;
  cardElement.querySelector('input[type="checkbox"]');
  const checkboxElement = cardElement.querySelector('input[type="checkbox"]');
  const checkboxObject = checkboxElement.checked;
  return { inputId, inputObject, checkboxObject, cardElement, currentElement };
} // Функция получение данных из HTML в реальном времени

function createElement(group) {
  const config = constructorKey[group.name];
  const fragmentMain = document.createElement('li');
  fragmentMain.className = config.baseClassName;
  const idElement = crypto.randomUUID();
  fragmentMain.innerHTML = `
  <input type="checkbox" class= ${config.checkboxClassName}>
    <input type="text" class= ${config.inputClassName}>`;
  fragmentMain.dataset.id = idElement;

  config.container.insertAdjacentElement('beforeend', fragmentMain);
} // Функция создания элементов

groupsForEvent.forEach((group) => {
  createElement(group);
}); // Создание первых элементов

function createObject(group, valuesTargetElement) {
  const inputId = valuesTargetElement.inputId;
  const inputValue = valuesTargetElement.inputObject;
  const checkboxValue = valuesTargetElement.checkboxObject;
  const config = constructorKey[group.name];
  const nameObject = createSubclass();

  const objectClass = new nameObject(inputValue, checkboxValue, inputId);
  config.arrayObjects.push(objectClass);
  return { objectClass };
} // Создание объекта и добавление его в массив

function checkboxUpdateStyle(group, event) {
  const config = constructorKey[group.name];
  const idArray = config.arrayObjects;
  const currentElement = event.target;
  const cardElement = currentElement.closest('[data-id]');
  const inputId = cardElement.dataset.id;
  const realId = idArray.find((item) => item.id === inputId);
  const checkboxObject = currentElement.checked;

  if (realId) {
    realId.cbCheck = checkboxObject;
  }
} // Изменение стиля текста при активации чекбокса и обновление чекбокса в объекте

function updateObject(group, valuesTargetElement) {
  const config = constructorKey[group.name];
  const idArray = config.arrayObjects;
  const checkId = valuesTargetElement.inputId;
  const realId = idArray.find((item) => item.id === checkId);
  const inputObject = valuesTargetElement.inputObject;

  if (realId) {
    realId.text = inputObject;
  } else {
    createElement(group);
    createObject(group, valuesTargetElement);
  }
} // Редактирование объекта и создание объекта/DOM элемента

function deleteElement(group, valuesTargetElement) {
  const config = constructorKey[group.name];

  const checkId = valuesTargetElement.inputId;
  const cardElement = valuesTargetElement.cardElement;
  const currentElement = valuesTargetElement.currentElement;

  currentElement.addEventListener('blur', () => {
    if (currentElement.value == '') {
      config.arrayObjects = config.arrayObjects.filter((item) => item.id !== checkId);
      cardElement.remove();
    }
  });
} // Проверка и удаление пустых обьектов

// Блок для строк задач и календаря

const monthObject = {
  name: 'month',
  input: document.getElementsByClassName('month-input'),
  container: document.getElementById('monthElement'),
  arrayObjects: [{}],
}; // Объект для работы с элементом месяца

monthObject.container.addEventListener('input', (event) => {
  const currentElement = event.target;
  monthObject.value = currentElement.value;
  monthObject.arrayObjects[0].month = currentElement.value;

  messageLog();
  saveLocalStorage();
}); // Обработчик событий на поле ввода месяца

// Блок для месяца

/* const groupNameSmile = ['task', 'nodeadline']; // Массив для группы смайликов

const buttonSmileGroup = {}; // Объекты для кнопки смайликов

const groupNameSmileForEvent = Object.values(constructorKey);

groupNameSmileForEvent.forEach((group) => {
  group.elements.addEventListener('mousedown', (event) => {
    const pressedButton = event.target;
    const randomSmile = group.smileArray[Math.floor(Math.random() * group.smileArray.length)];
    pressedButton.textContent = randomSmile;

    group.arrayObjects.forEach((object) => {
      if (pressedButton.dataset.class == object.groupName) {
        object.textValue = randomSmile;
      }
    });

    saveLocalStorage();
  });
}); // Обработчик событий и рандомайзер смайлика

// Кнопка для смайлика */

const buttonDeleteGroup = {
  elements: Array.from(document.getElementsByClassName('delete-btn')),
  containerSucces: Array.from(document.getElementsByClassName('label-delete')),
  groupName: '',
  /* ----------------------------------------------------------- */
  elementPhoto: document.querySelector('.image-mem'),
  /* ----------------------------------------------------------- */
}; // Группа для окна/кнопок удаления

buttonDeleteGroup.elements.forEach((elements) => {
  elements.addEventListener('click', (event) => {
    updateModalWindow(event);
    messageLog();
  });
}); //Обработчик событий для вызова модального окна

function updateModalWindow(event) {
  const containerSucces = buttonDeleteGroup.containerSucces[0];
  containerSucces.style.display = 'block';

  const targetClass = event.target.dataset.name;
  buttonDeleteGroup.groupName = targetClass;

  const heading = containerSucces.querySelector('h2');
  heading.textContent = `Do you confirm the ${targetClass} clearing?`;
  /* ----------------------------------------------------------- */
  const arrPhoto = ['galery/evreilev.jpg', 'galery/dedinmirror.jpg'];
  const elementPhoto = buttonDeleteGroup.elementPhoto;
  const randomPhoto = arrPhoto[Math.floor(Math.random() * arrPhoto.length)];
  elementPhoto.src = randomPhoto;
  /* ----------------------------------------------------------- */
} // Функция вызова модального окна

buttonDeleteGroup.containerSucces.forEach((elements) => {
  elements.addEventListener('click', (event) => {
    succesDelete(event);
    messageLog();
  });
}); // Обработчик событий для подтверждения удаления

function succesDelete(event) {
  const type = event.target.dataset.type;
  const containerSucces = buttonDeleteGroup.containerSucces[0];
  const groupName = buttonDeleteGroup.groupName;

  if (type == 'yes') {
    const currentClass = constructorKey[groupName];
    currentClass.arrayObjects.length = 0;
    const parentContainer = document.querySelector(`.column-${groupName}`);
    parentContainer.replaceChildren();
    createElement(constructorKey[groupName]);
    containerSucces.style.display = 'none';
    localStorage.removeItem(`group_${groupName}`);
  } else if (type == 'no') {
    containerSucces.style.display = 'none';
  }
} // Функция подтверждения удаления и очистки массива объектов/локального хранилища => закрытие модального окна

// Кнопки удаления

const groupsForLocalStorage = [...Object.values(constructorKey), monthObject]; // Группа обьектов для функций локального хранилища

function saveLocalStorage() {
  groupsForLocalStorage.forEach((object) => {
    const arrayObjects = object.arrayObjects;
    const name = object.name;
    localStorage.setItem(`item_${name}`, JSON.stringify(arrayObjects));
  });
} // Функция сохранения в локальное хранилище

function loadLocalStorage() {} // Функция чтения из локального хранилища

loadLocalStorage(); // Вызов функции для загрузки и отображения данных

function messageLog() {
  /*   console.clear(); */
  /*   groupsForEvent.forEach((group) => {
    console.table(group.arrayObjects);
  }); */
  /*   const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    const value = JSON.parse(localStorage.getItem(key));
    console.log(value);
  }); */
} // Логирование данных
messageLog();
