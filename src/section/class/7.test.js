test('class07', () => {
    const id = 1

    const obj = {
        id,
        text () {
            return 'pouet'
        }
    }

    console.log(obj.text())
})