test('spread02', () => {
    const initial = [0, 1, 2, 3, 4]
    const copy = []

    for (let index = 0; index < initial.length; index++) {
        copy[index] = initial[index];
    }

    console.log('initial:', initial)
    console.log('copy:', copy)
});