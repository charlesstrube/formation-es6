test('spread05', () => {
    const initial = {
        test: true
    }

    const copy = {
        ...initial
    }

    copy.test = false

    console.log('initial:', initial)
    console.log('copy:', copy)
});