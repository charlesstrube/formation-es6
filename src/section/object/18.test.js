test('class18', () => {
    const var1 = 'oh'
    const var2 = 'lala'
    const obj = {}

    obj[var1] = 'pouet'
    obj[var2] = function () {
        return 'pouetpouet'
    }

    console.log(obj.oh)
    console.log(obj.lala())
})