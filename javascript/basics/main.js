/*data types:
    undefined, 
    null, 
    boolean, 
    string, 
    symbol, 
    number and 
    object
*/

//plead to the Gods of JavaScript
console.log(`Hello World!`);

//declare variable
let number;

//define or assign value 
number = 5;

//declare and define - initialize
let new_number = 10


//arithmetic operations

let a = 10;
let b = 10.000
let sum = a + 10;
let prod = a * 10;
let div = a / 5;
a++;

console.log(`
    sum: ${sum}, 
    prod:${prod}, 
    div:${div}, 
    shortcut:${a},
    decimal: ${typeof(b)},
    remainder: ${a%3}
`);

//strings
let s = "String literals"
let d = "double \"quote\"" //excape character
console.log(`
    string:${s},
    escape:${d},
    "'both'"
`)

//string concatention and length 
let first = "First "
let second = "Second "
let third = first += "third"
console.log(first+second, third, first.length)

//bracket notation
console.log(
    "bracket First letter:",first[0],
    "bracket Last letter:",first.length-1
)

//strings are immutable
//e.g first[0] = "K" will give error

//arrrays; pointers to arrays
let ar = ["okay", "this",first, second,20]
console.log(
    "array:",ar,
    "\n\t\t4th:",ar[3],
    "array of arrays",[[2,1],0],
);
console.log(
    "array changed:",ar,
    "inside array:",ar[3][0],
)

//array operations
ar.push("pushed")
console.log(
    "array push:",ar,
)
ar.pop() //remove final answer
console.log(
    "array pop:",ar,
)

ar.shift()// remove first
console.log(
    "array shift:",ar,
)

ar.unshift("unshifted") //add first
console.log(
    "array unshift:",ar,
)

/*
functions: 
    -syntax: function function_name(arg1,arg2) {
                do stuff
                return stuff or undefined
             }
    -scopes: Global and Local

*/
function print(arg) {
    console.log(arg);
}
print(print("print okay"));

function multFive(arg){
    return arg * 5;
}
let ans = multFive(5); //assign variable to func return
print(ans)

//if statements
let cond = "a";
if (cond == true){
    print("It is definitely True")
}else if(cond=="a"){
    print("middle case")
}
else{
    print("NO no it is false")
}

/*
operators:
    normal equality: == (tries to convert both value to the same type)
    strict equality: === 
    ineqaultiy: !=
    strict inequality: !==
    greater than: >
    less than: <
    logical AND: &&
    logical OR: || 
*/
if (3 === 3){
    print("true first")
}

if (3 === '3'){
    print("true second")
}else{
    print("false second")
}

/*
switch statements:
    - switch (args)
    - cases
    - break 
    - default option
    - identical options
*/
let val = 2;
switch(val){
    case 1://strict equality
        print("one how?");//next case evaluated even if cond does not meet
    case 2:
        print("two");
        break;
    case 3:
        print("three");
        break;
    default:
        print("this is default");
}

/*
Objects:
    -properties
    -key:value pair
    -{} curly braces
    -dot notation
    -brackets:
        - (MANDATORY when key has space)
        - variable
    -add new properties
    -delete 
    -hasOwnProperty
    -nested objects
 */
let cold = "cool";
let my_object = {
    "my":"object",
    "number":10,
    "cool": -17,
    "obj":{
        "inside_number":1010
    },
    "space is me":"my key has space",

};
print(my_object);
print(my_object.number);
print(my_object.obj.inside_number);
print(my_object["space is me"]);
print(my_object[cold]);
my_object.number = 1080
print(my_object.number)
my_object.new_stuff = "new stuff";
my_object.okay = "new stuff";
print(my_object);
print(my_object.hasOwnProperty("number"))
print(my_object.hasOwnProperty("numbe"))


/*
Loops:
    - While loop
    - For loop
    - Do While
*/
let i=0;
while (i < 5){
    print(`${i}`);
    i++;
}

