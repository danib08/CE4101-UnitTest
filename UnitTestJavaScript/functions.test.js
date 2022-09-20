const { execFirst, execLast } = require('./functions');
const functions = require('./functions')


/**
 * Execute this function before all the tests
 */
beforeAll(() => execFirst());


/**
 * Execute this function after all the tests
 */
afterAll(() => execLast());


/***
 * Test add funtion
 * Using comparatives functions
 */
test('Add 2 + 2 to not equal 4', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

/***
 * Test fetchUser function
 * Using async functions
 */
test('Waiting for the user name to be Leanne Grahan', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');

});