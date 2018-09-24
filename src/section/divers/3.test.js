test('div03', () => {
    function* fn () {
        yield 'blue';
        yield 'red';
        yield 'green';
    }

    const a = fn();
    console.log(a.next()); // Log 'blue'
    console.log(a.next()); // Log 'red'
    console.log(a.next()); // Log 'green'
})