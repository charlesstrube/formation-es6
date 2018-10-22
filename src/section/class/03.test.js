test('class03', () => {
    function myClass (initial) {
        this.test = initial
    }

    myClass.methodStatic = function () {
        return 'coucou'
    }

    console.log(myClass.methodStatic())
})