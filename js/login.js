//* ==========================================================
//* CABO Secure Access Login
//* Level: Event handling, localStorage lookup, conditional redirection
//* ==========================================================

const loginForm = document.getElementById("loginForm");
const messageElem = document.getElementById("message");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;

        // Retrieve registered buyers from browser localStorage
        let buyers = JSON.parse(localStorage.getItem("buyers")) || [];

        // Check if matching buyer exists in registered buyers list
        let matchedBuyer = buyers.find(function(item) {
            return item.email.toLowerCase() === email && item.password === password;
        });

        // 1. Matched registered buyer
        if (matchedBuyer) {
            localStorage.setItem("loggedInBuyer", JSON.stringify(matchedBuyer));
            showMessage("Login successful! Redirecting to Buyer Portal...", "success");
            setTimeout(function() {
                window.location.href = "buyer-dashboard.html";
            }, 1000);
            return;
        }

        // 2. Demo Buyer Quick Access
        if (email === "buyer@cabo.demo" && (password === "demo123" || password === "password")) {
            const demoBuyer = {
                contact: "Demo Procurement Officer",
                company: "Green Horizon Enterprises",
                email: "buyer@cabo.demo",
                target: "10,000 tCO₂e",
                companyType: "Private Company"
            };
            localStorage.setItem("loggedInBuyer", JSON.stringify(demoBuyer));
            showMessage("Login successful as Demo Buyer! Redirecting...", "success");
            setTimeout(function() {
                window.location.href = "buyer-dashboard.html";
            }, 1000);
            return;
        }

        // 3. Demo Seller Monitor Access
        if (email === "seller@cabo.demo" && password === "demo123") {
            showMessage("Login successful as Solar Producer! Redirecting to Monitor...", "success");
            setTimeout(function() {
                window.location.href = "seller-dashboard.html";
            }, 1000);
            return;
        }

        // 4. Invalid credentials
        showMessage("Invalid email or password. Please try again or register.", "error");
    });
}

function showMessage(msg, type) {
    if (!messageElem) {
        alert(msg);
        return;
    }
    messageElem.textContent = msg;
    messageElem.className = `form-feedback ${type}`;
    messageElem.style.display = "block";
}

