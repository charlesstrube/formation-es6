test('class09', () => {
    const var1 = 'oh'
    const var2 = 'lala'

    const obj = {
        [var1]: 'pouet',
        [var2] () {
            return 'pouetpouet'
        }
    }

    console.log(obj.oh)
    console.log(obj.lala())
})