/*
    Screen Outputs
    1. window
        - alert => stops the below code lines from running
        so it's not used nowadays.
    2. document
    3. console
*/

// window.alert("This is an alert");
document.write("<h1>Hello from JS file</h1>");

/*
    Console Methods:
    1. log
    2. error
    3. table
*/

console.log("Hello console");
console.error("This is an error");
console.table(['Ahmed', 'Mohammed', 'Zeyad']);

/*
    DataTypes:
    1. String
    2. Number
    3. Array => object
    4. Object
    5. Boolean 
    6. Undefined
    7. null => object
*/

console.log( typeof "Zeyad Waleed" );
console.log( typeof 55.5 );
console.log( typeof [1, 2, 3] );
console.log( typeof { name: 'Zeyad', age: 'Waleed', country: 'Egypt'} );
console.log( typeof true );
console.log( typeof undefined );
console.log( typeof null );

/*
    Variables:
    1. Var => Not recommended to use
    2. let
    3. const
*/

/*
    String Syntax & Character Escape Sequences
    1. \ => Escape + Line Continue
    2. \n => New Line
*/

console.log("Zeyad Waleed 'KING'");
console.log('Zeyad Waleed "KING"');
console.log("Zeyad Waleed \"KING\"");
console.log("Test \\");
console.log("Line1\nLine2\nLine3");

/* 
    Concatenation ( + )
*/

let a = "Zeyad";
let b = "Waleed";
console.log( a, b );
console.log( a + " " + b );

/*
    Template Literals ( Template Strings ) 
    I love this :)
*/

console.log(`${a} ${b}`);
console.log(`${a} 
${b}`);

/* 
    Arithmetic Operations
*/

console.log( 10 + 20 );
console.log("Zeyad" + 5);

console.log( 10 - 20 );
console.log( 10 - 'Zeyad' ); //NaN
console.log( typeof NaN ); // Ok, this is weird!

console.log( 10 * -20 );

console.log( 20 / 5 );
console.log( 20 / 3 );

console.log(`2 * 2 * 2 * 2 = ${2 ** 4}`);

console.log( 10 % 3 );

/*
    Unary plus ( + ) [ Returns Number If Its Not Number ]
    Unary Negation ( - ) [ Returns Number If its Not Number + Negates It ]

    How to Convert a String into Number!
*/

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xFF);
console.log(+null);
console.log(+true);
console.log(+false);

console.log("");

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xFF);
console.log(-null);
console.log(-true);
console.log(-false);

// Other way to convert a String to a number ( Using Constructor )
console.log(Number("555"));

/*
    Type Coercion ( Type Casting )
*/

console.log("10" + 20);
console.log(+"10" + 20);

console.log("10" - 20);
console.log("" - 2);

console.log(false - true);

/* 
    Assignment Operators
*/

let aa = 100;
aa += 200;
aa -= 200;
aa /= 2;
aa *= 90;
aa %= 7;
console.log(aa);

/*
    Number:
    - Syntactic Suger "_"
*/

console.log(1000000);
console.log(1e6);
console.log(1_000_000);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

/*
    Number Methods:
    1. toString()
    2. toFixed()
    3. parseInt()
    4. parseFloat()
    5. Number.isInteger()
    6. Number.isNaN()
*/

const x = 100;
console.log((x).toString());
console.log((20 / 3).toFixed(2));

console.log(parseInt("100.77"));
console.log(parseFloat("120.44"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.55));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Zeyad"));
console.log(Number.isNaN("Zeyad" / 20));

/*
    Math Object:
    1. round()
    2. ceil()
    3. floor()
    4. min()
    5. max()
    6. pow()
    7. random() => Generates a random number
    8. trunc() => returns the integer part of the number
*/

console.log(Math.min(100, 200, 300, 500, 1, 300, 600));
console.log(Math.max(100, 200, 300, 500, 1, 300, 600));

console.log(Math.pow(2, 4));

console.log(Math.random());

console.log(Math.trunc(66.666666));

/*
    String Methods:
    1. Access with Index
    2. Access with CharAt()
    3. length
    4. trim() => to get ride of useless spaces in the string
    5. toUpperCase()
    6. toLowerCase()
    7. Chain Methods
*/

const name1 = "Ahmed Mohsen";

console.log(name1.trim());
console.log(name1.length);

console.log(name1[1]);
console.log(name1.charAt(1));

