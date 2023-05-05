const map = (array, mapper) => {
  const result = [];
  for (const element of array) {
    result.push(mapper(element));
  }
  return result;
};

const createMap = (array) => {
  const processOnfunction = array.reduce((a, b) => a + b, 0);
  array.push(processOnfunction);
  return (mapper) => {
    return map(array, mapper);
  };
};

const mapp = createMap([3, 6, 9, 12, 15]);

console.log(map([3, 6, 9, 12, 15], (n) => n * 100));
console.log(mapp((n) => n * 100));
console.log(mapp((n) => n));
console.log(mapp((n) => n * 2));
console.log(mapp((n) => n * 3));
console.log(
  mapp((n) => {
    return { [n]: { key: `name${n}`, value: n } };
  })
);
