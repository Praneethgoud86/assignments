// Get the elements we need from the DOM
const newItemInput = document.getElementById('newItemInput');
const addItemButton = document.getElementById('addItemButton');
const list = document.getElementById('list');

// Define an array to store our to-do items
let toDoList = [];

// Add an event listener to the "Add" button
addItemButton.addEventListener('click', () => {
  // Get the text of the new item from the input
  const newItemText = newItemInput.value;
  // Clear the input
  newItemInput.value = '';
  // Add the new item to the to-do list array
  toDoList.push(newItemText);
  // Update the list in the DOM
  updateList();
});

// Define a function to update the list in the DOM
function updateList() {
  // Clear the list in the DOM
  list.innerHTML = '';
  // Loop through the to-do list array and create a new list item for each item
  for (let i = 0; i < toDoList.length; i++) {
    const newItem = document.createElement('li');
    newItem.innerText = toDoList[i];
    list.appendChild(newItem);
  }
}
