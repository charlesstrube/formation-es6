test('spread10', () => {
    const showArgs = (...params) => {
        for (let param of params) {
            console.log(param);
        }
    }

    const args = [0, 1, 2, 3, 4]

    showArgs(...args)
});