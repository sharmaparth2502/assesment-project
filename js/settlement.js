//* ==========================================================
//* CABO Settlement Calculator & Clearing Gateway Note
//* Level: Event handling (input, click), real-time calculations, JSON download
//* Meets Parameter 2 (Interactions) & Parameter 4 (JSON export)
//* ==========================================================

const creditsInput = document.getElementById("calcCredits");
const priceInput = document.getElementById("calcPrice");

const grossElem = document.getElementById("calcGross");
const feeElem = document.getElementById("calcFee");
const payoutElem = document.getElementById("calcPayout");
const generateNoteBtn = document.getElementById("generateNoteBtn");
const noteOutput = document.getElementById("noteOutput");

// Function to calculate settlement breakdown
function calculateSettlement() {
    let credits = parseFloat(creditsInput.value) || 0;
    let price = parseFloat(priceInput.value) || 0;

    let gross = credits * price;
    let caboFee = gross * 0.04; // 4% clearing fee
    let ownerPayout = gross * 0.96; // 96% rooftop generator payout

    grossElem.textContent = "₹" + Math.round(gross).toLocaleString();
    feeElem.textContent = "₹" + Math.round(caboFee).toLocaleString();
    payoutElem.textContent = "₹" + Math.round(ownerPayout).toLocaleString();

    return {
        credits: credits,
        pricePerCredit: price,
        grossAmount: Math.round(gross),
        caboGatewayFee: Math.round(caboFee),
        ownerNetPayout: Math.round(ownerPayout),
        settlementDate: new Date().toISOString().split("T")[0],
        status: "Verified Gateway Clearance"
    };
}

// Attach real-time input event listeners
if (creditsInput && priceInput) {
    creditsInput.addEventListener("input", calculateSettlement);
    priceInput.addEventListener("input", calculateSettlement);
}

// Generate Settlement Note and offer JSON download
if (generateNoteBtn) {
    generateNoteBtn.addEventListener("click", function() {
        const settlementData = calculateSettlement();

        // Display note text
        if (noteOutput) {
            noteOutput.style.display = "block";
            noteOutput.innerHTML = `
                <div style="background: #101611; border: 1px solid #4ade80; border-radius: 8px; padding: 1.5em; margin-top: 1.5em; text-align: left;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1em;">
                        <h4 style="color: #4ade80; margin: 0;">OFFICIAL SETTLEMENT CLEARING NOTE</h4>
                        <span class="badge-verified">Verified 96/4 Split</span>
                    </div>
                    <p style="margin: 0.3em 0;"><strong>Volume:</strong> ${settlementData.credits} tCO₂e</p>
                    <p style="margin: 0.3em 0;"><strong>Clearing Price:</strong> ₹${settlementData.pricePerCredit.toLocaleString()} / tCO₂e</p>
                    <p style="margin: 0.3em 0;"><strong>Gross Value:</strong> ₹${settlementData.grossAmount.toLocaleString()}</p>
                    <p style="margin: 0.3em 0;"><strong>CABO 4% Gateway Fee:</strong> ₹${settlementData.caboGatewayFee.toLocaleString()}</p>
                    <p style="margin: 0.3em 0; font-size: 1.15em; color: #4ade80;"><strong>Net Rooftop Owner Settlement:</strong> ₹${settlementData.ownerNetPayout.toLocaleString()}</p>
                    <div style="margin-top: 1.2em;">
                        <button id="downloadSettlementJsonBtn" class="button-primary" style="padding: 0.5em 1.2em; font-size: 0.9em;">
                            Download Settlement Note as JSON
                        </button>
                    </div>
                </div>
            `;

            // Attach download listener for settlement JSON file
            const downloadBtn = document.getElementById("downloadSettlementJsonBtn");
            if (downloadBtn) {
                downloadBtn.addEventListener("click", function() {
                    const blob = new Blob([JSON.stringify(settlementData, null, 4)], { type: "application/json" });
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(blob);
                    a.download = `cabo_settlement_note_${Date.now()}.json`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(a.href);
                    alert("Settlement note saved locally as JSON file!");
                });
            }
        }
    });
}

// Initial calculation on page load
if (creditsInput && priceInput) {
    calculateSettlement();
}

