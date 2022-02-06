
/* YouTube - Traversy Media - DOM Crash Course */

/*--------------------PART 1 ------------------------------------*/
/*
At the Root level is the Document object:
    - it has properties that can be easily accessed
Nodes - refers to any type of object in the DOM heirarchy
      - .nodeType property on any node object gives its type 
            -index of type of node in MDN table
*/
console.log("Document node type: ",document.nodeType)
console.dir(document); //all the properties of document object
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
// console.log(document.all); //list of all the elements
// document.all[10].textContent = "hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

/* SELECTORS:
    1. by ID
    2. by classname
    3. by tag
*/

//GET ELEMENT BY ID - returns HTML Collection
console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
console.log("Header Title: ",headerTitle.textContent);
headerTitle.textContent = "Fancy List Itemss";
console.log(headerTitle.innerHTML);
headerTitle.innerHTML = '<h3>Fancy List Items</h3>'
header.style.borderBottom = "solid 3px #000" 

//GET ELEMENT BY CLASSNAME - returns HTML Collection
let items = document.getElementsByClassName("list-group-item");
console.log("List group items",items);
console.log(items[1]);
items[1].textContent = "HELLO 2";
items[1].style.fontWeight = "bold";

for (let i=0; i<items.length; i++){
    items[i].style.backgroundColor = "#f4f4f4";
}

//GET ELEMENT BY TAGNAME - returns HTML Collection
let li = document.getElementsByTagName("li");
console.log("Tag group items",li);
console.log(li[1]);
li[1].textContent = "HELLO 2";
li[1].style.fontWeight = "bold";

for (let i=0; i<li.length; i++){
    li[i].style.backgroundColor = "#f4f4f4";
}

/*QuerySelector:    
    - like jQuery
    - use it only for one item
    - use query selector all for more than one item
    - grabs the first one from the HTML Collection
    - can use any CSS selector
*/

let header2 = document.querySelector("#main-header");
header2.style.borderBottom = "solid 10px #ccc";

let input = document.querySelector("input");
input.value = "HELLO WORLDY"

let submit = document.querySelector("input[type='submit']")
submit.value = "SEND"

let item2 = document.querySelector(".list-group-item");
item2.style.color = "red";

let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

let nthItem = document.querySelector(".list-group-item:nth-child(2)");
nthItem.style.color = "orange";

/*Query Selector ALL:
    -grabs more than one i.e. NODE LIST
    -accepts CSS queries
 */

let titles = document.querySelectorAll(".title");
console.log("TITLES",titles)
titles[0].textContent = "Add Fancy Items";

let odd = document.querySelectorAll("li:nth-child(odd)");

for (let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = "white";
}

/*--------------------PART 2 ------------------------------------*/

/* 
Traversing the DOM:
    - parent nodes, child nodes and sibling
*/
let item_list = document.querySelector("#items") //the # refers to id
console.log("Parent Node:",item_list.parentNode) //parentNode property
item_list.parentNode.style.backgroundColor = "#f4f4f4";
console.log(item_list.parentElement);

console.log("child: ",item_list.childNodes) //by node
console.log("children: ",item_list.children) //by element
console.log("first child: ",item_list.firstChild) //first node obj
console.log("first child: ",item_list.firstElementChild) //first HTMl element

console.log("next sibling",item_list.nextSibling)
console.log("next sibling",item_list.nextElementSibling)
console.log("previous sibling",item_list.previousSibling)
console.log("previous sibling",item_list.previousElementSibling)

/*
Creating DOM Elements:
    -createElement
*/
let newDiv = document.createElement("div"); //create
newDiv.className = "hello"; //add class
newDiv.id = "hello1"; // add id
newDiv.setAttribute("title","Hello Div"); //add attribute
let newDivText = document.createTextNode("HELLO MY FRIEND") //create text node
newDivText.fontWeight = "bold";
newDiv.appendChild(newDivText) // put text node inside div
newDiv.style.fontSize = "10px";
console.log("New Div:",newDiv)

//add element to the DOM
let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");
container.insertBefore(newDiv, h1);

/*--------------------PART 3 ------------------------------------*/
/*
Event Listeners:
    -make it interactive
*/

//create the listener
let button  = document.getElementById("button");
button.addEventListener("click",buttonClick);

//create the event handler
let itemNumber = 5;
function buttonClick(e){
    let newItem = document.createElement("li");
    let newText = document.createTextNode("New Item " + itemNumber);
    itemNumber += 1;
    newItem.setAttribute("class","list-group-item");
    newItem.appendChild(newText);
    let list_group = document.getElementsByClassName("list-group")[0];
    list_group.appendChild(newItem)
}

/* Other events:
    - dblclick
    - mousedown
    - mouseup
    - mouseenter
    - mouseleave
    - 
*/

let box = document.getElementById("box");
box.addEventListener("mouseenter",boxEnter);
box.addEventListener("mouseleave",boxLeave);
let boxColor = box.style.backgroundColor;
console.log("Box Color: ",boxColor)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function boxEnter(event){
    console.log(event.type);
    box.style.backgroundColor = getRandomColor();
}

function boxLeave(event){
    console.log(event.type);
    box.style.backgroundColor = boxColor;
}

let body = document.body
body.addEventListener("keydown",keyPress)

function keyPress(event){
    console.log(String.fromCharCode(event.keyCode))
}