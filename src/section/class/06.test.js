test('class06', () => {
    class myClass {
        constructor(initial) {
            this.test = initial
        }

        changeTest () {
            this.test = true
        }
    }

    const instance = new myClass(false)
    instance.changeTest()

    console.log(instance.test)
})