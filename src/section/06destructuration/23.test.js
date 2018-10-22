test('des23', () => {
    const alphabetGrec = {
        alpha: 'α',
        beta: 'β',
        gamma: 'γ',
        delta: 'δ',
        epsilode: 'ε'
    }

    const myFunction = object => {
        console.log(object.alpha, object.delta)
    }

    myFunction(alphabetGrec)
});