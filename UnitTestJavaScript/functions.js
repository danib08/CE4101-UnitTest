const axios = require('axios');

/***
 * Functions that will be tested
 */
const functions = {
    add: (num1,num2) => num1 + num2,

    fetchUser: () => 
    axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error'),

    execFirst: () => console.log('Executing in First Place...'),
    execLast: () => console.log('Executing in Last Place...'),
}
    

module.exports = functions;