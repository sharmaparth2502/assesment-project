# CABO – Web Development Assessment

CABO is a front-end web development project created as part of my college assessment. It is a demo platform that connects rooftop solar energy producers with organisations interested in carbon credits.

The project is developed using HTML, CSS, JavaScript and JSON.

## Features

- Common login page for buyers and sellers.
- Buyer registration with form validation.
- Buyer and seller dashboards with separate functionality.
- Buyer registration details stored in browser localStorage.
- Buyer data displayed in a table.
- Clear Buyer Data option with a confirmation prompt.
- Available carbon credit projects with prices and locations.
- Demo credit purchase functionality.
- Updated credit quantities saved in localStorage, remaining consistent after page refresh.
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
| `buyer-data.html` | Displays registered buyer details and provides an option to clear saved data |
| `seller-dashboard.html` | Seller dashboard showing solar generation information |
| `weekly-report.html` | Displays weekly solar generation and audit information |
| `settlement.html` | Displays sample settlement details |

## Data Files

| File | Purpose |
|---|---|
| `credits-data.json` | Contains sample carbon credit project details, locations, available credits and prices |
| `solar-data.json` | Contains sample solar generation and carbon-related data |

JavaScript `fetch()` is used to retrieve data from these JSON files and display it on the respective web pages.

## Technologies Used

- **HTML** – Page structure, forms, tables and navigation.
- **CSS** – Page layouts, styling and visual design.
- **JavaScript** – Form validation, event handling, DOM manipulation and browser storage.
- **JSON** – Separate storage of sample credit and solar data.
- **localStorage** – Storing buyer registration details, login information, credit inventory and demo transaction history.
- **GitHub Pages** – Hosting the static website.

## Data Storage and Limitations

This project is currently a front-end demonstration.

- Buyer registration details and demo transaction records are stored in browser `localStorage`.
- Updated credit quantities are also saved in `localStorage` and remain available after refreshing the dashboard in the same browser.
- JSON files provide sample credit and solar data to the web pages.
- Changes made to the browser's local credit inventory do not permanently modify the original JSON files.
- Data stored in `localStorage` is specific to the browser and website origin.
- Seller login uses demo credentials and does not provide real authentication.
- Passwords are stored in browser storage for demonstration purposes only and should not be used for real user accounts.
- The project does not currently include an actual payment gateway or backend database.
- Settlement details are sample values and do not represent actual financial transactions.

A backend using Node.js and Express, along with proper authentication and server-side data storage, can be added as a future improvement.

## Project Status

This project is being developed further as part of the Web Development Assessment.

## Author

**Parth Sharma**
