test('var12', () => {
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            console.log('inside loop', i)
        })
    }

    console.log('outside loop', i)
});