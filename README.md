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
- Buyer registration and login integrated with backend APIs.
- Buyer account details stored in MongoDB.
- Password hashing using bcrypt on the backend.
- Buyer and seller dashboards with separate functionality.
- Buyer data retrieval through backend API.
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

JavaScript `fetch()` is used to retrieve data from these JSON files and display it on the respective web pages.

## Backend

The backend is maintained separately in the [CABO Backend API repository](https://github.com/sharmaparth2502/cabo-backend-api).

**Technologies used:**

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- REST API
- bcrypt

### Buyer API Integration

The frontend communicates with the backend through REST API endpoints.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/buyers/register` | Registers a new buyer |
| POST | `/api/buyers/login` | Verifies buyer login credentials |
| GET | `/api/buyers` | Retrieves registered buyer records |

Buyer registration details are stored in MongoDB through the backend API. Buyer login credentials are verified by the backend, where passwords are hashed using bcrypt.

## Technologies Used

- **HTML** – Page structure, forms, tables and navigation.
- **CSS** – Page layouts, styling and visual design.
- **JavaScript** – Form validation, event handling, API calls and DOM manipulation.
- **JSON** – Separate storage of sample credit and solar data.
- **localStorage** – Browser-side storage for demo transactions and credit-related data.
- **Node.js** – Backend runtime environment.
- **Express.js** – Backend server and API development.
- **MongoDB** – Database for buyer account information.
- **GitHub** – Version control and project hosting.

## Data Storage and Limitations

- Buyer registration details are stored in MongoDB through the backend API.
- Buyer login is handled through the backend API.
- Sample credit and solar generation information is retrieved from separate JSON files.
- Demo transaction records and credit-related changes are stored in browser localStorage.
- Changes made to browser-side credit inventory do not permanently modify the original JSON files.
- Data stored in localStorage is specific to the browser and website origin.
- Seller login and seller dashboard functionality use demo data.
- The project does not currently include an actual payment gateway.
- Settlement details are sample values and do not represent actual financial transactions.

## Project Status

The frontend includes buyer registration and login integration with the Node.js and Express.js backend using MongoDB.

The project is being developed further as part of the Web Development Assessment. Additional backend functionality, including seller management, carbon credit management and transaction APIs, can be added in future development.

## Author

Parth Sharma