test('var01', () => {
    function test () {
        var innerVar = true
    }

    test()

    console.log(innerVar)
});