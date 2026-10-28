# Deadlock Wiki - Advanced JavaScript & DOM Manipulation Project

## Project Overview
This project is an interactive web application dedicated to Valve's hero-shooter game Deadlock. Developed as part of Assignment 5 for the Frontend Development course at Astana IT University, the project demonstrates advanced JavaScript principles, dynamic DOM manipulation, asynchronous event handling, synthesized audio effects, and modern CSS layout techniques.

## Team Information
* **Team Name:** Golden Goose Egg
* **Team Members:**
  * Alizan Talov
  * Ruslan Suleimen

## Key Features Implemented

### Part 1: Advanced JavaScript & DOM Manipulation
1. **Dynamic Style & Theme Changes:**
   * Live theme background switcher modifying CSS properties dynamically without breaking application layout.
   * Day/Night contrast styling and element-level highlighting.

2. **Interactive Rating System:**
   * Star rating component created using `document.querySelectorAll`.
   * Real-time dynamic updates of selected rating values and visual feedback on star hover/selection.

3. **Role-Based Content Filtering:**
   * Interactive category filter buttons utilizing higher-order array methods (`filter`, `forEach`) and JavaScript objects.
   * Logical execution flow controlled by `switch` statements to toggle gallery visibility according to selected hero roles (Duelist, Tank, Initiator, or All).

4. **Event Handling & Keyboard Navigation:**
   * Asynchronous event listeners integrated across all interactive components.
   * Full keyboard navigation support allowing users to tab through menu links using the Left and Right Arrow keys (`ArrowLeft`, `ArrowRight`).

5. **Form Validation & Asynchronous Interactions:**
   * Feedback form validation including email format verification, regex-based password strength requirements, and password confirmation matching.
   * Dynamic error feedback messages rendered directly in the DOM without reloading the page.
   * Instant form resetting logic using DOM node iteration.

6. **Synthesized Audio Effects:**
   * Sound feedback generated using the native browser Web Audio API (`AudioContext`).
   * Custom audio cues played on button clicks, filter selections, and star rating interactions.

7. **Modal Overlay & Dynamic Widgets:**
   * Popup subscription modal triggered via event listeners with outside-click dismissal support.
   * Real-time live digital clock updating every second using JavaScript `Date` objects and intervals.

## Project Structure
* `index.html` - Primary landing page containing the hero showcase, gallery, filter controls, accordion FAQ, and subscription modal.
* `characters.html` - Detailed hero breakdown, tier rankings, and attribute tables.
* `apollo.html` - Dedicated hero profile page for Apollo.
* `paradox.html` - Dedicated hero profile page for Paradox.
* `feedback.html` - Interactive user feedback submission form with real-time validation.
* `css/style.css` - Centralized stylesheet incorporating CSS Grid, Flexbox, layout transitions, and element animations.
* `js/script.js` - Main JavaScript file containing all interactive logic, DOM handlers, audio synthesis, and validation routines.

## Deployment
The project is deployed via GitHub Pages / Netlify and can be accessed online at the deployed project URL specified in the project report.
