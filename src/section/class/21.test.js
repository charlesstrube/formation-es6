test('class21', () => {
    class myClass {
        constructor() {
            this.test = false
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

    console.log(myObj.test, objInstance.test)
})