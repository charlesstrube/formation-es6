test('class05', () => {
    class myClass {
        constructor() {
            console.log(this)
        }
    }

    new myClass()
})