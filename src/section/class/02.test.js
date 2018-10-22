test('class02', () => {
    function myClass (initial) {
        this.test = initial
    }

    const instance = new myClass(false)

    console.log(instance.test)
})