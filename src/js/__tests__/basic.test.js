import sorting from "../../index"

// console.log(111)

// console.log(sorting([
//       {name: 'мечник', health: 10},
//       {name: 'маг', health: 100},
//       {name: 'лучник', health: 80},
//     ]))

test("test", () => {
  const res = sorting([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ])
  expect(res).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ])
})

dataList = [
  [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ], 
  [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 65},
    {name: 'лучник', health: 80},
    {name: 'ковбой', health: 20},
  ], 
  [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 99},
    {name: 'ковбой', health: 80},
    {name: 'пехотинец', health: 81},
    {name: 'лекарь', health: 2},
  ], 
  [
    {name: 'мечник', health: 8},
    {name: 'маг', health: 91},
    {name: 'пехотинец', health: 43},
    {name: 'лекарь', health: 45},
    {name: 'волшебник', health: 45},
    {name: 'бабаЯга', health: 87},
  ]
]

test.each(dataList)('testing')