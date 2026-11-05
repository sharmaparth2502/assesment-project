//* ==========================================================
//* CABO Carbon Credits Marketplace
//* Level: fetch(), array filtering, event handling, localStorage
//* ==========================================================

// Global variable to hold loaded credits
let allCredits = [];

// Find DOM elements
const creditsGrid = document.querySelector(".credits-grid");
const searchInput = document.getElementById("searchCredits");
const locationSelect = document.getElementById("filterLocation");

// Fetch credits from local JSON file
fetch("data/credits-data.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        allCredits = data.credits;
        renderCredits(allCredits);
    })
    .catch(function(error) {
        console.error("Error loading credit data:", error);
    });

// Function to render credit cards into the grid
function renderCredits(creditsList) {
    if (!creditsGrid) return;

    // Clear previous cards
    creditsGrid.innerHTML = "";

    if (creditsList.length === 0) {
        creditsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3em; color: #a7b5a4;">
                <p>No carbon credits found matching your filter criteria.</p>
            </div>
        `;
        return;
    }

    // Loop through credits and create HTML card elements
    for (let i = 0; i < creditsList.length; i++) {
        let item = creditsList[i];

        const card = document.createElement("div");
        card.className = "credit-card";

        card.innerHTML = `
            <img src="${item.image || 'images/home.webp'}" alt="${item.source}" class="credit-card-image">
            <div class="credit-card-body">
                <span class="credit-tag">${item.type || 'Solar Project'}</span>
                <h3 class="credit-title">${item.source}</h3>
                <div class="credit-location">
                    <span class="material-symbols-outlined" style="font-size: 1.1em; color: #4ade80;">location_on</span>
                    ${item.location}
                </div>
                <p style="color: #9cb098; font-size: 0.9em; margin-bottom: 1em;">
                    Status: <span class="badge-verified">${item.status || 'Verified'}</span>
                </p>
                <div class="credit-meta">
                    <div class="credit-price">
                        ${item.priceDisplay}
                        <br>
                        <span style="font-size: 0.75em; color: #4ade80;">Available: ${item.available} CC</span>
                    </div>
                    <button class="button-primary buy-btn" data-id="${item.id}">Buy 10 CC</button>
                </div>
            </div>
        `;

        // Attach event listener to Buy button
        const buyBtn = card.querySelector(".buy-btn");
        buyBtn.addEventListener("click", function() {
            handleQuickPurchase(item);
        });

        creditsGrid.appendChild(card);
    }
}

// Function to handle demo purchase of credits
function handleQuickPurchase(project) {
    let loggedInBuyer = JSON.parse(localStorage.getItem("loggedInBuyer"));

    // Check if buyer is logged in
    let buyerEmail = loggedInBuyer ? loggedInBuyer.email : "guest.buyer@cabo.demo";
    let buyerName = loggedInBuyer ? loggedInBuyer.contact : "Guest Enterprise";

    if (project.available < 10) {
        alert("Not enough credits available in this project batch!");
        return;
    }

    // Deduct 10 credits
    project.available -= 10;

    // Create transaction record
    const transaction = {
        id: Date.now(),
        source: project.source,
        location: project.location,
        credits: 10,
        amount: 10 * project.price,
        buyerEmail: buyerEmail,
        buyerName: buyerName,
        date: new Date().toLocaleDateString(),
        status: "Verified Settlement"
    };

    // Store in localStorage
    let transactions = JSON.parse(localStorage.getItem("buyerTransactions")) || [];
    transactions.push(transaction);
    localStorage.setItem("buyerTransactions", JSON.stringify(transactions));

    alert(`Success! Purchased 10 CC from ${project.source}.\nTotal: ₹${(10 * project.price).toLocaleString()}\nTransaction saved to local records.`);

    // Re-render to show updated available balance
    renderCredits(allCredits);
}

// Event listeners for search and filter interactions
if (searchInput) {
    searchInput.addEventListener("input", function() {
        applyFilters();
    });
}

if (locationSelect) {
    locationSelect.addEventListener("change", function() {
        applyFilters();
    });
}

// Filter function combining text search and location dropdown
function applyFilters() {
    let keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";
    let selectedLocation = locationSelect ? locationSelect.value.toLowerCase() : "";

    let filtered = allCredits.filter(function(item) {
        let matchesText = item.source.toLowerCase().includes(keyword) || 
                            item.location.toLowerCase().includes(keyword) ||
                            (item.type && item.type.toLowerCase().includes(keyword));

        let matchesLocation = selectedLocation === "" || item.location.toLowerCase().includes(selectedLocation);

        return matchesText && matchesLocation;
    });

    renderCredits(filtered);
}

