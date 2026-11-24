# Gopisri M — Portfolio (React)

A React version of your portfolio, converted from
`https://gopisri200729-hue.github.io/portfolio/` into reusable components,
with a cybersecurity-inspired dark theme (terminal-style section labels,
green/blue accent colors, monospace details).

## How to open and run this in VS Code

1. **Unzip** this folder anywhere on your computer.
2. Open **VS Code** → `File → Open Folder...` → select the `portfolio-react`
   folder.
3. Open a terminal inside VS Code: `Terminal → New Terminal`.
4. Install dependencies (only needed once):
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm start
   ```
6. Your browser will open automatically at `http://localhost:3000`.
   Any change you save in VS Code will refresh the page instantly.

> You need **Node.js** installed first. If `npm` is not recognized in the
> terminal, download Node.js (LTS version) from https://nodejs.org and
> restart VS Code.

## Building for deployment (e.g. GitHub Pages)

```bash
npm run build
```

This creates a `build/` folder with the final static site, which you can
deploy the same way you deployed your current GitHub Pages site.

## What to personalize

- **Photo**: replace the initials avatar in `src/components/Hero/Hero.js`
  (`<div className="hero__avatar">GM</div>`) with an `<img>` tag pointing to
  your own photo placed in the `public/` folder.
- **Contact form**: the form currently opens the visitor's email app with a
  pre-filled message (via `mailto:`), since this is a front-end-only React
  app with no backend server. If you later want it to send messages without
  opening an email app, you can connect it to a service like Formspree or
  EmailJS.
- **Content**: all text lives directly inside each component file (e.g.
  `src/components/Skills/Skills.js`) — edit the arrays at the top of each
  file to update skills, certifications, or projects.

## Folder structure

```
portfolio-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Certifications/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

Each component has its own `.js` and `.css` file, matching how the original
sections (Home, About, Skills, Projects, Contact) were laid out.
