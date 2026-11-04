//* ==========================================================
//* CABO Features - Dynamic JSON Fetch
//* Level: Basic fetch(), DOM manipulation, template literals
//* ==========================================================

// Fetch features data from the local JSON file
fetch("data/features.json")
    .then(function(response) {
        // Parse the response as JSON
        return response.json();
    })
    .then(function(featuresData) {
        // Find the features grid container
        const gridContainer = document.querySelector(".features-grid");

        // Safety check to ensure container exists on the page
        if (!gridContainer) return;

        // Clear any static placeholder HTML
        gridContainer.innerHTML = "";

        // Loop through each feature object in the array
        for (let i = 0; i < featuresData.length; i++) {
            let feature = featuresData[i];

            // Create a new card div
            const card = document.createElement("div");
            card.className = "feature-card";

            // Populate card using template literals
            card.innerHTML = `
                <span class="material-symbols-outlined feature-icon">${feature.icon}</span>
                <h3>${feature.title}</h3>
                <p>${feature.desc}</p>
            `;

            // Append card to grid container
            gridContainer.appendChild(card);
        }
    })
    .catch(function(error) {
        console.error("Error loading features:", error);
    });

