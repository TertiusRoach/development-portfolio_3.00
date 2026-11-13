# [Development Portfolio 3.00](https://tertiusroach.github.io/development-portfolio_3.00/public/index.html)

The résumé rebuilt in React, from 7 June to 1 July 2024. Three days later, 4.00 began.

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#how-the-page-is-built">How the Page Is Built</a></li>
    <li><a href="#what-changed-in-2026">What Changed in 2026</a></li>
  </ol>
</details>

---

## About The Project

One page, four screens: **Home → Skills → Career → Contact.**

- **Home**: the pitch, and a profile picture made of particles that scatter from your mouse. Click it to see the plain photo.
- **Skills**: six groups, each skill rated out of ten.
- **Career**: seven stories, oldest first.
- **Contact**: email, GitHub, LinkedIn, YouTube and the CV.

Landscape and portrait are two separate designs. The tablet layout was dropped on 1 July 2024: _"It messed with the REACT hooks."_

## Built With

- [React](https://react.dev/) 18 and [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/) with [Bootstrap](https://getbootstrap.com/) underneath
- [webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/)
- [react-responsive](https://github.com/yocontra/react-responsive) to tell landscape from portrait
- [jQuery](https://jquery.com/) for the scrolling. _"jQuery gets the job done! Deal with it...for now."_

## Getting Started

You need [Node.js](https://nodejs.org/en) (version 20 or newer).

```sh
git clone https://github.com/TertiusRoach/development-portfolio_3.00.git
cd development-portfolio_3.00
npm install
sudo sysctl net.ipv4.ip_unprivileged_port_start=55
npm start
```

The page runs on port 55. Linux only lets normal users open ports from 1024 up, so the `sudo` line lowers that limit until the computer restarts. Run it once after each restart.

| Command          | What it does                                      |
| ---------------- | ------------------------------------------------- |
| `npm start`      | Serve on http://localhost:55 and open a browser   |
| `npm run launch` | The same, without opening a browser               |
| `npm run deploy` | Build into `public/` for GitHub Pages             |

`public/` is committed on purpose: GitHub Pages serves it as it is.

## How the Page Is Built

The full walkthrough, from clone to website, is in [source/utilities/document/PROCESS.md](source/utilities/document/PROCESS.md). Every folder is in [STRUCTURE.md](source/utilities/document/STRUCTURE.md). The short version:

```
source/
├── pages/index/          the page: index.tsx renders the six blocks
│   ├── header/  main/  footer/  overlay/  leftbar/  rightbar/
│   └── main/default-main/default-text.ts   every word on the page
└── mods/
    ├── containers/       the header and footer
    └── components/       sections, buttons, anchors and the canvas
└── utilities/            document/, vendors/, and the experiments the canvas came from
```

Every section gets its text through a `tag` prop, so the words never live inside a component. Each component asks `useMediaQuery` once whether the screen is landscape, and its SCSS has one mixin per orientation.

Images load from `public/content/`, so the page works offline and on any branch.

## What Changed in 2026

The original ideas stayed. Every change is its own commit on the `homage` branch.

- **Skills, Career and Contact are built.** Only Home existed. The ratings and career stories come word for word from [development-portfolio_2.00](https://github.com/TertiusRoach/development-portfolio_2.00).
- **The canvas question is answered.** A comment in `Section.home.tsx` asked: _"ref={loadCanvas} dissappears when I rotate the screen. How can I tell react to reload the canvas when the screen is rotated?"_ The effect ran once, with `[]`. It now runs again whenever the orientation changes, and each canvas stops its own animation when it goes.
- **The buttons work.** "My Career" and "Contact Me" only logged their name; the header and footer buttons were commented out.
- **2,049 lines became one.** Every section height had its own `@media (height: Npx)` rule, and whole pixels never matched a zoomed browser.
- **25 unused packages are gone,** including `babel-preset-es201`, a typo of `es2015` that npm keeps as a security placeholder.
- **Pruned.** About 10,000 files the page never used: the full Font Awesome set, GIMP working files, spare logo colours, Bootstrap's docs and six unused components.
- **Documented.** `source/utilities/document/` explains the whole process.
- **No password in the code.** The MongoDB study reads its address from `MONGO_URI`.
- **Photoshop files removed.** They're still in the original release.

---

[Design Syntax](https://www.compart.com/en/unicode/block/U+25A0)
[🠉](https://www.compart.com/en/unicode/U+1F809)
[🠊](https://www.compart.com/en/unicode/U+1F80A)
[🠋](https://www.compart.com/en/unicode/U+1F80B)
[🠈](https://www.compart.com/en/unicode/U+1F808)
