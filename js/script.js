$(document).ready(function () {
    console.log("jQuery is ready!");

    // Sound Effects Helper (Web Audio API)
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
                osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
                osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.08);
                gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.2);
            }
        } catch (e) {
            console.log("Audio not supported or restricted.");
        }
    }

    // Notification System (Toast)
    function showNotification(message) {
        let toast = $(".notification-toast");
        if (toast.length === 0) {
            toast = $('<div class="notification-toast"></div>').appendTo("body");
        }
        toast.text(message).addClass("show");
        setTimeout(() => {
            toast.removeClass("show");
        }, 3000);
    }

    // Dark/Light Theme Toggle Button
    $("#theme-toggle-btn").on("click", function () {
        playSound('click');
        $("body").toggleClass("light-theme");
        if ($("body").hasClass("light-theme")) {
            $(this).text("Toggle Dark Theme");
            showNotification("Switched to Light Theme");
        } else {
            $(this).text("Toggle Light/Dark Theme");
            showNotification("Switched to Dark Theme");
        }
    });

    // Timed Welcome Greeting Popup Modal
    const $popupModal = $("#popup-modal");
    if ($popupModal.length > 0) {
        // Show after 3 seconds (3000ms)
        setTimeout(() => {
            $popupModal.css("display", "flex");
        }, 3000);

        $("#close-modal-btn, #popup-modal").on("click", function (e) {
            if (e.target === this || $(this).attr('id') === 'close-modal-btn') {
                playSound('click');
                $popupModal.css("display", "none");
            }
        });

        // Prevent closing when clicking inside modal box
        $(".modal-content-custom").on("click", function (e) {
            e.stopPropagation();
        });

        // Subscribe Form inside modal Loading Spinner
        $("#subscribe-form").on("submit", function (e) {
            e.preventDefault();
            const $btn = $(this).find("button[type='submit']");
            const $text = $btn.find(".btn-text");
            const $spinner = $btn.find(".spinner");

            $text.hide();
            $spinner.show();
            $btn.prop("disabled", true);

            setTimeout(() => {
                $text.show();
                $spinner.hide();
                $btn.prop("disabled", false);
                $popupModal.css("display", "none");
                playSound('star');
                showNotification("Successfully subscribed to Deadlock Wiki!");
            }, 1500);
        });
    }

    // Scroll Progress Bar
    $(window).on("scroll", function () {
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height() - $(window).height();
        const scrollPercent = (scrollTop / docHeight) * 100;
        $(".scroll-progress-bar").css("width", scrollPercent + "%");
    });

    // Animated Number Counter
    $(".counter").each(function () {
        const $this = $(this);
        const target = parseInt($this.attr("data-target"), 10);
        $({ countNum: 0 }).animate({ countNum: target }, {
            duration: 1500,
            easing: 'swing',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(target + "+");
            }
        });
    });

    // Real-time Live Search & Autocomplete
    const heroNames = ["Wraith", "Celeste", "Infernus", "Mo & Krill", "Apollo", "Paradox"];
    
    $("#hero-search").on("keyup", function () {
        const query = $(this).val().toLowerCase();
        const $suggestions = $("#autocomplete-suggestions");
        
        // Live Filter list items
        $(".searchable-list li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(query) > -1);
        });

        // Autocomplete suggestions dropdown
        if (query.length > 0) {
            const matches = heroNames.filter(name => name.toLowerCase().includes(query));
            if (matches.length > 0) {
                let html = "";
                matches.forEach(m => {
                    html += `<div class="autocomplete-item">${m}</div>`;
                });
                $suggestions.html(html).show();
            } else {
                $suggestions.hide();
            }
        } else {
            $suggestions.hide();
        }
    });

    // Click on autocomplete suggestion
    $(document).on("click", ".autocomplete-item", function () {
        const val = $(this).text();
        $("#hero-search").val(val).trigger("keyup");
        $("#autocomplete-suggestions").hide();
    });

    // Hide autocomplete on outside click
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".search-container").length) {
            $("#autocomplete-suggestions").hide();
        }
    });

    // Search Highlighting (Highlights searched text on page)
    // Can be triggered programmatically or via search
    function highlightKeyword(keyword) {
        if (!keyword) return;
        $(".main-content p, .main-content h3").each(function () {
            let text = $(this).html();
            // simple regex wrapper highlight
            let regex = new RegExp(`(${keyword})`, 'gi');
            // Avoid double wrapping
            if (!text.includes("highlight-mark")) {
                let newText = text.replace(regex, '<span class="highlight-mark" style="background:#ffc107; color:#121212; padding:0 3px;">$1</span>');
                $(this).html(newText);
            }
        });
    }

    // Rating Specific Heroes in Index
    $(".hero-rating-box .star").on("click", function () {
        playSound('star');
        const $container = $(this).closest(".hero-rating-box");
        const heroName = $container.attr("data-hero");
        const ratingVal = $(this).attr("data-value");

        $container.find(".star").each(function (idx) {
            if (idx < ratingVal) {
                $(this).addClass("selected");
            } else {
                $(this).removeClass("selected");
            }
        });

        $container.find(".hero-rating-result").text(`Your rating for ${heroName}: ${ratingVal} / 5 Stars ⭐`);
        showNotification(`Rated ${heroName} ${ratingVal} stars!`);
    });

    // (from previous assignment): Accordion for FAQs
    $(".accordion-header").on("click", function () {
        playSound('click');
        const $body = $(this).next(".accordion-body");
        const isVisible = $body.is(":visible");

        $(".accordion-body").slideUp();
        $(".accordion-header").removeClass("active");

        if (!isVisible) {
            $body.slideDown();
            $(this).addClass("active");
        }
    });

    // Copied to Clipboard Button
    $(".copy-btn").on("click", function () {
        playSound('click');
        const textToCopy = $(this).attr("data-clipboard-text");
        const $btn = $(this);

        navigator.clipboard.writeText(textToCopy).then(() => {
            $btn.text("Copied!");
            showNotification("Copied lore snippet to clipboard!");
            setTimeout(() => {
                $btn.text("Copy Lore");
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy", err);
        });
    });

    // Image Lazy Loading
    function checkLazyLoad() {
        $("img[data-src]").each(function () {
            const $img = $(this);
            const scrollTop = $(window).scrollTop();
            const winHeight = $(window).height();
            const imgOffsetTop = $img.offset().top;

            if (imgOffsetTop < scrollTop + winHeight + 200) {
                $img.attr("src", $img.attr("data-src"));
                $img.removeAttr("data-src");
            }
        });
    }
    $(window).on("scroll resize", checkLazyLoad);
    checkLazyLoad(); // Initial check

    // Live Clock Widget
    function updateClock() {
        const $clock = $("#live-clock");
        if ($clock.length === 0) return;

        const now = new Date();
        const options = {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
        };
        $clock.text(now.toLocaleDateString('en-US', options));
    }
    updateClock();
    setInterval(updateClock, 1000);

    // Multi-Step Feedback Form (3 Steps Wizard)
    let currentStep = 1;

    function showStep(step) {
        $(".form-step").removeClass("active");
        $(`.form-step[data-step="${step}"]`).addClass("active");

        $(".step-dot").removeClass("active");
        $(".step-dot").each(function () {
            if (parseInt($(this).attr("data-step")) <= step) {
                $(this).addClass("active");
            }
        });
    }

    $(".btn-next").on("click", function () {
        playSound('click');
        let isValid = true;

        // Validate Step 1 before proceeding
        if (currentStep === 1) {
            const email = $("#email").val();
            const pass = $("#password").val();
            const confirmPass = $("#confirm-password").val();
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

            if (!emailRegex.test(email)) {
                $("#email-error").text("Please enter a valid email address.");
                isValid = false;
            } else {
                $("#email-error").text("");
            }

            if (!passwordRegex.test(pass)) {
                $("#pass-error").text("Password must contain at least one number and one special character.");
                isValid = false;
            } else {
                $("#pass-error").text("");
            }

            if (pass !== confirmPass) {
                $("#confirm-pass-error").text("Passwords do not match.");
                isValid = false;
            } else {
                $("#confirm-pass-error").text("");
            }
        }

        if (isValid && currentStep < 3) {
            currentStep++;
            showStep(currentStep);
        }
    });

    $(".btn-prev").on("click", function () {
        playSound('click');
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    const $feedbackForm = $("#multistep-feedback-form");
    const $resetFormBtn = $("#reset-form-btn");

    if ($resetFormBtn.length > 0) {
        $resetFormBtn.on("click", function () {
            playSound('click');
            $feedbackForm[0].reset();
            currentStep = 1;
            showStep(currentStep);
            showNotification("Form reset successfully!");
        });
    }

    if ($feedbackForm.length > 0) {
        $feedbackForm.on("submit", function (e) {
            e.preventDefault();
            playSound('star');

            const $submitBtn = $("#form-submit-btn");
            const $btnText = $submitBtn.find(".btn-text");
            const $spinner = $submitBtn.find(".spinner");

            // Loading spinner on submit
            $btnText.hide();
            $spinner.show();
            $submitBtn.prop("disabled", true);

            setTimeout(() => {
                $btnText.show();
                $spinner.hide();
                $submitBtn.prop("disabled", false);
                showNotification("Feedback submitted successfully through multi-step wizard!");
                $feedbackForm[0].reset();
                currentStep = 1;
                showStep(currentStep);
            }, 2000);
        });
    }
});