for (let i=1;i<10;i+=2){
    print(`${i}`)
}

let my_arr = ["a","b",1,2,"c","d",14];
let num_arr = []
for (let i=0; i<my_arr.length;i++){
    if (typeof(my_arr[i])==="number"){
        num_arr.push(my_arr[i]);
    }
}
print(num_arr)

do {
    i = 0;
    print("oooo one")
}while (i!=0);

//generate random decimal number
print(Math.floor(Math.random()*100))

//parseInt function: takes (a string,base) and returns an Int
print(parseInt("123"))
print(parseInt("123asdf"))
print(parseInt("as123"))
print(parseInt("asdf"))
print(parseInt(100,2))

//ternary operator: condition ? statement-if-true : statement-if-false
let c = 90;
c < 13 ? print("okay") : print("not okay")

/*
var vs let vs const:
    - let won't let you declare a variable twice
    - "use strict"
    - scope: var - globally or locally(in a function)
             let - scope within the block scope
    - const won't let you change the variable
    - const declared array can be modified
*/

// prevent object mutation
const obj = {
    "okay":"okay"
}
obj.okay="OKAY"
print(obj)
Object.freeze(obj)
obj.okay = "ok" //won't change!
print(obj)

/*
Arrow function:
    - anonymous function >> arrow function
    - higher order functions: map,filter,reduce etc...
    - arrow func with one arg does not need parentheses
*/
const magic = (arg,arg2) => arg+ arg2 + " magic";
print(magic("lame","lame"))

const magic2 = arg => arg + " magic";
print(magic2("super"));

/*
- default params 
- rest operator - variable number of args
                - ...args
- spread operator
*/

//rest operator
function vary(...args){
    for (let i=0; i<(args.length);i++){
        print(args[i])
    }
}
vary(1,2,3,"variable","number","of","args")
//spread operator
let ar1 = [1,2,3];
let ar2;
ar2 = [...ar1]
ar1[0] = "changed"
print(ar2)

//Destructuring Assignment: Objects
let my_obj = {x:4,y:20,z:30};

let aa = my_obj.x; //old way
let bb = my_obj.y; //old way

print(`a:${aa}  b:${bb}`)
let { x : e, y: f} = my_obj;
print(`a:${e}  b:${f}`)

//Destructuring Assignment Nested Objects
let my_nested = {
    today: {temp:31}
}
let {today:{temp: t}} = my_nested
print(`nested get temp: ${t}`)

//Destructuring Assignment arrays
let [g,y,z,,last] = [8,9,20,11,"last"]
print(g)
print(last)

//Destructuring with Rest Operator to Reassign Array
let a_r = [1,2,3,4,5,6]
let [,,...new_ar] = a_r//remove the first two
print(new_ar) 

//Destructuring Objects that are passed as arguments

//Template literals: back ticks `` and ${}

//Concise object literal declarations using simple fields

//Declarative functions. An object can contain function

const bicycle = {
    gear: 2,
    setGear: function(newGear){
        'use strict';
        this.gear = newGear;
    }
};

const bicycle2 = {
    gear: 2,
    setGear(newGear){
        'use strict';
        this.gear = newGear;
    }
};
print(bicycle2.gear)
bicycle2.setGear(10000000)
print(bicycle2.gear)

//Class Syntax to define a Constructor Function
//getters and setters

class SpaceShuttle {
    constructor(targetPlanet){
        this._targetPlanet = targetPlanet;
    }
    get planet(){
        return this._targetPlanet;
    }

    set planet(newPlanet){
        this._targetPlanet = newPlanet
    }
}
let zeus = new SpaceShuttle("Jupiter")
print(zeus.targetPlanet)
print(zeus.planet)
zeus.planet= "Uranus"
print(zeus.planet)

//require, import1 and export
// import { capitalizeString } from "./helper"
// print(capitalizeString("hello world"))

//import everything using * 
// e.g. import * as object_name from "./helper";

//export default - fallback export 

//import a default export