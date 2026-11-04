//* ==========================================================
//* CABO Seller Telemetry Monitor & Console
//* Level: fetch(), DOM manipulation, JSON metrics
//* ==========================================================

// Fetch live solar telemetry data from data/solar-data.json
fetch("data/solar-data.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(solarData) {
        // Populate DOM elements with loaded JSON telemetry
        if (document.getElementById("solarOutput")) {
            document.getElementById("solarOutput").textContent = solarData.solarOutput;
        }
        if (document.getElementById("todaysEnergy")) {
            document.getElementById("todaysEnergy").textContent = solarData.todaysEnergy;
        }
        if (document.getElementById("co2Avoided")) {
            document.getElementById("co2Avoided").textContent = solarData.co2Avoided;
        }
        if (document.getElementById("dailyCredits")) {
            document.getElementById("dailyCredits").textContent = solarData.dailyCredits;
        }
        if (document.getElementById("monthToDate")) {
            document.getElementById("monthToDate").textContent = solarData.monthToDate;
        }
        if (document.getElementById("cleanEnergySaved")) {
            document.getElementById("cleanEnergySaved").textContent = solarData.cleanEnergySaved;
        }
        if (document.getElementById("billSavings")) {
            document.getElementById("billSavings").textContent = solarData.billSavings;
        }
        if (document.getElementById("nodeIdBadge")) {
            document.getElementById("nodeIdBadge").textContent = solarData.nodeId;
        }
    })
    .catch(function(error) {
        console.error("Error loading solar telemetry data:", error);
    });

// Interactive simulation: Refresh Live Telemetry
const refreshBtn = document.getElementById("refreshTelemetryBtn");
if (refreshBtn) {
    refreshBtn.addEventListener("click", function() {
        // Simulate a minor fluctuation in live kW output
        const randomOutput = (4.9 + Math.random() * 0.5).toFixed(2) + " kW";
        document.getElementById("solarOutput").textContent = randomOutput;

        const randomCO2 = (18.5 + Math.random() * 0.6).toFixed(1) + " kg";
        document.getElementById("co2Avoided").textContent = randomCO2;

        alert(`Telemetry Updated from Node MP-0247:\nActive Solar Output: ${randomOutput}\nCO₂ Avoided: ${randomCO2}`);
    });
}

