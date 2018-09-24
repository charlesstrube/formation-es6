test('arr02', () => {
    const filterOddNumbers = num => {
        return num % 2 === 0
    }

    const myArray = [0, 1, 2, 3, 4]
    const result = myArray.filter(filterOddNumbers)
    console.log(result)
});