console.log(name1.trim().charAt(1).toUpperCase());

/*
    String Methods:
    1. indexOf( value, start position [opt] 0 )
    2. lastIndexOf( value, start position [opt] length )
    3. slice( start, end [opt] doen't include end )
    4. repeat( times )
    5. split( separator [opt], limit [opt] )
*/

const name2 = "Elzero Web School";

console.log(name2.indexOf("Web"));
console.log(name2.lastIndexOf("Web"));

console.log(name2.slice(2, 6));
console.log(name2.slice(-6));

console.log(name2.repeat(4));

console.log(name2.split(" "));
console.log(name2.split("", 6));

const name3 = "Elzero, Web, School"
console.log(name3.split(", "));

/*
    String Methods:
    1. substring( start, end [opt] not including the end )
    2. substr( start, characters to Extract )
    3. includes( value, start position [opt] 0 )
    4. startsWith( value, start position [opt] 0 )
    5. endsWith( value, start position [opt] 0 )
*/

console.log(name2.substring(2, 6));

console.log(name2.substr(0, 6));
console.log(name2.substr(-5, 2));

console.log(name2.includes("Web"));
console.log(name2.includes("Zeyad"));

console.log(name2.startsWith("E"));
console.log(name2.endsWith('School'));

// Conditions ( you can find it in the crash course! )

/*
    Logical OR ||
    - Null + Undefined + Any falsy value

    Nullish Coalescing Operator ??
    - Null + Undefined
*/

let p = null;
console.log(`The price is ${p || 200}`);
console.log(`The price is ${p ?? 200}`);

p = 0;
console.log(`The price is ${p || 200}`);
console.log(`The price is ${p ?? 200}`);

/*
    Arrays:
    You can change any element of the array even if it
    was initialized as const!
*/

const myFriends = ['Ahmed', 'Mohammed', 'Zeyad', ['Sayed', 'Mohsen']];

console.log(myFriends[1][2]);
console.log(myFriends[3][1][5]);

console.log(Array.isArray(myFriends));

/*
    Array Methods:
    1. length
*/

console.log(myFriends.length);
myFriends[3] = 'Gamal';
myFriends[6] = 'Gamal';

console.log(myFriends);
console.log(myFriends.length);

myFriends.length = 4;
console.log(myFriends);

/*
    Array Methods: [Adding and Removing]
    1. unshift("", "") => Add Element to the first
    2. push("", "") => Add Element to the end
    3. shift() => Remove first Element from the array
        - It returns the element also
    4. pop() => Remove last element from the array
    5. indexOf
    6. lastIndexOf
    7. includes
    8. sort
    9. reverse
*/

console.log(myFriends);

myFriends.unshift("Osama", "Zaki");
console.log(myFriends);

myFriends.push("Hamdy", "Fathy");
console.log(myFriends);

const f = myFriends.shift();
console.log(myFriends);
console.log(`First name was ${f}`);

const l = myFriends.pop();
console.log(myFriends);
console.log(`Last name was ${l}`);

console.log(myFriends.indexOf("Zeyad"));
console.log(myFriends.indexOf("Zeyad", 2));

console.log(myFriends.lastIndexOf("Zeyad"));
console.log(myFriends.includes("Zaki"));

console.log(myFriends);
console.log(myFriends.sort());
console.log(myFriends.reverse());

console.log(myFriends.sort().reverse()); // You can use chaining also!

/*
    Array Methods:
    1. slice( start [opt], end [opt] Not Including End )
        - slice() => All array
    2. splice( start [Mand], Number of elements to delete [opt] [0 No Remove], The elements to add [opt] )
*/

console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));

console.log(myFriends);
myFriends.splice(0, 1, "Samma", "Menna");
console.log(myFriends);

/*
    Array Methods:
    1. concat( array, array ) => returns new array
    2. join(Separator) => returns a String
*/

const arr1 = [1, 2];
const arr2 = [10, 21];

console.log(myFriends);
const afterConcat = myFriends.concat(arr1, arr2, "sherif");
console.log(afterConcat);

console.log(myFriends.join(", "));

/* Array Challenge */
let zero = 0;
let counter = 3;
const my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// 1
my.length = 4;
my.reverse();
console.log(my);

// 2
console.log(my.slice(++zero, counter));

// Loops
// Functions

