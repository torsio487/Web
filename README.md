[deadlock_wiki_readme.md](https://github.com/user-attachments/files/33164943/deadlock_wiki_readme.md)
# Deadlock Wiki Website

Welcome to the **Deadlock Wiki** project—a responsive, multi-page web application dedicated to Valve's hero-shooter, *Deadlock*. This wiki provides comprehensive information regarding gameplay mechanics, hero lore, tier lists, and feature galleries.

---

##  Authors & Team
Created by the **Golden Goose Egg Team**:
* **Alizan Talov** – Developer #1 (Characters & Paradox Pages)
* **Ruslan Suleimen** – Developer #2 (Home & Apollo Pages)

---

##  Key Features

* **Complete Multi-Page Structure:**
  * `index.html`: Main landing page featuring core game mechanics, featured hero overview, hover-activated snapshot gallery, and team details.
  * `characters.html`: Hero meta analysis, subjective tier list, and detailed attribute matrix table.
  * `apollo.html`: Hero focus spotlight on **Apollo**, including backstory, signature abilities, and gameplay previews.
  * `paradox.html`: Hero focus spotlight on **Paradox**, detailing time-manipulation lore, skill sets, and media.
  * `feedback.html`: Community engagement form allowing users to submit lore suggestions, bug reports, and hero guides.
* **Modern CSS Layouts:**
  * **CSS Grid:** Powers the overarching page layout (`.site-container` with header, sidebar, main content, footer) and the image gallery (`.gallery-grid`).
  * **Flexbox:** Drives the navigation menu, logo alignment, hero card rows, and form input stacks.
* **Fully Responsive Design:** Seamlessly adapts across Desktop, Laptop, Tablet, and Mobile viewport sizes.

---

##  Responsiveness & Breakpoints

The project includes multi-tiered CSS `@media` queries in `css/style.css` to guarantee a fluid user experience on any device:

1. **Desktops (> 1200px):** Two-column grid with fixed 260px sidebar and spacious card layouts.
2. **Laptops (993px – 1200px):** Optimized sidebar width (220px) and tighter flex gap adjustments.
3. **Tablets (577px – 992px):** Card items flex into a 2x2 grid structure; layouts shift smoothly on narrow tablet screens.
4. **Mobile Devices (<= 576px):**
   * Single-column vertical layout (`sidebar` shifts under `main`).
   * Gallery collapses to 1 column.
   * Navigation menu switches to full-width stacked touch buttons.
   * Tables enable horizontal scrolling (`overflow-x: auto`) to prevent UI breaking.
5. **Extra Small Screens (<= 400px):** Typography and buttons scaled down for compact mobile screens.

---

##  Project Structure

```text
.
├── index.html          # Main landing page
├── characters.html     # Hero list, meta table & tier list
├── apollo.html         # Apollo hero spotlight
├── paradox.html        # Paradox hero spotlight
├── feedback.html       # User feedback form
└── css/
    └── style.css       # Unified stylesheet with grid, flexbox & media queries
```

---

##  Built With

* **HTML5** – Semantic structure (`<header>`, `<aside>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<form>`)
* **CSS3** – CSS Grid, Flexbox, custom variables/styles, and CSS Transitions/Transform hover effects.

---
