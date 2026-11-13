# The Process, Top to Bottom

How development-portfolio_3.00 goes from source files to a website, in the order it happens. Read it once from the top and you can change anything in this project.

| Document                       | What it covers                                    |
| ------------------------------ | ------------------------------------------------- |
| **PROCESS.md**                 | This file: setup, build, rendering, changing things |
| [STRUCTURE.md](STRUCTURE.md)   | Every folder, and the 2024 plan it grew from      |

---

## 1. Set Up

You need [Node.js](https://nodejs.org/en) 20 or newer, and Git.

```sh
git clone https://github.com/TertiusRoach/development-portfolio_3.00.git
cd development-portfolio_3.00
npm install
sudo sysctl net.ipv4.ip_unprivileged_port_start=55
npm start
```

The page runs on **http://localhost:55**. On Linux a normal user can only open ports from 1024 up, so the `sudo` line lowers that limit until the computer restarts. Run it once after every restart. If you'd rather skip it, change `port: 55` in `webpack.config.js` to any number from 1024 up.

| Command          | What it does                                     |
| ---------------- | ------------------------------------------------ |
| `npm start`      | Serve on http://localhost:55 and open a browser  |
| `npm run launch` | The same, without opening a browser              |
| `npm run deploy` | Build into `public/` for GitHub Pages            |
| `npx tsc --noEmit -p tsconfig.json` | Check the TypeScript (0 errors) |

While `npm start` runs, every save rebuilds the page in memory and the browser reloads. Nothing is written to `public/` until `npm run deploy`.

---

## 2. The Build (webpack)

[webpack.config.js](../../../webpack.config.js) starts at one file, `source/pages/index/index.tsx`, and follows every `import`:

| File type     | Handled by                       | Ends up in          |
| ------------- | -------------------------------- | ------------------- |
| `.ts`, `.tsx` | Babel (TypeScript and React)     | `public/index.js`   |
| `.scss`       | Sass, then pulled out of the JS  | `public/style.css`  |
| `index.html`  | Copied, with the two files linked in | `public/index.html` |

A `.scss` file only reaches `style.css` if some `.tsx` or `.scss` file imports it. A stylesheet nobody imports does nothing.

Babel only strips the types out; it doesn't check them. **TypeScript errors don't stop the build,** so run `npx tsc --noEmit` before you deploy.

Images aren't bundled. They sit in `public/content/` and the page asks for them by path (`content/png-files/...`), so they work offline, on any branch and on GitHub Pages.

---

## 3. What Happens in the Browser

1. `index.html` shows the loading animation and an empty `<div id="index-body">`.
2. `index.js` runs [index.tsx](../../pages/index/index.tsx), which renders `<Body>` into that div.
3. `<Body>` renders six blocks: Header, Main, Footer, Overlay, Leftbar, Rightbar. Each one gets the same two words: `page` ("index") and `label` ("default").
4. Each block's file (`Main.tsx` and so on) picks a design by `label`. `Main` picks [default-main.tsx](../../pages/index/main/default-main/default-main.tsx). `Header` and `Footer` pick the résumé containers in `mods/containers/`.
5. Once everything is on screen, `<Body>` removes the loading animation.

Every block ends up as an element with the id `<page>-<block>` (`#index-main`) and the class `<label>-<block>` (`.default-main`). The SCSS hangs off those two names.

---

## 4. The Layout

```
┌─────────────── header (z-index 4) ───────────────┐
│ logo        Home   Skills   Career   Contact     │
├──────────────────────────────────────────────────┤
│                                                  │
│   main (z-index 0): scrolls through 4 sections,  │
│   each exactly one screen tall                   │
│   Home → Skills → Career → Contact               │
│                                                  │
├─────────────── footer (z-index 3) ───────────────┤
│                         GitHub  LinkedIn  YouTube │
└──────────────────────────────────────────────────┘
```

- **`<main>` fills the whole screen,** and the header and footer sit on top of it, see-through and blurred. Each section leaves room for them with padding.
- **Every section is one screen tall** (`100vh`, then `100dvh` for phones). That's what keeps the scrolling simple: section number × screen height = where it starts.
- **Long content scrolls inside its section.** Career's cards scroll sideways in landscape and downwards in portrait, so the page never grows.
- **Two designs, not one stretched design.** Landscape and portrait each have their own layout. Portrait swaps the header buttons for icon buttons in the footer.

---

## 5. Inside a Section

Every section works the same way. Here is Skills:

```tsx
<ConSectionSkills
  className="skills"            // its name, and its first class
  view="hidden"                 // only Home starts as "visible"
  tag={skillsText}              // its words, from default-text.ts
  onMouseClick={scrollToSection}
  onMouseHover={activateButtons}
/>
```

Inside [Section.skills.tsx](../../mods/components/section/skills/Section.skills.tsx):

1. `useMediaQuery` asks once whether the screen is in landscape.
2. The `<div>` gets `desktop-landscape` or `mobile-portrait` as a class.
3. The [.scss](../../mods/components/section/skills/Section.skills.scss) has one mixin per orientation, each starting with `&[class*='landscape']` or `&[class*='portrait']`.

Words never live inside a component. They come in through `tag`, so changing the text means editing one file: [default-text.ts](../../pages/index/main/default-main/default-text.ts).

---

## 6. Moving Around

| What you do                         | What runs                                                        |
| ----------------------------------- | ---------------------------------------------------------------- |
| Click a header or footer button     | `scrollSections('career')` scrolls `<main>` to `section.career`  |
| Click "My Career" or "Contact Me"   | The same: the button's class `career-button` becomes `career`    |
| Scroll or swipe                     | `followScroll` works out which section fills the screen          |
| Move the mouse into a section       | `activateButtons` marks that section                             |
| Click inside a section              | `scrollToSection` lines that section up with the screen          |

Whichever way you get there, it ends in `activateSection(name)` in [scrollSections.ts](../../mods/components/section/scrollSections.ts): the buttons call it straight away, and anything that scrolls `<main>` reaches it through `followScroll`. It gives that section `.visible` and the rest `.hidden`, and gives its header and footer buttons `.active`. The SCSS decides what `.active` looks like; the scripts never set a style themselves.

---

## 7. The Particle Picture

[Canvas.propel.ts](../../mods/components/canvas/Canvas.propel.ts) draws the profile photo, reads its pixels and turns every 6th pixel into a dot. Each frame:

- dots near the mouse are pushed away, and
- the rest drift back to where they belong.

Two things to know if you touch it:

- **The mouse is scaled.** The dots live in the photo's own pixels, but CSS stretches the canvas to fit the screen. The mouse position is multiplied by (photo size ÷ size on screen) so the two line up.
- **It hands back an off switch.** Turning the screen removes the canvas and builds a new one. `Section.home.tsx` re-runs the effect whenever `landscape` changes, and React calls the returned function to stop the old animation first.

---

## 8. Changing Things

| You want to…                  | Do this                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------- |
| Change any text               | [default-text.ts](../../pages/index/main/default-main/default-text.ts)          |
| Add or re-rate a skill        | One `[name, logo file, rating]` row in `skillsText`, and its logo in `public/content/png-files/main-skills/original-logos/` |
| Add a job                     | One entry in `careerText.jobs`, and its logo in `public/content/png-files/main-employment/` |
| Change the email or a link    | `contactText.links`. The footer reads the same list                            |
| Change a colour               | [color-palette.scss](../../pages/color-palette.scss)                            |
| Add a header/footer button    | `sectionButtons` in `Header.resume.tsx`, then a grid column in both `.scss` files |

**Adding a section** (call it `projects`):

1. Copy `mods/components/section/career/` to `section/projects/`, and rename the files and everything named `career` inside them.
2. Add its words to `default-text.ts`, with an `interface` for their shape.
3. Add `<ConSectionProjects ... />` to `default-main.tsx` where it should appear.
4. Add `['projects', 'Projects', icon]` to `sectionButtons`, and a column for it in `Header.resume.scss` and `Footer.resume.scss`.
5. `npx tsc --noEmit -p tsconfig.json`, then look at it in both orientations.

---

## 9. Publishing

GitHub Pages serves `main` as it is, and the page lives at `public/index.html`. That's why `public/` is committed.

```sh
npx tsc --noEmit -p tsconfig.json
npm run deploy
git add -A
git commit -m "What changed"
git push
```

The website updates a minute or two after the push: https://tertiusroach.github.io/development-portfolio_3.00/public/index.html

---

## 10. Where This Version Fits

| Version              | When                | Stack                               |
| -------------------- | ------------------- | ----------------------------------- |
| portfolio-projects   | 2022                | HTML, CSS, JavaScript (Udemy)       |
| web-development_1.00 | 2023                | Course notes                        |
| 2.00                 | Dec 2023 → Apr 2024 | gulp, RequireJS, TypeScript, jQuery |
| **3.00 (this one)**  | Jun → Jul 2024      | webpack, React, TypeScript          |
| 4.00 (TraLogFin)     | Jul 2024 →          | React, Express, MongoDB             |

3.00 was the move from gulp to webpack and React, the stack that stuck. It kept 2.00's ideas: six named blocks, state classes, separate landscape and portrait designs. Three days after its last commit, 4.00 began.
