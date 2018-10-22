test('spread08', () => {
    const showArgs = (a, b) => {
        console.log(a, b)
    }

    const args = [0, 1]

    showArgs(...args)
});