// To search for anything about JS console google ( MDN console )

console.log('This is a line')
console.error('This is an error');
console.warn('This is a Warning');
console.table(['Ahmed', 'Mohammed', 'Zeyad', 'Menna'])

/*
    Variables: 
    1. var ( You do not want to use it anymore )
    2. let
    3. const ( constant ), you have to initialize it with a value!

    Always use const unless you know you will reassign your variable again
*/

let score = 10;
score = 20;
score++;
console.log(score);

const score2 = 10;
// score2 = 20; Error!

/*
    DataTypes:
    1. String
    2. Numbers
        - There isn't float or double datatype it's just a number!
    3. Boolean
    4. Null => Object
    5. Undefined
    6. Array => Object
*/

const name = 'John';
const age = 30;
const rating = 4.5;
const ok = true;
const x = null;
const y = undefined;
let z; // Initialy undefined!

console.log( typeof rating );
console.log( typeof z );
console.log( typeof [10,15,20,25]);

/*
    Concatenation:
    1. Old Way => Pain in the ass X(
    2. New Way ( Template String )
*/

console.log( 'My name is ' + name + ' and I am ' + age );
console.log(`My name is ${name} and I am ${age}`);

const info = `My name is ${name} and I am ${age}`;
console.log(info);

// String properties ( Doesn't have a parenthesis() ) and Methods

const s = 'Hello World';
const ss = 'v1, v2, v3, v4, v5';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
console.log(ss.split(', '));

/*
    - Arrays ( It can contain multiple datatypes! )

    Even if we are using const Variable, 
    we can reassign any element in the array or add a new elements to the array,
    but we can't reassign the whole array like this ( ArrayName = []; )
*/

const numbers = new Array(1, 2, 3, 4, 5); // By Using a constructor!
console.log(numbers);

const fruits = ['Apples', 'Oranges', 'Pears'];
console.log(fruits);

fruits[1] = 'grapes';
fruits[3] = 'Bananas'
console.log(fruits);

// fruits[5] = 'etc'; We don't want to push elements like that ( Could cause some problems ), so...

fruits.push('Mangos');           // push to the end
fruits.unshift('strawberries');  // push to the beginning
fruits.pop();                    // pops the last element
console.log(fruits);

console.log(Array.isArray('Pears'));      // To check if the element is in the array or not
console.log(fruits.indexOf('Bananas'));   // To get the index of the array

// fruits = ['bla', 'bla bla']; We can't reassign the array like this if it was initialized as a const!

const test = [1, true, 'AKA'];
console.log(test);

// Objects

const person =
{
    fistName: 'Zeyad',
    lastName: 'Waleed',
    age: 19,
    hobbies: ['Gym', 'Movies'],

    // you can write an object within another object!
    adress: 
    {
        street: '50 main st',
        City: 'Boston',
        state: 'LA'
    }
}
console.log(person);
console.log(person.fistName, person.hobbies[1] , person.adress.City);

// You can also add properties

person.email = 'blabla@gmail.com';
console.log(person.email);

// Array of Objects ( ex: Todo list )

