const peoples = [
  { name: "test1", age: 20, gender: "male" },
  { name: "test1", age: 20, gender: "male" },
  { name: "test1", age: 20, gender: "male" },
  { name: "test1", age: 20, gender: "male" },
  { name: "test2", age: 30, gender: "female" },
  { name: "test3", age: 40, gender: "male" },
  { name: "test4", age: 50, gender: "female" },
  { name: "test5", age: 10, gender: "male" },
  { name: "test6", age: 20, gender: "female" },
  { name: "test7", age: 30, gender: "male" },
  { name: "test8", age: 42, gender: "female" },
  { name: "test9", age: 54, gender: "male" },
  { name: "test10", age: 11, gender: "male" },
];

const data = Object.values({
  type1: [
    { id: 1, title: "title1", value: "value1" },
    { id: 2, title: "title", value: "value2" },
  ],
  type2: [
    { id: 5, title: "title5", value: "value5" },
    { id: 3, title: "title", value: "value3" },
  ],
}).flat();

const groupBy = (arrayData, keyGroupBy) => {
  if (typeof keyGroupBy === "string") {
    const stringKey = keyGroupBy;
    keyGroupBy = (people) => people[stringKey];
  }

  return arrayData.reduce((prev, people) => {
    const key = keyGroupBy(people);
    if (!prev[key]) {
      prev[key] = [];
    }
    prev[key].push(people);
    return prev;
  }, {});
};

console.log(groupBy(peoples, (people) => `${people.gender}-${people.age}`));
console.log(groupBy(peoples, (people) => people.gender));
console.log(groupBy(peoples, "gender"));
console.log(groupBy(peoples, "age"));
console.log(groupBy(data, "title"));
