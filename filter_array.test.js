const arrayFilter = require("./task/task_02");

describe("Фильтруем массив", () => {
  const testCases = [
    {
      in: [0, 1, 2, 3, 4, 5],
      expected: [0, 2, 4],
    },
    {
      in: [true, false, true, false],
      expected: [true, true],
    },
  ];
  testCases.forEach(el=>{
    it('describing',()=>{
        const res = arrayFilter(el.in);
        expect(res).toEqual(el.expected)
    })
  })
});
