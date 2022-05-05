const { add } = require("./tasks.js");

// document.body.innerHTML = ;

describe('Testing Add function', () => {
    test('Add a new Task to Todo list', () => {
        const arr = [];
        add(arr, 'Coding', false);
        expect(arr).toEqual([{
            index: 1,
            description: 'Coding',
            completed: false,
        }]);
    })
})