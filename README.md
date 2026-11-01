# CABO — Web Development Assessment

CABO is a front-end web development project created as part of my college assessment. It is a demo platform that connects rooftop solar energy producers with organisations interested in carbon credits.

The project is developed using HTML, CSS, and basic JavaScript concepts covered during the Web Development course.

## Features

- Separate login and registration navigation for buyers.
- Common login page for both buyers and sellers.
- Buyer registration form with input validation.
- JavaScript form submission and event handling.
- Buyer registration details stored in browser `localStorage`.
- Buyer data page to display registered buyer details in a table.
- Buyer dashboard showing available carbon credits and purchase history.
- Demo purchase functionality for carbon credits.
- Buyer-specific transaction history using browser storage.
- Seller dashboard displaying solar generation and carbon-related information.
- JSON data fetching to display credit and solar information.
- Weekly report and settlement pages.
- Separate CSS files for individual pages.

## Project Pages

| File | Description |
|---|---|
| `index.html` | Common login page for buyers and sellers |
| `buyer.html` | Buyer registration form |
| `buyer-dashboard.html` | Buyer dashboard with available credits and transaction history |
| `buyer-data.html` | Displays registered buyer details stored in the browser |
| `seller-dashboard.html` | Seller dashboard showing solar generation information |
| `weekly-report.html` | Displays weekly solar generation and audit information |
| `settlement.html` | Shows the settlement process and commission details |

## Data Files

| File | Purpose |
|---|---|
| `credits-data.json` | Contains sample carbon credit project details, locations, available credits, and prices |
| `solar-data.json` | Contains sample solar generation and carbon-related data for the seller dashboard |

JavaScript `fetch()` is used to read data from these JSON files and display it on the respective pages.

## Technologies Used

- **HTML** — Page structure, forms, tables, and navigation.
- **CSS** — Page layouts, styling, and visual design.
- **JavaScript** — Form validation, event handling, DOM manipulation, and browser storage.
- **JSON** — Separate storage of sample project and solar data.
- **localStorage** — Storing buyer registration details, login information, and demo transaction history in the browser.
- **GitHub Pages** — Hosting the static website.

## Data Storage and Limitations

This project is currently a front-end demonstration.

- Buyer registration details and demo transaction records are stored in the browser's `localStorage`.
- JSON files are used to provide sample credit and solar data to the web pages.
- Changes made during demo purchases are not permanently saved to the JSON files.
- Data stored in `localStorage` is specific to the browser and website origin.
- The seller login uses demo credentials and does not provide real authentication.
- The project does not currently include an actual payment gateway or backend database.
- Passwords are stored in browser storage for demonstration purposes only and should not be used for real user accounts.

A backend using Node.js and Express, along with proper authentication and server-side data storage, can be added as a future improvement.

## Project Status

This project is a work in progress and is being developed further as part of the Web Development Assessment.

## Author

**Parth Sharma**
