# CABO — Web Development Assessment

This repository contains my ongoing **Web Development Assessment project** for college. CABO is a front-end demo concept for connecting rooftop solar energy producers with organisations interested in carbon credits.

The project is being developed using HTML, CSS, and basic JavaScript concepts covered during the Web Development course.

## Features

- Separate seller and buyer pages
- Navigation between pages
- Buyer registration form with HTML form validation
- Basic JavaScript form submission and event handling
- Buyer registration details saved in the browser's `localStorage`
- A buyer data page that displays locally saved registrations in a table
- Seller dashboard with sample dashboard information and a static graph
- Weekly report and settlement pages
- Separate CSS files for page styling

## Pages

| File | Purpose |
|---|---|
| `index.html` | Seller login demo |
| `buyer.html` | Buyer registration form |
| `buyer-data.html` | Displays buyer records saved in the current browser's `localStorage` |
| `seller-dashboard.html` | Seller dashboard demo |
| `weekly-report.html` | Weekly report page |
| `settlement.html` | Settlement page |

## Technologies Used

- **HTML** — page structure, forms, tables, and navigation
- **CSS** — layout and visual styling
- **JavaScript** — form events, browser storage, and DOM manipulation
- **GitHub Pages** — hosting the static website

## Data Storage and Limitations

Buyer registration data is currently stored in the browser's `localStorage`. This is a front-end demonstration only:

- Data is stored separately in each browser and website origin.
- It is not saved to a shared server or an actual JSON file.
- The current seller login is a demo and does not provide real authentication.
- The buyer data page is for testing with sample data and should not be used to display real private customer information.

A backend using Node.js and Express, followed by server-side data storage and access controls, is planned as a future improvement.

## Project Status

This project is **work in progress**. Further improvements will be made as the assessment progresses, using concepts covered in the course.

## Author

**Parth Sharma**
