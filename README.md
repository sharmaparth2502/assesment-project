# CABO — Decentralized Rooftop Solar Carbon Gateway

CABO is a climate-tech front-end web application developed for college assessment. It connects distributed rooftop solar energy producers with sustainability-conscious enterprises looking for verified, high-integrity carbon credits.

The project structure, layout conventions, and modularity have been modeled directly on the best-practice design patterns of **EduVerse**, organized cleanly into dedicated subfolders (`css/`, `data/`, `images/`, `js/`), while preserving CABO's sleek climate-tech identity.

---

## 2nd Evaluation Parameters Checklist

| # | Evaluation Parameter | Implementation Status & Details |
|---|---|---|
| **1** | **Additional pages implemented & linked together** | **Completed (10 Pages)**: `index.html` (Homepage/Hero), `features.html`, `credits.html` (Marketplace), `buyer.html` (Registration), `login.html`, `buyer-dashboard.html`, `buyer-data.html`, `seller-dashboard.html`, `weekly-report.html`, `settlement.html`. All interconnected with unified header navigation and footer. |
| **2** | **JavaScript Interactions built** | **Completed**: Dynamic JSON fetching (`fetch()`), real-time credit search and region filtering, interactive settlement calculator with live input recalculation, demo credit purchase with real-time balance deductions, ping/refresh telemetry simulation. |
| **3** | **Forms submission & input validation** | **Completed**: `buyer.html` registration and `login.html` form handlers using `event.preventDefault()`, comprehensive client-side validation (email format, 10-digit phone regex, min-length password, required fields, terms checkbox) with inline feedback UI. |
| **4** | **Saving submitted form data to local JSON files** | **Completed**: Upon registration form submission in `buyer.html`, the validated data is compiled into a JSON object, stored in browser `localStorage`, and **automatically downloaded to the user's computer as a physical `.json` file** (`cabo_buyer_[company].json`) using browser Blob downloads. An **"Export to JSON File"** button is also available on `buyer-data.html` and `buyer-dashboard.html`. |

---

## Project Structure (Modeled after EduVerse)

```text
assesment-project-main/
│
├── css/
│   └── style.css               # Central stylesheet (Universal reset, header, buttons, cards, forms, tables, footer)
│
├── data/
│   ├── buyers.json             # Sample registered corporate buyers database
│   ├── credits-data.json       # Carbon credit projects, locations, prices, available CC
│   ├── features.json           # Platform architecture and technological features
│   └── solar-data.json         # Real-time solar inverter telemetry and metrics
│
├── images/
│   ├── cabo_logo.png           # Official CABO brand logo
│   ├── flow.webp               # Solar-to-carbon telemetry workflow illustration
│   ├── gadgets.webp            # IoT gateway meter and telemetry hardware
│   ├── green.webp              # Renewable energy landscape
│   ├── healthy.webp            # Environmental health illustration
│   ├── home.webp               # Residential rooftop solar installation
│   ├── newsimg.jpg             # Spotlight industrial rooftop project photo
│   ├── google.webp, micro.webp # Enterprise partner logos
│   ├── adobe.webp, pin.webp    # Enterprise partner logos
│   ├── avatar1.png - 6.png     # Reviewer and stakeholder avatars
│   └── *.svg                   # Social and feature SVG icons
│
├── js/
│   ├── buyer.js                # Form validation, submission handling, local JSON file export
│   ├── buyer-dashboard.js      # Portfolio metric counters, credit procurement, transaction table
│   ├── buyer-data.js           # Directory table rendering, search filtering, clear data, JSON export
│   ├── credits.js              # Marketplace card rendering, search & region filter, quick buy
│   ├── features.js             # Dynamic card generation from data/features.json
│   ├── login.js                # Role-based credential verification and redirection
│   ├── seller-dashboard.js     # Solar telemetry rendering from data/solar-data.json
│   └── settlement.js           # Live 96/4 split calculator, settlement note & JSON export
│
├── buyer-dashboard.html        # Buyer portal (balance, transactions, available batches)
├── buyer-data.html             # Registered buyers directory & JSON export hub
├── buyer.html                  # Organisation registration form with validation
├── credits.html                # Carbon credits marketplace with search & filtering
├── features.html               # Platform architecture, technology & stakeholder reviews
├── index.html                  # Main landing page with hero, statistics & enterprise partners
├── login.html                  # Role-based authentication (Buyer & Seller portals)
├── seller-dashboard.html       # Producer live console with telemetry & generation curve
├── settlement.html             # 96/4 clearing model and interactive settlement calculator
├── weekly-report.html          # 7-day telemetry audit report with cryptographic checksum
└── README.md                   # Assessment documentation
```

