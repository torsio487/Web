# Deadlock Wiki - jQuery & Interactive UX Features Project

## Project Overview
This project is an interactive web application dedicated to Valve's hero-shooter game Deadlock. Upgraded as part of Assignment 6 for the Frontend Development course at Astana IT University, the project introduces jQuery for DOM manipulation, real-time live search, interactive UX elements, multi-step form wizard, lazy loading, and enhanced asynchronous feedback mechanisms.

## Team Information
* **Team Name:** Golden Goose Egg
* **Team Members:**
  * Alizan Talov
  * Ruslan Suleimen

## Key Features Implemented

### Task 0 & Setup
* Integration of **jQuery 4.0.0 CDN** inside the HTML `<head>`.
* Initialization of `$(document).ready()` inside `js/script.js` to ensure reliable DOM setup.

### Part 1: jQuery Search & Filtering
1. **Real-time Search & Live Filter (Task 1):**
   * Instant keyword filtering on lists and elements using jQuery keyup events and `.filter()`.
2. **Autocomplete Search Suggestions (Task 2):**
   * Dynamic suggestions dropdown menu rendered beneath the search bar as users type.
3. **Search Highlighting (Task 3):**
   * Programmatic text highlighting that wraps search term matches in styled tags across page content.

### Part 2: UX Engagement Elements
1. **Colorful Scroll Progress Bar (Task 4):**
   * Top-positioned horizontal progress indicator tracking page scroll position.
2. **Animated Number Counter (Task 5):**
   * Smooth number counter animation for key stats (e.g., total hero counts).
3. **Loading Spinner on Submit (Task 6):**
   * Submit button state updates showing a loading spinner and disabled state during processing.

### Part 3: Web Application Functionality
1. **Toast Notification System (Task 7):**
   * Temporary pop-up toast alerts providing immediate feedback for user actions.
2. **Copy to Clipboard Button (Task 8):**
   * Quick-copy snippet buttons updating text/icons upon successful copy.
3. **Image Lazy Loading (Task 9):**
   * Optimized media loading that loads images (`data-src`) only when scrolled into view.

### Additional Custom Requirements
1. **Dark/Light Theme Toggle:**
   * Global toggle switch substituting basic background changes with dark and light themes.
2. **Multi-Step Feedback Form:**
   * A 3-stage step-by-step feedback wizard with Back/Next navigation and step indicators.
3. **Timed Greeting Popup:**
   * Automatic welcome subscription modal popping up after a brief time delay.
4. **Specific Hero Ratings:**
   * Individual hero rating widgets on the home page (`index.html`).

## Project Structure
* `index.html` - Main landing page featuring hero spotlights, specific hero ratings, timed welcome modal, and gallery.
* `characters.html` - Roster overview with real-time live search and autocomplete filtering.
* `apollo.html` - Dedicated page for Apollo featuring copy-to-clipboard lore snippets.
* `paradox.html` - Dedicated page for Paradox with copy-to-clipboard features.
* `feedback.html` - Multi-step feedback wizard form with step validation and animated submit state.
* `css/style.css` - Stylesheet with CSS Grid/Flexbox, light/dark themes, scroll progress bar, and spinners.
* `js/script.js` - Main JavaScript file powered by jQuery for DOM logic, search features, scroll tracking, and modals.

## Deployment
The project is deployed and accessible via the URL specified in the submission report.