const todos = 
[
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Study',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text);

/* 
    How to send the data to a server?
    you do it with JSON method!
    JSON.stringify(blabla) => To convert the data into JSON
*/

const todosJSON = JSON.stringify(todos);

console.log(todos);
console.log(todosJSON);

/*
    loops:
    1. for
    2. while
    3. for of 
    4. forEach
    5. map => returns an array
    6. filter => returns objects filtered as you like!
*/

for( let i = 0; i < 10; i++ )
{
    console.log(`for loop ${i}`);
}

let j = -1;
while( ++j < 10 ) console.log(`while loop ${j}`);

for( let i = 0; i < todos.length; i++ ) 
{
    console.log( todos[i].text );
}

for( let i of todos )
{
    console.log(i.text);
}

todos.forEach( function(i)
{
    console.log(i.id);
});

todos.forEach(i => {
    console.log(i.text);
});

// Returns what you want as a reqular array!
const todoText = todos.map( function(i)
{
    return i.text;
});
console.log(todoText);

const todoCompleted = todos.filter( function(i)
{
    return i.isCompleted === true;
});
console.log(todoCompleted);


// The bellow function returns text as an array, which isCompleted === true;

const todoCompletedText = todos.filter( function(i)
{
    return i.isCompleted === true;
}).map( function(i)
{
    return i.text;
});

console.log(todoCompletedText);

/*
    Conditions:
    1. if statement
        - ( == ) Doesn't care about datatypes
        - ( === ) Cares about datatypes
        - you can use &&, || ( Much better than nesting )
    2. ? statement
    3. swith statement
*/

const num = '10';

if( num == 10 )
{
    console.log( 'Num is Equal to 10' );
}
else
{
    console.log( "Num isn't equal to 10" )
}

if( num === 10 )
{
    console.log( 'Num is Equal to 10' );
}
else if( num === 11 )
{
    console.log( 'Num is Equal to 11' );
}
else
{
    console.log( "Num isn't equal to 10" )
}

const color = 'red';
switch(color)
{
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('I am not sure about the color X(');
        break;
}

/*
    Functions:

    function functionName( parameter1, parameter2 )
    {
        operations
    }

    or

    const functionName( parameter1, parameter2 ) => 
    {
        operations
    }

    or if only one operation 

    const functionName( parameter1, parameter2 ) => operation
*/

function addNums( num1, num2 )
{
    return num1 + num2;
}
console.log( addNums(1, 2) );

const addNums2 = ( num1, num2 ) => num1 + num2;
console.log( addNums2(1, 2) );

// OOP
// Constructor function

function Person( firstName, lastName, dop )
{
    this.firstName = firstName;
    this.lastName = lastName;

    // Date Object
    this.dop = new Date(dop);

    /*  We can set functions inside a constructor
        this isn't the best way, the best way is to use the prototype!
    */
    
    // this.getBirthYear = function()
    // {
    //     return this.dop.getFullYear();
    // };

    // this.getFullName = function()
    // {
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

Person.prototype.getBirthYear = function()
{
    return this.dop.getFullYear();
}

Person.prototype.getFullName = function()
{
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate Object
const p1 = new Person('Zeyad', 'Waleed', '11-12-2003');
const p2 = new Person('Mohammed', 'Zaki', '1-1-1999');

console.log(p2.firstName);
console.log(p1.dop); 

// And we can use Date object functions
console.log(p1.dop.getFullYear());
console.log(p1.getBirthYear());
console.log(p1.getFullName());


// Class: Makes things brettier and more organized only!

class Person2
{
    constructor( firstName, lastName, dop )
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dop = new Date(dop);
    }

    getBirthYear()
    {
        return this.dop.getFullYear();
    }
    
    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}

const pp1 = new Person2('Zeyad', 'Waleed', '12-11-2003');
console.log(`This is ${pp1.getFullName()} & I was born in ${pp1.getBirthYear()}`);


/*
    Document Object Model ( DOM )

    Single Element:
    1. getElementById
    2. querySelector => get other things than id ( classes, tags )
        - to get a class => ( .className )

    Mutliple Elements
    1. querySelectorAll => Use this ;) 
    2. getElementsByClassName
    3. getElementsByTagName
*/

console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

console.log(document.querySelector('input'));
// It's a Single Element selector, so it will return only the first input tag

console.log(document.querySelectorAll('input'));
console.log(document.querySelectorAll('.item'));

console.log(document.getElementsByClassName('item'));

// Manipulating ( changing ) things using DOM 

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Emad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
// btn.style.background = 'blue';

/*
    Adding Events:
    1. Event listener( theEvent, theFunction )
        - There is different Events you can google MDN documentation
*/

// btn.addEventListener('click', (e) => 
// {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'blue';
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    if( nameInput.value === '' || emailInput === '' )
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All fields';
        setTimeout(() => msg.remove(), 3000);
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`
        ));

        userList.appendChild(li);

        // Clearing Fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
