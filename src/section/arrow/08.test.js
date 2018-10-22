test('arr08', () => {
    const get = (object, property) => object[property]

    const passage = {
        id: 1
    }

    console.log(get(passage, 'id'))
});
