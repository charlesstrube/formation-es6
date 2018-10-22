test('class01', () => {
    function myClass () {
        console.log(this)
    }


    const instance = new myClass()
})