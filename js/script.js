document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // Sound Effects Helper (Web Audio API - Synthesized Sounds)
    // =========================================================
    function playSound(type = 'click') {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            if (type === 'click') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.08);
                gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.08);
            } else if (type === 'star') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
                osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.08); // E5
                gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.2);
            }
        } catch (e) {
            console.log("Audio not supported or restricted by browser policy.");
        }
    }

    // Helper Notification Toast
    function showNotification(message) {
        let toast = document.querySelector(".notification-toast");
        if (!toast) {
            toast = document.createElement("div");
            toast.className = "notification-toast";
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    // =========================================================
    // Advanced JS: Objects & Higher-Order Functions (Filter System)
    // =========================================================
    const heroData = [
        { name: "Apollo", role: "Duelist", origin: "Ixia", tier: "S" },
        { name: "Paradox", role: "Initiator", origin: "Thieves Guild", tier: "A" },
        { name: "Wraith", role: "Duelist", origin: "New York", tier: "S" },
        { name: "Infernus", role: "Bruiser", origin: "Ixia", tier: "B" },
        { name: "Celeste", role: "Tank", origin: "Unicorn Realm", tier: "A" },
        { name: "Mo & Krill", role: "Tank", origin: "Underground", tier: "B" }
    ];

    function filterHeroesByRole(roleCategory) {
        // Higher-Order Function: filter
        return roleCategory === "All" 
            ? heroData 
            : heroData.filter(hero => hero.role === roleCategory);
    }

    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            playSound('click');
            filterBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const category = this.dataset.category;
            
            // Switch Statement for category logic
            let displayRole = "All";
            switch (category) {
                case "duelist":
                    displayRole = "Duelist";
                    break;
                case "tank":
                    displayRole = "Tank";
                    break;
                case "initiator":
                    displayRole = "Initiator";
                    break;
                case "all":
                default:
                    displayRole = "All";
                    break;
            }

            let visibleCount = 0;

            galleryItems.forEach(item => {
                const itemRole = item.getAttribute("data-role");
                
                if (category === "all" || itemRole === category) {
                    item.style.display = "block";
                    visibleCount++;
                } else {
                    item.style.display = "none";
                }
            });

            const filteredList = filterHeroesByRole(displayRole);
            showNotification(`Filtered: ${filteredList.length} heroes found in category (${displayRole}).`);
        });
    });

    // =========================================================
    // Part 1.1: Star Rating System (document.querySelectorAll)
    // =========================================================
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            playSound('star');
            const ratingValue = this.getAttribute("data-value") || (index + 1);

            stars.forEach((s, idx) => {
                if (idx < ratingValue) {
                    s.classList.add("selected");
                } else {
                    s.classList.remove("selected");
                }
            });

            const ratingDisplay = document.getElementById("rating-value");
            if (ratingDisplay) {
                ratingDisplay.textContent = `Selected Rating: ${ratingValue} / 5 Stars`;
            }
        });
    });

    // =========================================================
    // Part 1.2: Keyboard Navigation (keydown Event)
    // =========================================================
    const navLinks = Array.from(document.querySelectorAll(".nav-menu a"));
    let currentNavIndex = -1;

    document.addEventListener("keydown", function (e) {
        if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
            return; // Ignore if user is typing in form inputs
        }

        // ArrowRight & ArrowLeft Navigation
        if (e.key === "ArrowRight") {
            currentNavIndex = (currentNavIndex + 1) % navLinks.length;
            navLinks[currentNavIndex].focus();
        } else if (e.key === "ArrowLeft") {
            currentNavIndex = (currentNavIndex - 1 + navLinks.length) % navLinks.length;
            navLinks[currentNavIndex].focus();
        }
    });

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
            playSound('click');
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
            playSound('click');
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
            playSound('click');
            popupModal.style.display = "flex";
        });

        closeModalBtn.addEventListener("click", function () {
            playSound('click');
            popupModal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === popupModal) {
                popupModal.style.display = "none";
            }
        });
    }

    // =========================================================
    // Task 1: Form Validation & Reset (on feedback.html)
    // =========================================================
    const feedbackForm = document.getElementById("feedback-form");
    const resetFormBtn = document.getElementById("reset-form-btn");

    if (resetFormBtn && feedbackForm) {
        resetFormBtn.addEventListener("click", function () {
            playSound('click');
            document.querySelectorAll('#feedback-form input, #feedback-form textarea').forEach(input => input.value = '');
            showNotification("Form cleared!");
        });
    }

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

            // Validate Password (min 8 chars)
            const passwordRegex = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[\W_])\S{8,}$/;
            if (passInput && passInput.value.length < 8 || passInput && !passwordRegex.test(passInput.value)) {
                if (passError) passError.textContent = "Incorrect password format. Must be at least 8 characters, include uppercase, lowercase, number, and special character, and no spaces.";
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
                e.preventDefault();
                playSound('star');
                showNotification("Feedback submitted successfully!");
                feedbackForm.reset();
            }
        });
    }
});