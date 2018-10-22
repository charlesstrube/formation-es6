test('arr18', () => {
    try {
        console.log(myFunction())
    } catch (e) {
        console.log(e.message)
    }

    try {
        console.log(myAnonymousFunction())
    } catch (e) {
        console.log(e.message)
    }

    try {
        console.log(myArrowFunction())
    } catch (e) {
        console.log(e.message)
    }

    function myFunction () {
        return 'coucou'
    }

    const myAnonymousFunction = function () {
        return 'coucou'
    }

    const myArrowFunction = () => 'coucou'

});