---

## Project Pages Overview

1. **`index.html` (Homepage)**:
   - Hero banner highlighting decentralized solar aggregation and the 96/4 clearing model.
   - Live telemetry and impact statistics banner (10.5 kWp, 99.8% concordance, 96% owner share, 4% gateway fee).
   - Three-tier workflow breakdown illustrated with `flow.webp`, `home.webp`, `gadgets.webp`, and `green.webp`.
   - Enterprise carbon buyer credibility showcase (Google, Microsoft, Adobe, Pinterest).
   - Spotlight showcase of the Ludhiana Industrial Rooftop Cluster.

2. **`features.html` (Platform Architecture)**:
   - Dynamic cards loaded from `data/features.json` via `js/features.js`.
   - Technical breakdown of bi-directional IoT telemetry nodes.
   - Stakeholder testimonials with profile avatars (`avatar4.png`, `avatar5.png`, `avatar6.png`).

3. **`credits.html` (Carbon Credits Marketplace)**:
   - Dynamic project card generation from `data/credits-data.json` via `js/credits.js`.
   - Real-time text search and region/state filter dropdown.
   - Instant "Buy 10 CC" interaction that logs transactions to `localStorage` and updates available balances.

4. **`buyer.html` (Organisation Registration)**:
   - Clean form layout with fields for Organisation, Work Email, Contact Person, Phone (10 digits), Password, Target, Classification, and Terms agreement.
   - Handled by `js/buyer.js` with client-side validation, duplicate check, browser storage, and **automatic local JSON file creation and download**.

5. **`login.html` (Secure Console Access)**:
   - Role-based login supporting registered buyers and demo seller accounts.
   - Quick-reference credentials box for evaluation testing.

6. **`buyer-dashboard.html` (Buyer Portfolio Portal)**:
   - Displays buyer greeting, available credits, purchased credits, and target goal.
   - Available projects procurement table with live buy buttons.
   - Dynamic transaction history table with "Export Transactions to JSON File" option.

7. **`buyer-data.html` (Registered Buyers Directory)**:
   - Table displaying all registered buyers.
   - Live search filter by name, company, or email.
   - "Export to JSON File" button allowing manual export of all registered buyers at any time.
   - Reset sample data button loading from `data/buyers.json`.

8. **`seller-dashboard.html` (Producer Telemetry Console)**:
   - Solar telemetry loaded dynamically from `data/solar-data.json`.
   - Hourly generation curve chart visualization (06:00 to 18:00).
   - "Ping Node" button for simulated real-time telemetry fluctuations.

9. **`weekly-report.html` (7-Day Telemetry Audit)**:
   - Complete 7-day telemetry audit log with daily generation, CO₂ avoided, and VERIFIED badges.
   - Cryptographic SHA-256 gateway checksum.

10. **`settlement.html` (Gateway Settlement & Calculator)**:
    - Transparent visual explanation of the 96% generator / 4% CABO clearing split.
    - Interactive Settlement Calculator: dynamically calculates Gross Amount, CABO Fee, and Net Owner Payout as inputs change.
    - "Generate Settlement Note" button with option to download the note as a JSON file.

---

## JavaScript Concepts

The JavaScript has been written specifically to match the syllabus and difficulty level demonstrated in **EduVerse**:

1. **`fetch()` API with Promises**: Used in `features.js`, `credits.js`, `seller-dashboard.js`, and `buyer-dashboard.js` to load external `.json` files.
2. **DOM Manipulation**: `document.getElementById()`, `document.querySelector()`, `document.createElement()`, `innerHTML`, `appendChild()`.
3. **Array Methods & Loops**: `for` loops, `.forEach()`, `.filter()`, `.find()`.
4. **Event Handling**: `addEventListener()` for `submit`, `click`, `input`, and `change` events.
5. **Form Validation & Regex**: Checking non-empty fields, email regex patterns, and 10-digit phone patterns.
6. **Browser Storage (`localStorage`)**: `localStorage.setItem()` and `JSON.parse(localStorage.getItem())` for persistent client-side data.
7. **JSON File Export (`Blob` API)**: Generating and downloading offline `.json` files directly from browser JavaScript without requiring a backend server.

---



## Author
**Parth Sharma**  
Web Development Assessment Project
