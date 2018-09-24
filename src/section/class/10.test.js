test('class10', () => {

    class myClass {
        constructor(initial) {
            this.test = initial
        }

        changeTest () {
            this.test = true
        }
    }

    let objInstance = new myClass()
    let myObj = {
        __proto__: objInstance,
    }

    myObj.changeTest()

    console.log(myObj.test)
})