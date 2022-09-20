const functions = require('./functions')

test('Add 2 + 2 to not equal 4', () => {
    expect(functions.add(2,2)).not.toBe(5);
});