class ObjectClass {
  constructor(text, id) {
    this.text = text;
    this.id = id;
  }
} // Общий класс задач с значениями текста и чекбокса

function createSubclass() {
  return class extends ObjectClass {
    constructor(text, cbCheck, id) {
      super(text, id);
      this.cbCheck = cbCheck;
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
}; // Группа для имен объектов

const groupsForEvent = Object.values(constructorKey); // Массив для перебора групп объектов

groupsForEvent.forEach((group) => {
  group.container.addEventListener('input', (event) => {
    if (!event.target.matches('input[type="text"]')) return;
    const valuesTargetElement = getValue(event);
    updateObject(group, valuesTargetElement);
    deleteElement(group, valuesTargetElement, event);
    messageLog();
  });
  group.container.addEventListener('change', (event) => {
    if (!event.target.matches('input[type="checkbox"]')) return;
    checkboxUpdateStyle(group, event);
    messageLog();
  });
}); // Обработчик событий

function getValue(event) {
  const currentElement = event.target;
  const cardElement = currentElement.closest('[data-id]');
  const inputElement = currentElement.closest('input[type="text"]');
  const inputId = cardElement.dataset.id;
  const inputObject = inputElement.value;
  cardElement.querySelector('input[type="checkbox"]');
  const checkboxElement = cardElement.querySelector('input[type="checkbox"]');
  const checkboxObject = checkboxElement.checked;
  return { inputId, inputObject, checkboxObject, cardElement };
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
  const checkboxObject = currentElement.checked;
  const inputElement = cardElement.querySelector('input[type="text"]');
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
  const inputObject = valuesTargetElement.inputObject;
  const cardElement = valuesTargetElement.cardElement;

  if (inputObject == '') {
    config.arrayObjects = config.arrayObjects.filter((item) => item.id !== checkId);
    cardElement.remove();
  }
} // Проверка и удаление пустых обьектов

// Блок для строк задач и календаря

const monthObject = {
  name: 'month',
  text: '',
  input: document.getElementsByClassName('month-input'),
  container: document.getElementById('monthElement'),
};

monthObject.container.addEventListener('input', (event) => {
  const currentElement = event.target;
  const monthValue = currentElement.value;
  monthObject.text = monthValue;
  messageLog();
});

// Блока для месяца

const buttonSmileGroup = {
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
};

buttonSmileGroup.elements.forEach((group) => {
  group.addEventListener('mousedown', (event) => {
    const pressedButton = event.target;
    const smileArray = buttonSmileGroup.smileArray;
    let value = buttonSmileGroup.value;
    const randomSmile = smileArray[Math.floor(Math.random() * smileArray.length)];
    value = pressedButton.textContent = randomSmile;
  });
});

// Кнопка для смайлика

const buttonDeleteGroup = {
  elements: Array.from(document.getElementsByClassName('delete-btn')),
  containerSucces: Array.from(document.getElementsByClassName('succes-delete')),
  groupName: '',
};

buttonDeleteGroup.elements.forEach((elements) => {
  elements.addEventListener('click', (event) => {
    updateModalWindow(event);
    messageLog();
  });
});

function updateModalWindow(event) {
  const containerSucces = buttonDeleteGroup.containerSucces[0];
  containerSucces.style.display = 'block';

  const targetClass = event.target.dataset.name;
  buttonDeleteGroup.groupName = targetClass;

  const heading = containerSucces.querySelector('h2');
  heading.textContent = `Do you confirm the ${targetClass} clearing?`;
}

buttonDeleteGroup.containerSucces.forEach((elements) => {
  elements.addEventListener('click', (event) => {
    succesDelete(event);
    messageLog();
  });
});

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
  } else if (type == 'no') {
    containerSucces.style.display = 'none';
  }
}

// Кнопки удаления

function messageLog() {
  console.clear();
  groupsForEvent.forEach((group) => {
    console.table(group.arrayObjects);
  });
  console.table(monthObject.text);
} // Логирование данных
