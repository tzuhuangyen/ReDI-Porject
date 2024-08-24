// Selecting elements
let newItemInput = document.getElementById('newItemInput');
let addItemButton = document.getElementById('addItemButton');
let toDoList = document.getElementById('toDoList');

// Adding an event listener to the button
addItemButton.addEventListener('click', function () {
  let newItemText = newItemInput.value;
  if (newItemText !== '') {
    let newItem = document.createElement('li');
    newItem.textContent = newItemText;

    // Adding a remove button to each new item
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
      toDoList.removeChild(newItem);
    });
    newItem.appendChild(removeButton);

    toDoList.appendChild(newItem);
    newItemInput.value = ''; // Clear the input
  }
});

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  const userName = document.getElementById('name').value;
  userName.innerHTML = `Hello, ${name}!`;
  console.log((userName.innerHTML = `Hello, ${name}!`));
});

document
  .getElementById('loadDataButton')
  .addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        document.getElementById('dataOutput').innerHTML = `
        <h2>user ID:${data.userId}</h2>
        <h2>title:${data.title}</h2>
        <p>${data.body}</p>
      `;
      })
      .catch((error) => console.error('Error fetching data:', error));
  });

document
  .getElementById('addCommentButton')
  .addEventListener('click', function () {
    let commentText = document.getElementById('commentInput').value;
    if (commentText !== '') {
      let newComment = document.createElement('li');
      newComment.textContent = commentText;

      // Add a remove button to each comment
      let removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', function () {
        document.getElementById('commentList').removeChild(newComment);
      });
      newComment.appendChild(removeButton);

      document.getElementById('commentList').appendChild(newComment);
      document.getElementById('commentInput').value = ''; // Clear the input
    }
  });
