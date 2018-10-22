test('var03', () => {
    if (true) {
        var innerVar = true
        let innerLet = true
        const innerConst = true
    }

    console.log(innerVar)
    console.log(innerLet)
    console.log(innerConst)
});