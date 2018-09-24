test('class01', () => {
    function myClass (initial) {
        this.test = initial
    }

    myClass.prototype.changeTest = function () {
        this.test = true
    }

    const instance = new myClass(false)
    instance.changeTest()

    console.log(instance.test)
})