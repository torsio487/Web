# Deadlock Wiki - Final Version & Interactive Features

## Project Overview
This project is an interactive, multi-page responsive web application dedicated to Valve's upcoming hero-shooter game **Deadlock**[cite: 10]. Developed by the **Golden Goose Egg** team as a collaborative frontend project, it features advanced jQuery DOM manipulation, persistent themes, authentication simulation, external API integration, multi-step feedback wizards, live search filtering, and dynamic hero ratings.

## Team Information
* **Team Name:** Golden Goose Egg[cite: 10]
* **Team Members:**
  * Alizan Talov (Developer #1)[cite: 4]
  * Ruslan Suleimen (Developer #2)[cite: 4]
  * **Contact Email:** GoldenGooseEgg@gmail.com[cite: 4]

## Key Features & Final Additions

### 1. Theme Persistence & Styling
* **Persistent Light/Dark Theme:** Remembers user preference across page navigation via `localStorage`[cite: 10].
* **Refined Light Theme Colors:** Adjusted text and header highlights in light mode for optimal design contrast and readability[cite: 10].

### 2. Authentication & User Profile (New)
* **Sign Up & Log In Simulation:** Simulates user registration and login securely using browser `localStorage`[cite: 8].
* **Dedicated Profile Page (`profile.html`):** Displays stored account details (name, email, creation date) for authenticated users.

### 3. External API Integration (New)
* **Live Community & Dev Feed:** Retrieves and displays dynamic updates from a public API using `fetch()` with built-in loading spinners and error handling[cite: 8].

### 4. Interactive Modals & Forms
* **Permanent Welcome Modal:** Automatically appears after a delay and permanently closes upon dismissal or subscription (`localStorage`)[cite: 10].
* **Multi-Step Feedback Wizard:** A 3-stage form with field validation, animated loading spinner on submit, and functional reset triggers on all steps[cite: 10].

### 5. Search, Roster & Hero Pages
* **Expanded Hero Roster:** Includes dedicated pages for **Apollo**, **Paradox**, and the newly added **Victor**, matching consistent design layouts.
* **Enhanced Live Search & Filtering:** Instantly filters text lists and the `Hero Attribute Matrix` table in real time with autocomplete dropdown suggestions[cite: 10].
* **Interactive Hero Ratings:** Dynamic star-rating system to evaluate individual heroes with instant feedback[cite: 10].

### 6. General UX Enhancements
* **Fixed Image Lazy Loading:** Optimized media loading as elements enter the viewport[cite: 10].
* **Copy-to-Clipboard Integration:** Quick-copy buttons for hero lore snippets and the team's contact email[cite: 10].
* **Scroll Progress Bar & Live Clock:** Dynamic top progress tracker and live timezone clock widget in the sidebar[cite: 10].

## Project Structure
* `index.html` - Home landing page featuring live API community updates, hero spotlights, and rating selectors.
* `characters.html` - Character roster featuring synchronized list and table live search filtering.
* `apollo.html` - Dedicated lore and ability guide for Apollo.
* `paradox.html` - Dedicated lore and ability guide for Paradox.
* `victor.html` - Dedicated lore and ability guide for the newly added hero Victor.
* `feedback.html` - 3-step interactive feedback form wizard with validation and step indicators.
* `profile.html` - User profile page handling authentication simulation and account details.
* `css/style.css` - Responsive stylesheet handling CSS Grid, flexboxes, light/dark theme variables, and custom UI components[cite: 10].
* `js/script.js` - jQuery-powered core logic managing themes, local storage, search filtering, lazy loading, modals, authentication, and API requests[cite: 10].
