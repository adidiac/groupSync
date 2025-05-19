# GroupSync Landing Page

🖥️ **Live Demo:** https://adidiac.github.io/groupSync

A sleek, futuristic black-and-white landing page for **GroupSync**, the ultimate group-planning app. Built with React, Styled-Components, and deployed via GitHub Pages, this repo showcases features like split-bill scanning, movie-night voting, BBQ planning, shared memories, and group task management.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Figma & Uizard Prototype](#figma--uizard-prototype)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Repository Structure](#repository-structure)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
  - [Deployment (GitHub Pages)](#deployment-github-pages)  
- [Customizing](#customizing)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

**GroupSync** helps friends and families:

- 📸 **Snap & Split Bills:** Scan receipts and instantly divide costs.  
- 🎬 **Movie Night:** Swipe to vote on movies as a group.  
- 🍖 **BBQ Planner:** Propose, vote, and finalize cookout items.  
- 📸 **Share Memories:** Upload and react to group photos and clips.  
- ✅ **Group Tasks:** Assign and track tasks for each member.

The landing page features:

- A **100vh Hero** with dark overlay and futuristic background.  
- **Feature blocks** with autoplaying, looping demo videos and rich descriptions.  
- **Angled white dividers** for dynamic section transitions.  
- An **embedded Uizard prototype** for live preview.  
- **Smooth scrolling** from “Watch Overview” to features.  
- Additional sections: How It Works, Team, Testimonials, FAQ, Newsletter, Call-to-Action, and Footer.

![Landing Page Screenshot](./docs/screenshot.png)

---

## Figma & Uizard Prototype

- **Figma UI Mockup:** [View on Figma](https://www.figma.com/file/…)  
- **Uizard Interactive Prototype:** Embedded live in the “Live App Preview” section.

---

## Features

1. **Snap & Split Bills**  
   - OCR receipt scanning  
   - Assign line items to members  
   - Auto-calculate tip & tax  

2. **Movie Night**  
   - Swipe right to add, left to skip  
   - Real-time group consensus  
   - Progress indicator  

3. **BBQ Planner**  
   - Chat-style item proposals  
   - Upvote/downvote suggestions  
   - One-click finalize  

4. **Share Memories**  
   - Upload photos & video clips  
   - Social feed with reactions  

5. **Group Tasks**  
   - Assign individual to-dos  
   - Real-time check-off  

6. **Live App Preview**  
   - Embedded Uizard iframe  
   - Mobile device mockup  

…and supporting sections like How It Works, Team, Testimonials, FAQ, Newsletter, and more!

---

## Tech Stack

- **React** (Create React App)  
- **Styled-Components** for CSS-in-JS  
- **GitHub Pages** (`gh-pages`) for hosting  
- **Smooth Scrolling** via CSS  
- **HTML5 `<video>`** autoplay, loop, muted  
- **Responsive Design** (flexbox, clamp, vw units)  

---

## Repository Structure

```text
groupsync-landing-page/
├── public/
│   ├── assets/
│   │   ├── hero-bg.png
│   │   ├── team/
│   │   │   ├── alice.jpg
│   │   │   ├── bob.jpg
│   │   │   └── clara.jpg
│   │   └── icons/
│   ├── videos/
│   │   ├── splitbill.mp4
│   │   ├── movienight.mp4
│   │   ├── bbqplanner.mp4
│   │   ├── memories.mp4
│   │   └── tasks.mp4
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── FeatureBlock.js
│   │   ├── Divider.js
│   │   ├── PreviewIframe.js
│   │   ├── HowItWorks.js
│   │   ├── Team.js
│   │   ├── Testimonials.js
│   │   ├── FAQ.js
│   │   ├── Newsletter.js
│   │   ├── CallToAction.js
│   │   └── Footer.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
