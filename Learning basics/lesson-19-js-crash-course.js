let currentPlayer;
currentPlayer = "X";

console.log(`Na ťahu je: ${currentPlayer}`);

const gameActive = true;

console.log(gameActive);

const s = 'Hello world';

console.log(s.split(''))

const t = 'computer, technology, it, numbers';

console.log(t.split(', '));

const players = ['X', 'O']

console.log(players[0]);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
        
    {
        id: 3,
        text: 'Take out trash',
        isCompleted: false
    }
];

console.log(todos);

console.log(todos[1].text);

console.log(todos[2].isCompleted);

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.text);
}

for (let todo of todos) {
    console.log(todo.id);
}

// high-orders array methods: forEach, map, filter.

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);

//conditionals

const x = 10;
/* == vyjde nám vysledok 10 ak použijeme Number alebo '10' string, nerozlišuje,
 ak použijeme === tak to platí len pre nubmer, 
 .. ak by sme za x dosadili string tak nám nezobrazí nič
*/

if(x === 10) {
    console.log('x is 10');
} else {
    console.log('x is NOT 10');
}

const y = 15;
if(y === 10) {
    console.log('y is 10');
} else if (y > 10) {
    console.log('y is greater than 10');
} else {
    console.log('y is less than 10');
}

const z = 4;
const u = 11;

if(z > 5 || u > 10) {
    console.log('z is more than 5 or u is more than 10');
}

/* || znamená OR, && znamená AND, 
"?" znamená THEN, ":" znamená else - keď máme podmienku že ak je hodnota vačšia ako 10 tak bude farba červená, ale ak nebude taaak bude modrá Then-else 
*/

const a = 9;

const color = a > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//Functions (54. minúta)

// DOM - document object model (1:12 hod)

// eventListener - click (1:25 hod)




