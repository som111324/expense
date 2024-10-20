# expenseThis is a backend application that helps users manage shared expenses. Users can add expenses and split them using equal amounts, exact amounts, or percentages among participants. The application includes user authentication and authorization using JWT tokens and password hashing for security.

Features Included
User Authentication & Authorization

User Registration: Users can register with email, name, password, and mobile number.
User Login: Users can log in and receive a JWT token for authentication.
Password Hashing: User passwords are securely hashed using bcrypt.
Protected Routes: All expense-related routes are protected and require a valid JWT token.
Expense Management

Add Expense: Users can add expenses and specify participants.
Split Methods:
Equal Split: Split equally among participants.
Exact Split: Specify the exact amount each participant owes.
Percentage Split: Specify the percentage each participant owes (ensuring percentages add up to 100%).
Validation: Validates user input, ensuring correct splits and that percentages sum to 100%.
Retrieve Expenses

Retrieve User Expenses: Fetch expenses for a specific user.
Retrieve Overall Expenses: Fetch all expenses from all users (balance sheet).
API Endpoints
User Endpoints
POST /api/auth/register: Register a new user.

Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "mobile": "1234567890"
}
Response:
json
Copy code
{
  "message": "User registered successfully"
}
POST /api/auth/login: Log in a user and receive a JWT token.

Request Body:
json
Copy code
{
  "email": "john@example.com",
  "password": "securepassword"
}
Response:
json
Copy code
{
  "token": "jwt-token-here"
}
GET /api/users/me: Get details of the authenticated user.

Headers:
makefile
Copy code
Authorization: Bearer <jwt-token>
Expense Endpoints
POST /api/expenses: Add a new expense.

Headers:
makefile
Copy code
Authorization: Bearer <jwt-token>
Request Body:
json
Copy code
{
  "amount": 3000,
  "participants": [
    { "user": "userId1", "splitType": "equal" },
    { "user": "userId2", "splitType": "exact", "amount": 1500 },
    { "user": "userId3", "splitType": "percentage", "percentage": 50 }
  ]
}
Response:
json
Copy code
{
  "message": "Expense added",
  "expense": { "id": "expenseId", ... }
}
GET /api/expenses/user/:userId: Retrieve expenses for a specific user.

Headers:
makefile
Copy code
Authorization: Bearer <jwt-token>
GET /api/expenses: Retrieve all expenses (balance sheet).

Headers:
makefile
Copy code
Authorization: Bearer <jwt-token>
Setup and Installation
Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
MongoDB (running locally or a cloud-based instance)
Steps to Set Up the Application
Clone the Repository

bash
Copy code
git clone <repository-url>
cd <repository-folder>
Install Dependencies

bash
Copy code
npm install
Configure Environment Variables Create a .env file in the root of the project and add the following:

makefile
Copy code
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
PORT=5000
Run MongoDB Make sure MongoDB is running locally or use a cloud MongoDB connection string in your .env.

Run the Application Start the Node.js server:

bash
Copy code
npm start
Test the API Use Postman or cURL to test the API endpoints listed above. Ensure you include the JWT token in the Authorization header for protected routes.
