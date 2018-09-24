test('spread01', () => {
    const initial = [0, 1, 2, 3, 4]
    const copy = initial

    copy[2] = 'test'

    console.log('initial:', initial)
    console.log('copy:', copy)
});