function sayHello( userName, age = 'Unknown')
{
    return `Hello ${userName} your age is ${age}`
}
console.log(sayHello('Zeyad', 19));
console.log(sayHello('Zeyad'));

function generateYears( start, end, exlude )
{
    for( let i = start; i <= end; i++ )
    {
        if( i != exlude ) console.log(`${i}`);
    }
}
generateYears(2003, 2023, 2020);


/*
    What if you don't know the number of parameters?
    You use the Rest parameter
    - Array element
    - Only one allowed
    - Must be last parameter
*/

function addNums( ...numbers )
{
    let sum = 0;
    for( let i = 0; i < numbers.length; i++ )
    {
        sum += numbers[i];
    }
    return sum;
}
console.log(addNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function showInfo( userName = 'Unknown', age = 'Unknown', rate = 0, showSkills = true, ... skills )
// {
//     document.write('<div>');
//     document.write(`<h2>Welcome, ${userName}</h2>`);
//     document.write(`<p>Age: ${age}</p>`);
//     document.write(`<p>Rate: $${rate}</p>`);
//     if( showInfo )
//     {
//         document.write(`<p>${skills.join(" ")}</p>`)
//     }
//     document.write('</div>');
// }

// showInfo('Zeyad', 19, 20, 'yes', 'Gym', 'Swimming', 'Writing');

/*
    Anonymous function => function without a name
*/

let calculator = function(num1, num2)
{
    return num1 + num2;
}

console.log(calculator(1, 2));

// Example: why using anonymous function

// document.getElementById("btn").onclick = function ()
// {
//     console.log("FUCK ISRAEL");
// }

// SetTimeout() is an example of anonymous function!

// setTimeout( function (){
//     console.log("Surpise!!!!!!!");
// }, 2000);

/*
    Arrow function
        - if no parameter
        - if parameter

    I will write the sentax of the reqular function
    and under it the arrow function
*/

// const print = function()
// {
//     return 10;
// }

// const print = () => 10;

// const print = function( num )
// {
//     return num;
// }

// const print = ( num ) => num;

// const print = function( num1, num2 )
// {
//     return num1 + num2;
// }

// const print = (num1, num2) => num1 + num2;

/*
    Scope:
    1. Global
    2. Local
*/

/*
    Higher Order Functions:
        - Is a function that accepts functions as parameters and / or returns a function.

    Map:
        - Method that returns a new array
    
    let newArray = oldArray.map( function(Element, Index, Array){ function operations }, thisArg )
        - Element => The current element being processed in the array
        - Index => The index of the current element being processed in the array
        - Array => The current array
*/

let myNums = [1, 2, 3, 4, 5];

/*
    If I want to create a new array by multipling this array by 2
    2 ways:
    1. Loop
    2. map
*/

// 1

let newNums = [];
for( let i = 0; i < myNums.length; i++ )
{
    newNums.push( myNums[i] * 2 );
}
console.log(newNums);

// 2
// let addSelf = myNums.map( function( element, index, array ){
//     return element * 2;
// });
// console.log(addSelf);

// 2 with array function 
let addSelf = myNums.map((element, index, array) => element * 2);
console.log(addSelf);

/*
    Map Practice:
    - Swap Cases => UpperCase to LowerCase and the opposite
    - Inverted Numbers => If negative then make it positive and the opposite
    - Ignore numbers
*/

/*
    Firstly, You should know 2 things:
    1. You should use the split function to split the element of the string so you could deal with them
    2. You should use the join method to return them as a string not an array
*/

let swappingCases = "elZERo";

let ansSwap = swappingCases.split("").map( function(el){
    return ( el === el.toUpperCase() )? el.toLowerCase() : el.toUpperCase();
}).join("");

console.log(ansSwap);

let invertedNumbers = [1, -10, -20, 14, 30, -30];

let ansInverted = invertedNumbers.map(( el ) => el * -1 );

console.log(ansInverted);

let IngoreNumbers = 'Elz392Er92o';

let andIgnore = IngoreNumbers.split("").map((el) => isNaN(parseInt(el))? el : "" ).join("");

console.log(andIgnore);

/*
    Filter:
        - Method that creates a new array
    
    let newArrar = oldArray.filter( function( el, ind, arr ){ function operations }, thisArg )
*/

let friends = ['Ahmed', 'Mohammed', 'Amgad', 'Zeyad', 'Waleed'];

let filterdFriends = friends.filter((el) => el.startsWith('A'));

console.log( filterdFriends );

/*
    Filter practice:
*/

// filter words more than 4 characters

let sen = 'I love foood code too playing much';

let ansSen = sen.split(" ").filter((el) => el.length <= 4).join(" ");

console.log( ansSen );

// Filter strings + multiply byself
let mix = 'A13BS2ZX';

let ansMix = mix.split("").filter((el) => !isNaN(parseInt(el)))
.map((el) => el * el).join("");

console.log(ansMix);

/*
    Reduce
        - Returns single element!

    Reduce syntax( function( Accumulator, Current val, Current index, array ){}, initialValue )

    if no initial value?
    Accumulator value = array[0], current val = array[1];

    if initial value?
    Accumulator value = initial value, current val = array[0];
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let add = nums.reduce(function(acc, cur, ind, arr){
    return cur + acc;
});

console.log(add);

let add2 = nums.reduce( function( acc, cur, ind, arr ){
    return cur + acc;
}, 5);

console.log( add2 );

/*
    Reduce practice:
    1. longest word
    2. Removing Characters with filter and concating the element using reduce ( no join! )
*/

let words = ['Ahmed', 'School', 'Environment', 'ILovePalistine'];

let longestWord = words.reduce((acc, el) => acc.length > el.length ? acc : el);

console.log( longestWord );

let removeCh = ['E', '@', '@', 'L', 'Z', '@', 'E', '@', 'R', 'O', '@', '@'];

let ansRem = removeCh.filter((el) => el != '@').reduce((acc, cur) => acc + cur);

console.log(ansRem);

/*
    Note: When to use?
    1. Map => If you want to update some Or all element of the array
    2. Filter => If you want to do some filteration on the array
    3. Reduce => If you want to return one specific modified element
    4. forEach => If you want to loop on the array without changing elements!
*/

/*
    forEach( function(Element, Index, Array){}, thisArg )
        - Doesn't return anything [ Undefined ]
        - Break will not break the loop
*/

/*
    Objects
    - We can access an object by two ways!
    1. Dot Notation (.) => If valid property name only!
    2. Bracket Notation ([]) => If valid or invalid or Dynamic property name!
*/

const myVar = "country";

let user = 
{
    // Properties
    theName: 'Zeyad',
    theAge: 19,
    100: 'Invalid Property Name',
    country: 'Egypt',

    // Methods
    sayHello: () => 'Hello',
    "say-i": () => 'Invalid Method Name!'
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

console.log(user[100]);
console.log(user["say-i"]());

console.log(user[myVar]);
console.log();

/*
    Nested Objects:

*/

const user2 = 
{
    name: "Salwa",
    age: "19",
    skills: ["HTML", "JS", "C++", "C", "Python"],
    available: true,
    address: 
    {
        KSA: "Riyad",
        Egypt:
        {
            add1: "Cairo",
            add2: "Giza"
        }
    },

    checkAv: function()
    {
        if( this.available ) return `Free`;
        return `Not Free`;
    }
};

console.log(user2.name);
console.log(user2.age);
console.log(user2.skills.join(", "));

console.log(user2.address.KSA);
console.log(user2.address.Egypt.add2);
console.log(user2["address"]["Egypt"]["add2"]);

console.log(user2.checkAv());

// You can Update or create new properties from outside the object

user2.happy = false;
user2.isHappy = function()
{
    if( user2. happy ) return `Happy`;
    return `Not Happy`;
}
console.log(user2.isHappy());

/*
    You can create a new object in another way
    by using the Object constructor => new Object();
*/

const user3 = new Object({
    // Add properties!
});

// this keyword => stands for the owner!

// How to create a copy object? ( object with the same prototype of other object! )

// This is a new way to create an object!
const user4 = Object.create({});

// And this is how to copy an object!
const copyUser4 = Object.create(user4);

/*
    const newObject = Object.assign( targetObject, Object1, Object2, ...as you like );
    To assign an object or more to another object in a new object!
*/

const user10 = 
{
    prop1: 1,
    prop2: 2, 
    prop3: 3
}

const targetUser = 
{
    prop4: 4,
    prop5: 5, 
    prop6: 6
}

const newUser = Object.assign(targetUser, user10, { prop7: 7, prop8: 8}, {});
console.log( newUser );

/*
    Document Object Model ( DOM )
    1. Find Element By Id
    2. Find Element By Tag Name
        - we can use indexing to access a specific tag 
    3. Find Element By Class Name
    4. Find Element By CSS Selector (querySelector ( Recommended to use ))
        - If ID => "#id"
        - If Class => ".class"
        - If tag => "tag"
    5. Find Elements By Collection
        - Title
        - Body
        - forms
        - links
        - images
*/

const myIdElement = document.getElementById("my-form");
console.log(myIdElement);

const myTagElements = document.getElementsByTagName("li");
console.log(myTagElements);
console.log(myTagElements[1]);

const myClassElement = document.getElementsByClassName("items");
console.log(myClassElement);

let myQueryElement = document.querySelector('h1');
console.log(myQueryElement);

myQueryElement = document.querySelector('.items');
console.log(myQueryElement);

myQueryElement = document.querySelector('#my-form');
console.log(myQueryElement);


myQueryElement = document.querySelector('li');
console.log(myQueryElement);

myQueryElement = document.querySelectorAll('li');
console.log(myQueryElement);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

/*
    1. InnerHTML => Understands the HTML and Text contents
    2. TextContent => Understands the Text content only!
    3. Change Attributes directly
    4. Change Attributes with Methods
        - getAttribute( attribute )
        - setAttribute( attribute, value )
*/

let myElement = document.querySelectorAll('h1');

console.log(myElement[1].innerHTML);
console.log(myElement[1].textContent);

// Compare between the two lines by adding comments!
myElement[1].textContent = "Add <span>User</span>";
myElement[1].innerHTML = "Add <span>User</span>";

document.images[0].src = "_d399deee-e851-4155-9723-e6fc33f4b78f.jpeg";
document.images[0].alt = "Alternate";
document.images[0].title = "Free Palestine";

// Changing an attribute directly
document.links[0].href = "https://translate.google.com/";
document.links[0].target = "_blank";
document.links[0].textContent = "Google Translate";

// Changing an attribute with Methods
let myLink = document.querySelector(".link");

// getAttribute
console.log(myLink.getAttribute("Class"));
console.log(myLink.getAttribute("href"));

// setAttribute
myLink.setAttribute("href", "https://www.bing.com/images/create");
myLink.setAttribute("target", "_blank");

// I think you can't set the name of the link by the method,
// you can do it directly :(

document.links[0].textContent = "Image Generator";

/*
    DOM [Check Attributes]
    1. Element.attributes => showes you all attributes in this element
    2. Element.hasAttribute
    3. Element.hasAttributes => Does this element has anyAttributes?
    4. Element.removeAttribute
*/

console.log(document.links[0].attributes);

// The bellow element has an empty id attribute
myElement = document.querySelector('ul');

if( myElement.hasAttribute("id") )
{
    if( myElement.getAttribute('id') === "" )
        myElement.removeAttribute('id');
    else
        myElement.setAttribute('id', "users");
}
else
{
    console.log(`Not Found`);
}
console.log(myElement); 
// This element in the HTML code has an id but when we did that we removed the id attribute!

console.log(myElement.hasAttributes());

/*
    1. CreateElement
    2. CreateComment
    3. CreateTextNode
    4. CreateAttribute
    5. appendChild => add to the end, Order does matter!
*/

myElement = document.createElement("div");
let myText = document.createTextNode("Hi Zeyad :)");
let myComment2 = document.createComment("This is a div!");

// First way to create an attribute for a created element
let newAttribute = document.createAttribute("data_custom");
myElement.setAttributeNode(newAttribute);

// Second way to create an attribute for a created element
myElement.setAttribute("data_custom2", 'att2');

// Append Text to Element
// myElement.appendChild(myText);

// Append Comment to Element
// myElement.appendChild(myComment2);

// I want to append the element to the body!
// document.body.appendChild(myElement);
console.log(myElement);

// Practice!

let div1 = document.createElement("div");
div1.className = "product";

let h3 = document.createElement("h3");
let h3Text = document.createTextNode("Product Title");

let pa = document.createElement("p");
let pText = document.createTextNode("Description");

// h3.appendChild(h3Text);
// pa.appendChild(pText);
// div1.appendChild(h3);
// div1.appendChild(pa);

// document.body.appendChild(div1);

/*
    Dealing with childrens:
    1. Children => Children
    2. ChildNodes => Children and GrandChildren
    3. firstChild
    4. lastChild
    5. firstElementChild
    6. lastElementChild
*/

let element1 = document.querySelector("form");
console.log(element1.children);
console.log(element1.children[1]);

console.log(element1.childNodes);
console.log(element1.childNodes[1]);

console.log(element1.firstChild);
console.log(element1.lastChild);

console.log(element1.firstElementChild);
console.log(element1.lastElementChild);

/*
    - Use Events on HTML
    - Use Events on JS
    1. onclick
    2. oncontextmenu => When right clicked!
    3. onmouseenter => When the mouse just touch the element!
    4. onmouseleave => When the mouse leave the element
    
    - Window events
    5. onload => After finishing loading the page do event
    6. onscroll => When scrolling do event
    7. onresize 

    8. onfocus
    9. onblur
    10. onsubmit
*/

let btn2 = document.querySelector("#btn2");
btn2.onclick = () => console.log("Fuck Israel");

window.onscroll = () => console.log("Scrolling");

/*
    - Validate Form practice
    - preventDefault()

    - Events Simulation
    1. click
    2. focus
    3. blur
*/

let inputName = document.querySelector('#name');
let inputEmail = document.querySelector('#email');
let inputSubmit = document.querySelector('.btn');

// After loading page, Name field will be focused by default!
window.onload = () => inputName.focus();

inputSubmit.onclick = function( event )
{
    let f1 = false, f2 = false;

    if( inputName.value !== "" && inputName.value.length > 2 && inputName.value.length <= 15 )
    {
        f1 = true;
    }

    if( inputEmail.value !== "" && inputEmail.value.length > 7 && inputEmail.value.length <= 30 )
    {
        f2 = true;
    }

    if( !f1 || !f2 ){ event.preventDefault(); }
}

/*
    ClassList
    1. length
    2. contains
    3. item ( index )
    4. add
    5. remove
    6. toggle => If available --> Remove, if not available --> add
*/

let myDiv = document.getElementById("my-div");
console.log(myDiv.classList);
console.log(myDiv.classList[1]);

console.log(myDiv.classList.contains("one"));
console.log(myDiv.classList.contains("four"));

console.log(myDiv.classList.item("1"));

myDiv.classList.add("four");
console.log(myDiv.classList.contains("four"));

myDiv.classList.remove("four");
console.log(myDiv.classList.contains("four"));

myDiv.classList.toggle("four");
console.log(myDiv.classList.contains("four"));

myDiv.classList.toggle("four");
console.log(myDiv.classList.contains("four"));

// #96, I don't know CSS :(

/*
    [ Deal with elements ]
    1. before => Add before the element ( Outside ) [Element || String]
    2. after => Add after the element ( Outside ) [Element || String]
    3. append => Add at the end of the element ( Inside ) [Element || String]
    4. prepend => Add at the begining of the element ( Inside ) [Element || String]
    5. remove => Remove the element!
*/

let element2 = document.getElementById('my-div');
let createdP = document.createElement('p');

element2.append(createdP);
// element2.remove();

/*
    1. nextSibling
    2. nextElementSibling
    3. previousSibling
    4. previousElementSibling
    5. parentElement
*/

let myDiv2 = document.getElementById("my-div");

console.log(myDiv2.nextSibling);
console.log(myDiv2.nextElementSibling);

console.log(myDiv2.previousSibling);
console.log(myDiv2.previousElementSibling);

console.log(myDiv2.parentElement);

/*
    DOM [Cloning]
    cloneNode( Boolean )
        - false ( default ) => Clone with out the attribute and text messages
        - true => Clone with everything
*/

let myDiv3 = document.getElementById("my-div").cloneNode(true);
myDiv3.id = `${myDiv3.id}-clone`;
console.log(myDiv3);

/*
    DOM [Add Event Listner]
    1. addEventListner
        - Advantage: You can add multiple events to the choosing element!
    2. Use Without On
    3. Attach Multiple Events
    4. Error Test

    Search
    1. Capture & Bubbling JavaScript
    2. removeEventListner
*/

let myH = document.querySelector("h1");

// myH.addEventListener("click", function(){
//     console.log("Welcome");
// });

// myH.addEventListener("click", function(){
//     console.log("This is a JS tutorial");
// });

myH.addEventListener("click", function(){
    let newH = myH.cloneNode(true);
    newH.className = "clone";
    document.body.appendChild(newH);
});

document.addEventListener("click", function( e )
{
    if( e.target.className === "clone" )
    {
        console.log("I am Cloned");
    }
});