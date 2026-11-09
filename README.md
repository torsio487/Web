# Deadlock Wiki - Updated Interactive Features & Fixes

## Project Overview
This project is an interactive community web application dedicated to Valve's hero-shooter game **Deadlock**. Developed as part of the collaborative frontend project by the **Golden Goose Egg** team, it features advanced jQuery DOM manipulation, persistent themes, multi-step form workflows, live search filtering, and dynamic hero rating systems.

## Team Information
* **Team Name:** Golden Goose Egg
* **Team Members:**
  * Alizan Talov (Developer #1)
  * Ruslan Suleimen (Developer #2)
  * **Contact Email:** GoldenGooseEgg@gmail.com

## Key Features & Recent Updates

### 1. Theme Persistence & Styling
* **Persistent Light/Dark Theme:** Remembers user preference across page navigation via `localStorage`.
* **Refined Light Theme Colors:** Adjusted text and header highlights in light mode for optimal readability.

### 2. Interactive Modals & Forms
* **Permanent Welcome Modal:** Automatically appears after a delay and permanently closes upon dismissal or subscription (`localStorage`).
* **Multi-Step Feedback Wizard:** A 3-stage form with field validation, animated loading spinner on submit, and a fully functional **Reset Form** button on all steps.
* **Subscribe to Wiki Button:** Instantly opens the welcome/subscription modal.

### 3. Search & Roster Features
* **Enhanced Live Search & Filtering:** Instantly filters both text lists and the `Hero Attribute Matrix` table in real time alongside autocomplete dropdown suggestions.
* **Specific Hero Ratings:** Interactive dropdown and star-rating system to evaluate individual heroes (`Apollo`, `Paradox`, `Wraith`, `Celeste`, `Infernus`, `Mo & Krill`).

### 4. General UX Enhancements
* **Fixed Image Lazy Loading:** Optimized media loading as elements enter the viewport.
* **Copy-to-Clipboard Integration:** Quick-copy buttons for lore snippets and the team's contact email.
* **Scroll Progress Bar & Live Clock:** Dynamic top progress tracker and live timezone clock widget in the sidebar.

## Project Structure
* `index.html` - Home landing page with feature overviews, hero spotlights, and specific hero rating selectors.
* `characters.html` - Character roster with synchronized list and table live search filtering.
* `apollo.html` & `paradox.html` - Dedicated hero lore pages with copy-to-clipboard snippet buttons.
* `feedback.html` - 3-step feedback form wizard with step indicators, validation, and reset triggers.
* `css/style.css` - Responsive stylesheet handling CSS Grid, flexboxes, dark/light theme variables, and custom UI components.
* `js/script.js` - jQuery-powered core logic managing themes, local storage, search filtering, lazy loading, and modals.
