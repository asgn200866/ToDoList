function createSubclass(type, id, text, cbCheck) {
  return {
    type: type ?? 'defaultType',
    id: id ?? 'defaultId',
    text: text ?? 'defaultText',
    cbCheck: cbCheck ?? false,
  };
}

export const createObjectClass = (type, id, text, cbCheck) => {
  const objectClass = createSubclass(type, id, text, cbCheck);

  return objectClass;
};
