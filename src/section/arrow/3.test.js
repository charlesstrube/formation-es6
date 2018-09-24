test('arr03', () => {
    const filterOddNumbers = myNumber => myNumber % 2 === 0
    const myArray = [0, 1, 2, 3, 4]
    const result = myArray.filter(filterOddNumbers)
    console.log(result)
});