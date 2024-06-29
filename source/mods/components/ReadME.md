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
