test('des21', () => {
    const alphabetGrec = [
        'α',
        'β',
        'γ',
        'δ',
        'ε'
    ]

    const myFunction = array => {
        const alpha = array[0]
        const beta = array[1]
        console.log(alpha, beta)
    }

    myFunction(alphabetGrec)
});