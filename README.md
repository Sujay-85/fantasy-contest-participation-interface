# Fantasy Contest Participation Interface

Welcome to the Fantasy Contest Participation Interface project! This web application allows users to participate in various fantasy contests, view upcoming contests, and add new contests. The interface is designed to be responsive and user-friendly, supporting multiple devices including laptops, tablets, and mobile phones.

## Features

- **User Authentication**: Secure signup and login functionality using HTML, CSS, and client-side JavaScript for validation.
- **Dashboard**: Displays a list of upcoming contests with a focus on responsive design.
- **Contest List**: Fetches and displays all available fantasy contests using an API, presented in a tabular format.
- **Add Contest**: A web form to add new contests, with fields for contest date, start time, name, fees (free/paid), and price (if paid). The form dynamically shows/hides the price field based on the fee type.
- **Responsive Design**: Ensures compatibility and visual appeal across different devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Styling**: Custom CSS with a color scheme of purple and silver
- **Data Handling**: JSON files for storing signup and login data

## Getting Started

### Prerequisites

- Node.js and npm installed on your system

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fantasy-contest-interface.git
   
Project Structure
public/ - Contains all frontend files (HTML, CSS, JavaScript)
index.html - Main page
signup.html - Signup page
login.html - Login page
dashboard.html - Dashboard for displaying upcoming contests
contests.html - Page for displaying all contests
add-contest.html - Form for adding new contests
server.js - Node.js server file
data/ - Folder for storing JSON files
users.json - Stores user data for signup/login
contests.json - Stores contest data
Usage
Signup
Navigate to the signup page (signup.html).
Fill in the required details and submit the form.
The data is validated and stored in the users.json file.
Login
Navigate to the login page (login.html).
Enter your credentials and submit the form.
Successful login redirects you to the dashboard.
Dashboard
Displays a list of upcoming contests.
Ensures responsive design for various devices.
Add Contest
Navigate to the add contest page (add-contest.html).
Fill in the required details, with conditional display of the price field based on the fee type.
Submit the form to add the new contest, which is stored in the contests.json file.
View Contests
Navigate to the contests page (contests.html) to view all available contests in a tabular format.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
