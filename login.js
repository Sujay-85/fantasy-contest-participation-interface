document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve username and password from form fields
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(username,password);

    // Assuming 'users' endpoint to fetch from JSON server
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            // Find user based on username and password
            let user = users.find(user => user.username === username && user.password === password);

            if (user) {
                // User found, login successful
                console.log('Login successful:', user);
                alert('Login successful!');
                // Redirect to dashboard or perform other actions
                window.location.href = 'dashboard.html';
            } else {
                // User not found or credentials incorrect
                console.error('Login failed: Invalid username or password');
                alert('Login failed: Invalid username or password');
                // Clear input fields or display error message
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error: Unable to log in. Please try again later.');
        });
});
