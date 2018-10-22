test('class10', () => {
    class myClass {
        constructor() {
            this._test = null
        }

        set test (value) {
            this._test = value
        }
    }

    const instance = new myClass()
    instance.test = 'coucou, tu veux voir mon code ?'

    console.log(instance._test)
})