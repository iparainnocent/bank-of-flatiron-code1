# Getting Started with Create React App

# Bank of Flatiron

For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Requirements

For this project, you must:

#### Project Setup
- Once you have the plan in place for the application you want to build take the following steps:

- Create a new project folder.
- Create a new GitHub repository 
- Please make sure you regularly commit to the repository.
Installation

## System Requirements
- Node 18+
- Abrowser capable of running javascript (chrome)
Operatingv System(Linux)
- A text editor capable of running javascript (Visual Studio Code)
- RAM - 4GB


### To get started with the Bank of Flatiron application, follow these steps:

Clone the repository to your local machine:


- git clone ; https://github.com/your-username/bank-of-flatiron.git
- Navigate to the project directory:

- cd bank-of-flatiron
Install the dependencies:


- `npm install`
Start the development server:


- `npm start`
The application should now be running on http://localhost:3000.
- The page will reload when you make changes.\
- You may also see any  errors in the console.

## Available Scripts

### Features
- Transaction List: The application displays a list of transactions, including the transaction date, description, category, and amount.
- Transaction Search: Users can search for transactions by entering a search term in the search input.
- Add Transactions: Users can add new transactions to the list, including the date, description, category, and amount.

### API Endpoint
The Bank of Flatiron application fetches transaction data from the following  API endpoint:

copy;
[https://bank-flatiron-weld.vercel.app/Transaction_data]
- The API returns an array of transaction objects, where each object has the following properties:

- id: a unique identifier for the transaction
- date: the date of the transaction
- description: a description of the transaction
- category: the category of the transaction (e.g., "Income", "Food")
- amount: the amount of the transaction (positive for income, negative for expenses)

### Code Structure
The Bank of Flatiron application is structured as follows:(The main components used);

- App.js: The main component that renders the application and manages the state of the transactions.
- AddTransactions.js: A component that allows users to add new transactions.
- DisplayList.js: A component that displays the list of transactions.

## Deploy link
[https://bank-of-flatiron-code1.vercel.app/]




## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
