const parser = {
  chinese: {
    numbers: ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    units: ["", "十", "百", "千"],
    bigUnits: ["", "万", "亿"],
  },
  english: {
    numbers: [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ],
    units: ["", "hundred", "thousand"],
    bigUnits: ["", "million", "billion"],
  },
  indonesia: {
    numbers: [
      "nol",
      "satu",
      "dua",
      "tiga",
      "empat",
      "lima",
      "enam",
      "tujuh",
      "delapan",
      "simbilan",
    ],
    specialCase: {
      belas: " belas",
      number: (number) => {
        if (number === 1) return "sebelas";
        else
          return (
            parser.indonesia.numbers[number] +
            parser.indonesia.specialCase.belas
          );
      },
    },
    units: ["", "puluh", "ratus", "ribu"],
    bigUnits: ["", "juta", "milliar"],
  },
};
module.exports = {
  parser,
};
