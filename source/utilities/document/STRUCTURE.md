# Folder Structure

Every folder and the files that matter, as the project stands. The 2024 plan it grew from is at the bottom.

```
development-portfolio_3.00/
├── public/                         # What GitHub Pages serves. Built by webpack: never edit by hand
│   ├── index.html                  # Copied from source/pages/index/index.html
│   ├── index.js                    # Every .ts and .tsx file, bundled
│   ├── style.css                   # Every .scss file, compiled
│   └── content/                    # Images, icons, the CV and the loading animation (edit these here)
│
├── source/
│   ├── pages/
│   │   ├── bootstrap.scss          # The parts of Bootstrap the page uses
│   │   ├── color-palette.scss      # Every colour, as a Sass variable
│   │   ├── global-styling.scss     # Fonts and resets for every element
│   │   └── index/                  # The page
│   │       ├── index.html          # The page's HTML: a loading animation and <div id="index-body">
│   │       ├── index.tsx           # Renders the six blocks into #index-body
│   │       ├── index.scss          # The body grid. Imports every block's .scss
│   │       ├── header/  footer/    # Header.tsx and Footer.tsx hand over to mods/containers/
│   │       ├── overlay/  leftbar/  rightbar/   # Empty blocks, ready for a design
│   │       └── main/
│   │           ├── Main.tsx        # Picks the <main> design by label
│   │           ├── Main.scss       # Every <section> is one screen tall
│   │           └── default-main/
│   │               ├── default-main.tsx   # The four sections, and the scroll logic
│   │               ├── default-main.scss  # The <section> grid for each orientation
│   │               └── default-text.ts    # Every word on the page
│   │
│   ├── mods/                       # Reusable pieces
│   │   ├── containers/             # Whole blocks: header/resume/, footer/resume/
│   │   └── components/
│   │       ├── section/            # home/, skills/, career/, contact/, scrollSections.ts
│   │       ├── button/             # glow/ (the home buttons), fade/ (header), icon/ (portrait footer)
│   │       ├── anchor/icon/        # The landscape footer's links
│   │       └── canvas/             # Canvas.propel.ts: the particle profile picture
│   │
│   └── utilities/
│       ├── document/               # You are here
│       ├── vendors/bootstrap/      # Bootstrap 5.3.3's SCSS source and licence
│       ├── animations/             # Experiments; propel-effect/ became the canvas
│       ├── projects/               # Course projects, kept for the record
│       └── ~flex-setup/  ~grid-setup/   # Flexbox and grid cheat sheets
│
├── package.json                    # npm start, npm run launch, npm run deploy
├── tsconfig.json                   # TypeScript checks (strict)
└── webpack.config.js               # The build, and the dev server on port 55
```

**Naming:** a component is `<Element>.<design>.tsx` with a matching `.scss` beside it: `Button.glow.tsx`, `Section.career.tsx`. A block's design is a folder named `<label>-<block>`: `default-main/`.

---

## The 2024 Plan

Written before the code, in its own words. Most of it came true: `mods/` for reusable pieces, one folder per HTML element, six blocks per page with fixed z-indexes. The `server/` folder never got built (that came in 4.00), and `tools/` is now `utilities/`.

```
root/
├── .vscode/
│ ├── launch.json/
│ └── tasks.json/
│
├── public/ # Final product for users
│ ├── content/ # Images, fonts used in components
│ ├── style.css # Should contain all the compiled _.scss files inside of source.
│ ├── main.js # Should contain all the compiled _.ts, _.tsx & _.jsx files inside of source.
│ └── index.html # Entry point for the application which is linked to style.css and main.js
│
├── server/
│ ├── data/ # Contains code that communicates with the database (chosen technology)
│ └── express/ # (or specific framework name) Contains back-end framework code (if applicable)
│
├── source/
│ ├── mods/ # Reusable components
│ │ ├── button/
│ │ │ ├── Button.default.tsx # Adds a <button> element
│ │ │ ├── # Add styles as the project expands
│ │ │ └── Button.module.scss # This will design all the <button> tags within this folder
│ │ ├── section/
│ │ │ ├── Section.default.tsx # Adds a <section> element
│ │ │ ├── # Add styles as the project expands
│ │ │ └── Section.module.scss # This will design all the <section> tags within this folder
│ │ ├── article/
│ │ │ ├── Article.default.tsx # Adds a <article> element
│ │ │ ├── # Add styles as the project expands
│ │ │ └── Article.module.scss # Designs for the <article> tag
│ │ └── # Add a folder for every HTML tag you design
│ │
│ ├── pages/ # Dynamic React, Sass, and TypeScript pages
│ │└── index/ # Specific page components
│ │ ├── index.ts
│ │ ├── index.scss
│ │ │
│ │ ├──body/
│ │ │ ├── Body.scss # Contains all the HTML elements listed below
│ │ │ ├── Body.tsx
│ │ │ └── default-body/ # <div style="display: grid;">
│ │ ├──overlay/
│ │ │ ├── Overlay.scss
│ │ │ ├── Overlay.tsx # This covers all the elements when active
│ │ │ └── default-overlay/ # <section style="z-index: 5">
│ │ ├──header/
│ │ │ ├── Header.scss
│ │ │ ├── Header.tsx # This element is always on the top
│ │ │ └── default-header/ # <header style="z-index: 4;">
│ │ ├── footer/
│ │ │ ├── Footer.scss
│ │ │ ├── Footer.tsx # This element is always on the bottom
│ │ │ └── default-footer/ # <footer style="z-index: 3;">
│ │ ├── leftbar/
│ │ │ ├── Leftbar.scss
│ │ │ ├── Leftbar.tsx # This element is always on the left
│ │ │ └── default-leftbar/ # <aside style="z-index: 2;">
│ │ ├── rightbar/
│ │ │ ├── Rightbar.scss
│ │ │ ├── Rightbar.tsx # This element is always on the right
│ │ │ └── default-rightbar/ # <aside style="z-index: 1;">
│ │ └── main/
│ │ ├── Main.scss
│ │ ├── Main.tsx # This element contains all the main info of a project
│ │ └── default-main/ # <main style="z-index: 0;">
│ │
│ └── tools/ # Helper functions (specific or generic)
│
├── README.md
├── .gitignore
├── package.json
├── tsconfig.json
├── package-lock.json
└── webpack.config.js
```
