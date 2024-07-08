document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const mobileInput = document.getElementById('mobile');
    const mobileNumber = mobileInput.value;
    
    // Check if the mobile number is exactly 10 digits
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNumber)) {
        alert('Please enter a valid 10-digit mobile number.');
        return; // Prevent the form from submitting
    }
    
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    // Regular expression for password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least 8 characters, including at least one letter, one number, and one special character.');
        return; // Prevent the form from submitting
    }

    const newUser = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        username: document.getElementById('username').value,
        password: password // Use validated password value
    };
    
    // Fetch existing users from JSON server
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(existingUsers => {
            // Check if email, username, or mobile is already in use
            const emailExists = existingUsers.some(user => user.email === newUser.email);
            const usernameExists = existingUsers.some(user => user.username === newUser.username);
            const mobileExists = existingUsers.some(user => user.mobile === newUser.mobile);
            
            if (emailExists) {
                alert('Email is already in use.');
                return; // Prevent the form from submitting
            }
            if (usernameExists) {
                alert('Username is already in use.');
                return; // Prevent the form from submitting
            }
            if (mobileExists) {
                alert('Mobile number is already in use.');
                return; // Prevent the form from submitting
            }
            
            // If all checks pass, add new user to the server
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('User added successfully:', data);
                    alert('Sign up successful! Please login.');
                    // Redirect to login page or perform other actions
                    window.location.href = 'login.html';
                })
                .catch(error => console.error('Error adding user:', error));
        })
        .catch(error => console.error('Error fetching existing users:', error));
});
