import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Register click event for navigation links
document.addEventListener('click', function (event) {
    // Check if the clicked element is a link inside the navigation bar
    if (event.target.tagName === 'A' && event.target.closest('nav')) {
        event.preventDefault();

        // Get the target section's ID from the href attribute
        const targetId = event.target.getAttribute('href').substring(1);

        // Scroll smoothly to the target section
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
        });
    }
});

function registerUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Make AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/register', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('response').innerHTML = xhr.responseText;
        }
    };

    var data = 'username=' + encodeURIComponent(username) +
               '&email=' + encodeURIComponent(email) +
               '&password=' + encodeURIComponent(password);

    xhr.send(data);
}