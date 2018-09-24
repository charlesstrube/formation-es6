


test('arr08', () => {
    const getId = (object, type) => object[type].id

    const passage = {
        bi: {
            id: 1
        },
        appel: {
            id: 3
        }
    }

    console.log(getId(passage, 'bi'))
});
