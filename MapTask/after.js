const mapTask = (data) => {
  const status = {
    add: anotherFunction(null, "add"), // same for add , edit, delete , update
  };

  for (const element of data) {
    status[element.task] = anotherFunction(element);
  }

  return Object.values(status);
};
