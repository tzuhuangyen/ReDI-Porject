let header = document.getElementById('header');
let paragraphs = document.getElementsByClassName('description');
let listItems = document.getElementsByTagName('li');
let firstItem = document.querySelector('#itemList li');
let allItems = document.querySelectorAll('#itemList li');

console.log(header); // <h1 id="header">Welcome to My Webpage</h1>
console.log(paragraphs); // HTMLCollection of <p class="description"> elements
console.log(listItems); // HTMLCollection of <li> elements
console.log(firstItem); // <li>Item 1</li>
console.log(allItems); // NodeList of <li> elements

// header.innerHTML = '<p>New Content</p>';
paragraphs[0].textContent = 'This is use textContent add an updated paragraph.';
firstItem.innerText = 'Updated Item 1';

// Creating a new element
let newItem = document.createElement('li');
newItem.textContent = 'New Item';

// Adding the new element to the list
let itemList = document.getElementById('itemList');
itemList.appendChild(newItem);

// Removing an element
// firstItem = itemList.firstElementChild;
// itemList.removeChild(firstItem);
// Adding an event listener
let button = document.getElementById('changeButton');
button.addEventListener('click', function () {
  header.textContent = 'Content Changed!';
  itemList.innerHTML += '<li>Another New Item</li>';
});
