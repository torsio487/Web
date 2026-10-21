# Deadlock Fan Wiki

A community-driven wiki website for Valve's hero shooter game Deadlock, developed as part of Assignment #4: Introduction to JavaScript.

---

## Team Information

* **Team Name:** Golden Goose Egg Team
* **Group:** [Your Group Name / Code]
* **Team Members:**
  * Alizan Talov (Developer #1)
  * Ruslan Suleimen (Developer #2)

---

## Project Overview

The Deadlock Fan Wiki is a multi-page web application providing detailed lore, hero statistics, and interactive media galleries for heroes like *Apollo*, *Paradox*, *Wraith*, and others. 

In this fourth assignment, dynamic client-side interactivity was implemented using vanilla JavaScript to enhance user experience and satisfy assignment guidelines.

---

## Features Implemented (Assignment #4)

1. **Form Validation (Task 1):**
   * Real-time and submit-time JavaScript validation for user input on `feedback.html`.
   * Checks for valid email address syntax.
   * Enforces minimum password length (6 characters) and verifies password confirmation matching.
   * Displays clear inline error messages.

2. **FAQ Accordion (Task 2):**
   * Interactive Q&A accordion section on the home page (`index.html`).
   * Smoothly toggles visibility of answers when clicking question headers.

3. **Popup Subscription Modal (Task 3):**
   * Dynamic modal dialog triggered by clicking the "Subscribe to Wiki" button in the sidebar.
   * Can be dismissed via a close button or by clicking anywhere outside the modal overlay.

4. **Dynamic Background Color Switcher (Task 4):**
   * Sidebar button that dynamically cycles the website's background color through a predefined dark theme palette using JavaScript DOM manipulation.

5. **Live Clock & Date Display (Task 5):**
   * A real-time widget embedded in the sidebar that displays the current formatted date and time (e.g., *"October 21, 2026, 07:49 PM"*) updated every second.

---

## Tech Stack

* **HTML5:** Semantic site structure and accessibility.
* **CSS3 & Bootstrap 5:** Custom styling, dark mode theme, Flexbox/Grid layouts, and responsive components.
* **JavaScript (ES6+):** DOM manipulation, event listeners, interval timers, and form validation.

---

## Project Structure

```text
.
├── css/
│   └── style.css            # Custom CSS styles (Grid, Flexbox, Modal, Accordion)
├── js/
│   └── script.js            # JavaScript file (Validation, Clock, Accordion, Modal, Bg Switcher)
├── images/                  # Local image assets
├── index.html               # Home Page (FAQ Accordion, Hero Gallery, Modal Structure)
├── characters.html          # Character Roster & Attribute Matrix
├── apollo.html              # Hero Spotlight: Apollo
├── paradox.html             # Hero Spotlight: Paradox
├── feedback.html            # User Feedback & Form Validation
└── README.md                # Project documentation
```

---

## Live Demo & Deployment

* **Deployed Website URL:** [https://github.com/torsio487/Web]