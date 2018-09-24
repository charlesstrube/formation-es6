test('des14', () => {
    const alphabetGrec = {
        alpha: 'α',
        beta: 'β',
        gamma: 'γ',
        delta: 'δ',
        epsilode: 'ε'
    }

    const { alpha, delta, ...rest } = alphabetGrec

    console.log(rest)
});