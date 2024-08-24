document
  .getElementById('loadUserButton')
  .addEventListener('click', async function () {
    try {
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let user = await response.json();
      console.log(user);
      document.getElementById('userData').innerHTML = `
        <h2>Name:${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
      `;
    } catch (error) {
      document.getElementById('userData').innerHTML = 'Error loading user data';
      console.log('Error: ' + error);
    }
  });
