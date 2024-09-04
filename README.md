# Automateazy Frontend

## Overview
This project is a ReactJS application that dynamically displays user data in a table. The table supports pagination, sorting, and search functionality. This application is designed to fetch user data from an online public API and present it in an organized and interactive manner.

## Features
- **Dynamic Table**: Displays user data in a responsive and dynamic table.
- **Sorting**: Allows sorting of users by ID and Age in both ascending and descending order.
- **Pagination**: Enables navigation through different pages of user data.
- **Search**: Provides a search bar to filter users based on their first name, last name, email, or ID.

## Technologies Used
- **ReactJS**: JavaScript library for building user interfaces.
- **CSS**: Styling for the application.

## Project Setup

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/automateazy-user-management.git
cd automateazy-user-management

```

### 3. Install Dependencies
```bash
npm install
# or
yarn install
```

### 4. Run the Application
```bash
npm start
# or
yarn start
```

### 5. Accessing the Application

```bash
http://localhost:3000
```

## Project Structure

```bash
automateasy_frontend/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
|   └── index.css
├── .gitignore
├── package.json
└── README.md
```

### 1. `App.js`
The main component of the application that handles the fetching, sorting, filtering, and pagination of user data. It also manages the state of the application.

### 2. `App.css`
Contains the styling for the entire application, making it responsive and user-friendly.

### 3. `index.js`
The entry point for the React application that renders the `App` component.

## Code Explanation

### 1. Fetching Data
The application fetches user data from the DummyJSON API in the `fetchData` function, which is called inside a `useEffect` hook to ensure the data is fetched when the component mounts.

### 2. Sorting
Sorting is implemented in the `sortData` function. The application allows sorting by `id` and `age`, with the direction (ascending or descending) toggling when the column header is clicked.

### 3. Pagination
Pagination is managed through `currentPage`, `entriesPerPage`, and calculated indexes (`indexOfLastEntry`, `indexOfFirstEntry`). The data is sliced accordingly to display only the relevant entries for the current page.

### 4. Search
The `filterData` function filters the users based on the search query input, which checks if the user's first name, last name, email, or ID matches the query.

## Usage Instructions

### Sorting
Click on the column headers `ID` or `Age` to sort the table. An arrow indicator (↑ for ascending, ↓ for descending) will appear next to the header to show the current sort direction.

### Pagination
Use the "Previous" and "Next" buttons at the bottom of the table to navigate through pages. The current page number is highlighted.

### Search
Type in the search bar above the table to filter the displayed users by first name, last name, email, or ID.

## Error Handling

- **Fetching Errors**: Any issues with fetching data from the API will be logged to the console with a descriptive message.
- **Empty States**: If no users are available or match the search criteria, a loading or empty state message will be displayed.

## Conclusion
This application provides a simple yet powerful interface for managing user data, complete with essential features like sorting, pagination, and search. It is built with ReactJS and can be easily extended or modified to fit additional requirements.

## GitHub Repository
To view the source code or contribute, visit the GitHub repository [here](https://github.com/aniketmu/automateasy_frontend).
