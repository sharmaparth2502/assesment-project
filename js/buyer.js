//* ==========================================================
//* CABO Buyer Registration & Form Submission
//* Meets Evaluation Parameters 2, 3, & 4:
//* - Input validation
//* - Event handling on form submit
//* - Saving form data to browser localStorage
//* - Saving submitted form data directly to a local JSON file (Blob download)
//* ==========================================================

const buyerForm = document.getElementById("buyerForm");
const feedbackBox = document.getElementById("formFeedback");

if (buyerForm) {
    buyerForm.addEventListener("submit", function(event) {
        // Prevent default browser form submission
        event.preventDefault();

        // 1. Gather all form inputs
        const company = document.getElementById("company").value.trim();
        const email = document.getElementById("email").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const target = document.getElementById("target").value.trim();
        const companyType = document.getElementById("companyType").value;
        const terms = document.getElementById("terms").checked;

        // 2. Perform Form Validation
        if (!company || !email || !contact || !phone || !password || !target || !companyType) {
            showFeedback("Please fill out all required fields.", "error");
            return;
        }

        // Email format validation (basic regex)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showFeedback("Please enter a valid work email address.", "error");
            return;
        }

        // Phone number validation (10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            showFeedback("Please enter a valid 10-digit mobile number.", "error");
            return;
        }

        // Password length validation
        if (password.length < 6) {
            showFeedback("Password must be at least 6 characters long.", "error");
            return;
        }

        // Terms agreement validation
        if (!terms) {
            showFeedback("You must agree to the CABO terms and conditions.", "error");
            return;
        }

        // 3. Create the buyer object
        const newBuyer = {
            id: Date.now(),
            company: company,
            email: email,
            contact: contact,
            phone: phone,
            password: password,
            target: target,
            companyType: companyType,
            registeredAt: new Date().toISOString().split("T")[0]
        };

        // 4. Retrieve existing buyers from localStorage
        let buyers = JSON.parse(localStorage.getItem("buyers")) || [];

        // Check for duplicate email
        let existing = buyers.find(function(b) {
            return b.email.toLowerCase() === email.toLowerCase();
        });

        if (existing) {
            showFeedback("This email address is already registered. Please login.", "error");
            return;
        }

        // Add new buyer to array and save back to localStorage
        buyers.push(newBuyer);
        localStorage.setItem("buyers", JSON.stringify(buyers));

        // Set as active logged-in buyer for session
        localStorage.setItem("loggedInBuyer", JSON.stringify(newBuyer));

        // 5. PARAMETER 4: Save submitted form data to a local JSON file
        // We create a JSON string and trigger a browser download
        saveDataToLocalJsonFile(newBuyer);

        // Display success feedback
        showFeedback("Registration successful! Your data has been stored and downloaded as a JSON file.", "success");

        // Redirect to buyer dashboard after 2 seconds
        setTimeout(function() {
            window.location.href = "buyer-dashboard.html";
        }, 2200);
    });
}

// Function to save submitted form data as a local JSON file
function saveDataToLocalJsonFile(dataObject) {
    // Convert object to formatted JSON string
    const jsonString = JSON.stringify(dataObject, null, 4);

    // Create a Blob with application/json MIME type
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a temporary hidden link element
    const downloadAnchor = document.createElement("a");
    downloadAnchor.href = URL.createObjectURL(blob);
    downloadAnchor.download = `cabo_buyer_${dataObject.company.replace(/\s+/g, '_').toLowerCase()}.json`;

    // Append to document, trigger click, and cleanup
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(downloadAnchor.href);
}

// Helper function to display success or error messages
function showFeedback(message, type) {
    if (!feedbackBox) {
        alert(message);
        return;
    }
    feedbackBox.textContent = message;
    feedbackBox.className = `form-feedback ${type}`;
    feedbackBox.style.display = "block";
}

