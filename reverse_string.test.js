const reverseString = require("./task/task_01");

// test(
//     'Проверяем реверс строки',
//     ()=>{
//         expect(reverseString('hellow www')).toBe('www wolleh')
//     }
// )

describe("Моя проверка", () => {
  const testCases = [
    {
      inString: "hello",
      expected: "olleh",
    },
    {
      inString: "milk",
      expected: "klim",
    },
    {
      inString: "shark",
      expected: "krahs",
    },
  ];
  testCases.forEach(test=>{
    it('Описание теста',
        ()=>{
            const res = reverseString(test.inString);
            expect(res).toBe(test.expected);
        }
    )
  })
});
