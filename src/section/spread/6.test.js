test('spread06', () => {
    const objInitial = {
        test: true
    }

    const objFinal = {
        test: false,
        ...objInitial
    }

    console.log('initial:', objFinal)
});