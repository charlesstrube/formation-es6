test('spread09', () => {
    const showArgs = (...params) => {
        for (let param of params) {
            console.log(param);
        }
    }

    showArgs(0, 1);
});