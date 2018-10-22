test('class09', () => {
    class myClass {
        constructor() {
            this._test = null
        }

        get test () {
            return this._test
        }
    }

    const instance = new myClass()

    console.log(instance.test)
})