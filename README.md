# Project Installation REACT in TypeScript

Clone this Repository with [Visual Studio](https://visualstudio.microsoft.com/) and launch with [Visual Studio Code](https://code.visualstudio.com/download) for testing.

> Check [Node.js]() version

    node --version

> Initialize TypeScript and Package

    npm init -y

> Install Webpack globally (Onto Operating System)

    npm install -g react
    npm install -g react-dom
    npm install -g typescript
    npm install -g webpack-cli
    npm install -g webpack-dev-server

> Install Webpack and related plugins (Inside Local Project)

    npm install --save-dev webpack
    npm install --save-dev webpack-cli
    npm install --save-dev webpack-dev-server
    npm install --save-dev copy-webpack-plugin
    npm install --save-dev html-webpack-plugin
    npm install --save-dev terser-webpack-plugin
    npm install --save-dev mini-css-extract-plugin
    npm install --save-dev css-minimizer-webpack-plugin

> Install REACT Features

    npm install --save-dev react-responsive

> Install loaders

    npm install --save-dev ts-loader
    npm install --save-dev css-loader
    npm install --save-dev sass-loader
    npm install --save-dev file-loader
    npm install --save-dev style-loader

    npm install --save-dev sass
    npm install --save-dev node-sass
    npm install --save-dev @types/react
    npm install --save-dev @types/react-dom
    npm install --save-dev extract-text-webpack-plugin

> jQuery

    npm install --save-dev jquery
    npm install --save-dev @types/jquery

> Babel

    npm install --save-dev babel-loader
    npm install --save-dev @babel/preset-react
    npm install --save-dev babel-preset-es2015
    npm install --save-dev @babel/preset-typescript

## My VSC Shortcuts

    View Sections: Ctrl + K + 0
    Launch Server: Ctrl + Shift + B
    Select Dropdown: Ctrl + Spacebar

### Design good comments.

//--| [🠉](https://www.compart.com/en/unicode/U+1F809) |--//
//--| [🠊](https://www.compart.com/en/unicode/U+1F80A) |--//
//--| [🠋](https://www.compart.com/en/unicode/U+1F80B) |--//
//--| [🠈](https://www.compart.com/en/unicode/U+1F808) |--//

### My Terminology

.active

.enabled / .disabled
.expanded / .collapsed
.highlight / .downplay

### Folder Layout

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
