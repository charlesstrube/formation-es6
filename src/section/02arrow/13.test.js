test('arr13', () => {
    const filterOddNumbers = num => num % 2 === 0
    const myArray = [0, 1, 2, 3, 4]
    const result = myArray.filter(filterOddNumbers)

    console.log(result)
});