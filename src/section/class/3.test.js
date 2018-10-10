test('class03', () => {
    class myClass {
        constructor(initial) {
            this.test = initial
        }

        changeTest () {
            this.test = true
        }
    }

    class mySuperClass extends myClass {
        constructor(initial) {
            super(initial)
        }
    }

    const instance = new mySuperClass(false)
    instance.changeTest()

    console.log(instance.test)
})