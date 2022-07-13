const generateModule = require("./task/generate");
const getData = require("./task/mock");

describe('first', () => {

    test('getdata',()=>{
        expect(getData()).toEqual([1,2,3])
    })

    test('test1',()=>{
        const mockArray = [4,5,6];

        const spy = jest.spyOn(generateModule, 'generateData');
        spy.mockReturnValue(mockArray);

        const data = getData();
        expect(data).toEqual(mockArray)

        console.log(data)
    })


 })