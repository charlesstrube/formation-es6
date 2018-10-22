test('spread07', () => {
    const obj1 = {
        1: true,
        2: true,
        3: true
    }

    const obj2 = {
        2: false,
        4: false
    }
    const objFinal = {
        1: null,
        ...obj1,
        ...obj2,
        4: null
    }

    console.log('initial:', objFinal)
});