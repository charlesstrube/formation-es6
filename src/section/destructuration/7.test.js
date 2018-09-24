test('des07', () => {
    const alphabetGrec = [
        'α',
        'β',
        'γ',
        'δ',
        'ε'
    ]

    const [alpha, beta] = alphabetGrec

    const rest = alphabetGrec.filter(letter => letter !== alpha && letter !== beta)

    console.log(rest)
});