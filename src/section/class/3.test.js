test('class03', () => {
    class maClass {
        constructor(initial) {
            this.test = initial
        }

        changeTest () {
            this.test = true
        }
    }

    class mySuperClass extends maClass {
        constructor(initial) {
            super(initial)
        }
    }

    const instance = new mySuperClass(false)
    instance.changeTest()

    console.log(instance.test)
})