test('class06', () => {
    const id = 1

    const obj = {
        id,
        text: function () {
            return 'pouet'
        }
    }

    console.log(obj.text())
})