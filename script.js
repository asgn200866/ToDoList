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

const daysWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// Ключи для дней календаря в constructorKey

const constructorKey = {
  task: {
    name: 'task',
    type: 'Tasks',
    baseClassName: 'label-text-tasks',
    inputClassName: 'tasks-input',
    checkboxClassName: 'tasks-cb',
    inputs: document.getElementsByClassName('tasks-input'),
    checkboxes: document.getElementsByClassName('tasks-cb'),
    container: document.getElementById('tasksText'),
    arrayObjects: [],
  },
  nodeadline: {
    name: 'nodeadline',
    type: 'Nodeadline',
    baseClassName: 'label-text-nodeadline',
    inputClassName: 'nodeadline-input',
    checkboxClassName: 'nodeadline-cb',
    inputs: document.getElementsByClassName('nodeadline-input'),
    checkboxes: document.getElementsByClassName('nodeadline-cb'),
    container: document.getElementById('nodeadlineText'),
    arrayObjects: [],
  },
  ...Object.fromEntries(
    daysWeek.map((day) => [
      day,
      {
        name: day,
        type: day.charAt(0).toUpperCase() + day.slice(1),
        baseClassName: `label-text-${day}`,
        inputClassName: `${day}-input`,
        checkboxClassName: 'checkbox-day-week',
        inputs: document.getElementsByClassName(`${day}-input`),
        checkboxes: document.getElementsByClassName('checkbox-day-week'),
        container: document.getElementById(`${day}Text`),
        arrayObjects: [],
      },
    ])
  ),
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
  const fragmentMain = document.createElement('div');
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
  const inputElement = cardElement.querySelector('input[type="text"]');
  const checkboxObject = currentElement.checked;

  if (checkboxObject) {
    inputElement.style.textDecoration = 'line-through';
  } else {
    inputElement.style.textDecoration = 'none';
  }

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
  value: '',
  input: document.getElementsByClassName('month-input'),
  container: document.getElementById('monthElement'),
}; // Объект для работы с элементом месяца

monthObject.container.addEventListener('input', (event) => {
  const currentElement = event.target;
  const monthValue = currentElement.value;
  monthObject.value = monthValue;
  messageLog();
  saveLocalStorage();
}); // Обработчик событий на поле ввода месяца

// Блок для месяца

const buttonSmileGroup = {
  name: 'smile',
  elements: Array.from(document.getElementsByClassName('smile-btn')),
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
  value: '',
  groupName: '',
}; // Объект для кнопки смайликов

buttonSmileGroup.elements.forEach((group) => {
  group.addEventListener('mousedown', (event) => {
    const pressedButton = event.target;
    const smileArray = buttonSmileGroup.smileArray;
    const randomSmile = smileArray[Math.floor(Math.random() * smileArray.length)];
    buttonSmileGroup.value = pressedButton.textContent = randomSmile;

    buttonSmileGroup.groupName = event.target.dataset.class;

    saveLocalStorage();
  });
}); // Обработчик событий и рандомайзер смайлика

// Кнопка для смайлика

const buttonDeleteGroup = {
  elements: Array.from(document.getElementsByClassName('delete-btn')),
  containerSucces: Array.from(document.getElementsByClassName('succes-delete')),
  groupName: '',
  /* ----------------------------------------------------------- */
  elementPhoto: document.querySelector('.imageMem'),
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

const groupsForLocalStorage = [...Object.values(constructorKey), buttonSmileGroup, monthObject];

function saveLocalStorage() {
  const nameObject = groupsForLocalStorage.map((obj) => obj.name);
  nameObject.forEach((group) => {
    if (group === 'smile') {
      const currentObject = groupsForLocalStorage.find((obj) => obj.name === 'smile');
      if (currentObject?.groupName && currentObject.groupName !== '') {
        localStorage.setItem(
          `group_${group}_${currentObject.groupName}`,
          JSON.stringify(currentObject.value)
        );
      }
    } else if (group === 'month') {
      const currentObject = groupsForLocalStorage.find((obj) => obj.name === 'month');
      localStorage.setItem(`group_${group}`, JSON.stringify(currentObject.value));
    } else {
      const currentObjectsGroup = groupsForLocalStorage.find((obj) => obj.name === group);
      const currentObject = currentObjectsGroup.arrayObjects;
      localStorage.setItem(`group_${group}`, JSON.stringify(currentObject));
    }
  });
} // Функция сохранения в локальное хранилище

function loadLocalStorage() {
  groupsForLocalStorage.forEach((group) => {
    const arrayObjects = JSON.parse(localStorage.getItem(`group_${group.name}`));

    if (group.name === 'smile') {
      // Загрузка значений кнопок эмоций
      const groupName = ['task', 'nodeadline'];
      groupName.forEach((classNeme) => {
        const loadValue = JSON.parse(localStorage.getItem(`group_${group.name}_${classNeme}`));
        const currentElement = document.querySelector(`[data-class="${classNeme}"]`);

        currentElement.textContent = loadValue;
      });
    } else if (group.name === 'month') {
      // Загрузка значений поля ввода месяца
      const loadValue = JSON.parse(localStorage.getItem(`group_${group.name}`));
      const currentElement = document.getElementById('monthElement');
      currentElement.setAttribute('value', loadValue);

      currentElement.textContent = loadValue;
    } else {
      const reversedArray = JSON.parse(localStorage.getItem(`group_${group.name}`));
      const loadValue = [...reversedArray].reverse();
      console.log(reversedArray);
      console.log(loadValue);
      if (loadValue !== null) {
        loadValue.forEach((element) => {
          group.arrayObjects = reversedArray;
          const fragmentMain = document.createElement('div');
          fragmentMain.className = group.baseClassName;
          fragmentMain.innerHTML = `
  <input type="checkbox" class="${group.checkboxClassName}" ${element.cbCheck ? 'checked' : ''}>
    <input type="text" class= "${group.inputClassName}" value= "${element.text}" ${element.cbCheck ? 'style="text-decoration: line-through;"' : 'style="textDecoration: none;"'}>`;
          fragmentMain.dataset.id = element.id;
          group.container.insertAdjacentElement('afterbegin', fragmentMain);
        });
      }
    }
  });
} // Функция чтения из локального хранилища

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
