import sorting from "../../index";

const dataList = [
  [
    [
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ],
    [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ],
  ],

  [
    [
      { name: "мечник", health: 10 },
      { name: "маг", health: 65 },
      { name: "лучник", health: 80 },
      { name: "ковбой", health: 20 },
    ],
    [
      { name: "лучник", health: 80 },
      { name: "маг", health: 65 },
      { name: "ковбой", health: 20 },
      { name: "мечник", health: 10 },
    ],
  ],

  [
    [
      { name: "мечник", health: 10 },
      { name: "маг", health: 99 },
      { name: "ковбой", health: 80 },
      { name: "пехотинец", health: 81 },
      { name: "лекарь", health: 2 },
    ],
    [
      { name: "маг", health: 99 },
      { name: "пехотинец", health: 81 },
      { name: "ковбой", health: 80 },
      { name: "мечник", health: 10 },
      { name: "лекарь", health: 2 },
    ],
  ],
  [
    [
      { name: "мечник", health: 8 },
      { name: "маг", health: 91 },
      { name: "пехотинец", health: 43 },
      { name: "лекарь", health: 45 },
      { name: "бабаЯга", health: 87 },
    ],
    [
      { name: "маг", health: 91 },
      { name: "бабаЯга", health: 87 },
      { name: "лекарь", health: 45 },
      { name: "пехотинец", health: 43 },
      { name: "мечник", health: 8 },
    ],
  ],
];

test.each(dataList)("testingn function sorting", (list, expected) => {
  const result = sorting(list);
  expect(result).toEqual(expected);
});
