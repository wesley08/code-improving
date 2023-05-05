const { parser } = require("./parserData");

const { chinese } = parser;
const { bigUnits } = chinese;

const parserNumberChiness = (number) => {
  const fourDigitsArray = splitNumber(number, /(?=(\d{4})+$)/g);
  let result = "";

  fourDigitsArray.forEach((element, j) => {
    const convert = transformNumber(element, "chinese");
    const bigUnit = bigUnits[fourDigitsArray.length - j - 1];

    result += convert;

    if (convert) result += bigUnit;
  });
  return result;
};

const parserNumberIndonesia = (number) => {
  let result = "";

  splitNumber(number, /(?=(\d{4})+$)/g).forEach((element, j) => {
    const convert = transformNumber(element, "indonesia", " ");
    result += convert;
  });
  return result;
};

const transformNumber = (number, type, separator = "") => {
  let result = "";
  const { numbers, units } = parser[type];

  number.split("").forEach((singleNumber, i) => {
    const c = numbers[singleNumber];
    const u = units[number.length - 1 - i];

    if (singleNumber == 0) {
      if (result[result.length - 1] != numbers[0]) result += c + separator;
    } else result += c + separator + u + separator;
  });

  if (result[result.length - 1] == numbers[0]) result = result.slice(0, -1);

  return result;
};

const splitNumber = (number, digitSplit) => {
  return number.toString().replace(digitSplit, " ").split(" ").filter(Boolean);
};

console.log(parserNumberChiness(30000002232));
console.log(parserNumberIndonesia(3212));
console.log(parserNumberIndonesia(4623));
console.log(parserNumberIndonesia(7632));
console.log(parser.indonesia.specialCase.number(3));
