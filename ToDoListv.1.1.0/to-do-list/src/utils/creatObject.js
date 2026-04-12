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

export { ObjectClass, createSubclass };
