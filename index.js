// 1.
// Get a reference to the section element with class "list"
const listSection = document.querySelector('.list');

// Create a new p element and set the inner text of the new p element
const newParagraph = document.createElement('p');
newParagraph.innerText = 'Travel to Japan and try authentic sushi';

// Append the new p element to the section element
listSection.appendChild(newParagraph);

// 2.
// Get a reference to the last existing p element
const lastParagraph = document.querySelector('.list p:last-child');

// Create a new p element and set the inner text of the new p element
const anotherParagraph = document.createElement('p');
anotherParagraph.innerText = 'Go skydiving over the Great Barrier Reef';

// Insert the new p element after the last existing p element
lastParagraph.insertAdjacentElement('afterend', anotherParagraph);

// 3.
// Get the inner HTML of the section element and log it to the console
const innerHTML = listSection.innerHTML;
console.log(innerHTML);

// 4. 
const newListItem = "<p>Learn to play the guitar and perform in front of a live audience</p>";

// 5.
// Get the current inner HTML of the list
const currentInnerHTML = listSection.innerHTML;
// Set the new inner HTML by concatenating the current inner HTML with the new list item
// listSection.innerHTML = currentInnerHTML + newListItem;

// 6.
// Use the insertAdjacentHTML method to add the new item to the beginning of the list
listSection.insertAdjacentHTML('afterbegin', newListItem);

// 7.
// Create an array of new list item strings and use a loop to add the new items to the end of the list
const newItems = [
  "<p>Start a journaling practice</p>",
  "<p>Take a photography class</p>",
  "<p>Learn to cook a new cuisine</p>"
];

for (const item of newItems) {
  listSection.insertAdjacentHTML('beforeend', item);
}

// 8.
console.log(`I have ${listSection.children.length} items in my bucket list.`);

// 9.
// Get a reference to the h2 element at the top of the HTML document and change it to have the name "Sunny"
const header = document.querySelector('h2');
header.textContent = "Sunny's Bucket List";

// 10.
// Create a new list item element
const newItem = document.createElement('p');
newItem.innerHTML = "<p>Learn to play the guitar</p>";

// Get a reference to the first child element (the first list item) and replace it with the new item.
const firstItem = listSection.children[0];
listSection.replaceChild(newItem, firstItem);

// 11.
// Create a new list item element
const anotherItem = document.createElement('p');
anotherItem.innerHTML = "<p>Learn to cook a new recipe</p>";

// Get a reference to the third child element (the third list item) and replace it with the new item
const thirdItem = listSection.children[2];
listSection.replaceChild(anotherItem, thirdItem);

// 12.
// Get a reference to the last child element (the last list item) and remove it
const lastItem = listSection.lastChild;
listSection.removeChild(lastItem);