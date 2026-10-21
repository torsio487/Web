document.addEventListener("DOMContentLoaded", function () {
    // =========================================================
    // Task 5: Display Current Date & Time
    // =========================================================
    function updateClock() {
        const clockElement = document.getElementById("live-clock");
        if (!clockElement) return;

        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        clockElement.textContent = now.toLocaleDateString('en-US', options);
    }
    updateClock();
    setInterval(updateClock, 1000);

    // =========================================================
    // Task 4: Change Background Color
    // =========================================================
    const colorBtn = document.getElementById("change-bg-btn");
    const colors = ["#121212", "#1a1a2e", "#0f3460", "#16213e", "#1b1b2f"];
    let colorIndex = 0;

    if (colorBtn) {
        colorBtn.addEventListener("click", function () {
            colorIndex = (colorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[colorIndex];
        });
    }

    // =========================================================
    // Task 2: Accordion for FAQs
    // =========================================================
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const body = this.nextElementSibling;
            const isVisible = body.style.display === "block";

            // Close all items
            document.querySelectorAll(".accordion-body").forEach(item => item.style.display = "none");
            document.querySelectorAll(".accordion-header").forEach(item => item.classList.remove("active"));

            // Toggle clicked item
            if (!isVisible) {
                body.style.display = "block";
                this.classList.add("active");
            }
        });
    });

    // =========================================================
    // Task 3: Popup Subscription Form
    // =========================================================
    const popupModal = document.getElementById("popup-modal");
    const openModalBtn = document.getElementById("open-modal-btn");
    const closeModalBtn = document.getElementById("close-modal-btn");

    if (openModalBtn && popupModal && closeModalBtn) {
        openModalBtn.addEventListener("click", function () {
            popupModal.style.display = "flex";
        });

        closeModalBtn.addEventListener("click", function () {
            popupModal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === popupModal) {
                popupModal.style.display = "none";
            }
        });
    }

    // =========================================================
    // Task 1: Form Validation (on feedback.html)
    // =========================================================
    const feedbackForm = document.getElementById("feedback-form");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (e) {
            let isValid = true;

            const emailInput = document.getElementById("email");
            const passInput = document.getElementById("password");
            const confirmPassInput = document.getElementById("confirm-password");

            const emailError = document.getElementById("email-error");
            const passError = document.getElementById("pass-error");
            const confirmPassError = document.getElementById("confirm-pass-error");

            // Reset error messages
            if (emailError) emailError.textContent = "";
            if (passError) passError.textContent = "";
            if (confirmPassError) confirmPassError.textContent = "";

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && !emailRegex.test(emailInput.value)) {
                if (emailError) emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            // Validate Password (min 6 chars)
            if (passInput && passInput.value.length < 6) {
                if (passError) passError.textContent = "Password must be at least 6 characters long.";
                isValid = false;
            }

            // Validate Password Confirmation
            if (passInput && confirmPassInput && passInput.value !== confirmPassInput.value) {
                if (confirmPassError) confirmPassError.textContent = "Passwords do not match.";
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            } else {
                alert("Form submitted successfully!");
            }
        });
    }
});