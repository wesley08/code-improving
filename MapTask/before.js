const mapTask = (data) => {
  const mapResult = [];

  const indexAdd = data.findIndex((item) => item.task === "add"); // for all add, edit, delete and update

  indexAdd === -1
    ? mapResult.push(anotherFunction(null, "add"))
    : mapResult.push(anotherFunction(data[indexAdd])); // for all add, edit, delete and update

  return mapResult;
};
