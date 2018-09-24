test('des24', () => {
    const alphabetGrec = {
        alpha: 'α',
        beta: 'β',
        gamma: 'γ',
        delta: 'δ',
        epsilode: 'ε'
    }

    const myFunction = ({ alpha, delta }) => {
        console.log(alpha, delta)
    }

    myFunction(alphabetGrec)
});