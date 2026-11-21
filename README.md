# CABO – Web Development Assessment

CABO is a web-based demo platform that connects rooftop solar energy producers with organisations interested in carbon credits.

The project is developed using HTML, CSS, JavaScript, JSON, Node.js, Express.js and MongoDB.

## Project Repositories

- **Frontend:** [CABO Frontend](https://github.com/sharmaparth2502/assesment-project)
- **Backend:** [CABO Backend API](https://github.com/sharmaparth2502/cabo-backend-api)

The frontend and backend are maintained in separate repositories.

## Features

- Common login page for buyers and sellers.
- Buyer registration with form validation.
- Buyer and seller dashboards with separate functionality.
- Buyer registration details stored in browser localStorage.
- Buyer data displayed in a table.
- Clear Buyer Data option with a confirmation prompt.
- Available carbon credit projects with prices and locations.
- Demo credit purchase functionality.
- Updated credit quantities saved in localStorage.
- Buyer-specific transaction history.
- Seller dashboard displaying solar generation and carbon-related information.
- JSON data fetching using JavaScript.
- Weekly report and settlement pages.
- Separate CSS files for individual pages.

## Project Pages

| File | Description |
|---|---|
| `index.html` | Common login page for buyers and sellers |
| `buyer.html` | Buyer registration form |
| `buyer-dashboard.html` | Buyer dashboard showing available credits and transaction history |
| `buyer-data.html` | Displays registered buyer details |
| `seller-dashboard.html` | Seller dashboard showing solar generation information |
| `weekly-report.html` | Displays weekly solar generation and audit information |
| `settlement.html` | Displays sample settlement details |

## Data Files

| File | Purpose |
|---|---|
| `credits-data.json` | Sample carbon credit project details, locations, available credits and prices |
| `solar-data.json` | Sample solar generation and carbon-related data |

JavaScript `fetch()` is used to retrieve data from these JSON files and display them on the respective web pages.

## Backend

The backend is maintained separately in the [CABO Backend API repository](https://github.com/sharmaparth2502/cabo-backend-api).

Technologies used:

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

The backend project contains server configuration, database connectivity, API routes, middleware and database models.

## Technologies Used

- **HTML** – Page structure, forms, tables and navigation.
- **CSS** – Page layouts, styling and visual design.
- **JavaScript** – Form validation, event handling and DOM manipulation.
- **JSON** – Separate storage of sample credit and solar data.
- **localStorage** – Browser-side storage for demo data.
- **Node.js and Express.js** – Backend server and API development.
- **MongoDB** – Database for backend data storage.
- **GitHub Pages** – Hosting the static frontend website.

## Data Storage and Limitations

- The frontend currently uses browser `localStorage` for buyer registration details and demo transaction records.
- JSON files provide sample credit and solar data.
- Changes made to browser-side credit inventory do not permanently modify the original JSON files.
- Data stored in `localStorage` is specific to the browser and website origin.
- Seller login uses demo credentials.
- The frontend's existing demo login and registration functionality is not yet fully integrated with the backend.
- The backend is maintained separately and is under development.
- The project does not currently include an actual payment gateway.
- Settlement details are sample values and do not represent actual financial transactions.

## Project Status

This project is being developed further as part of the Web Development Assessment. Backend development, database integration and frontend-backend connectivity are in progress.

## Author

**Parth Sharma**