# கொடை — Kodai Tamil Gift Ecommerce UI

A beautiful Tamil Nadu–themed gift ecommerce UI built with **React + Vite + Tailwind CSS**.

---

## 🚀 Quick Start

### Step 1 — Install Dependencies

```bash
npm install
```

### Step 2 — Start Dev Server

```bash
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to `/dist` folder — ready to deploy on Vercel, Netlify, etc.

---

## 🗂️ Project Structure

```
kodai-gifts/
├── index.html                  ← Entry HTML (Google Fonts loaded here)
├── vite.config.js              ← Vite config
├── tailwind.config.js          ← Custom Tamil theme colors & fonts
├── postcss.config.js           ← PostCSS (required by Tailwind)
├── package.json
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Root component (assembles everything)
    ├── index.css               ← Tailwind base + custom animations
    └── components/
        ├── Cursor.jsx          ← Custom golden cursor
        ├── Header.jsx          ← Sticky navigation bar
        ├── Hero.jsx            ← Full-screen hero section
        ├── Marquee.jsx         ← Scrolling craft highlight banner
        ├── Categories.jsx      ← 6-category shop grid
        ├── Products.jsx        ← 4 featured product cards
        ├── Occasions.jsx       ← Festival/occasion selector
        ├── Featured.jsx        ← Curated gift box collections
        ├── Testimonials.jsx    ← Customer reviews
        └── Footer.jsx          ← Site footer
```

---

## 🎨 Custom Tailwind Colors

Defined in `tailwind.config.js`:

| Token         | Hex       | Usage                    |
|---------------|-----------|--------------------------|
| `kolam-red`   | `#C0392B` | Primary accent, header   |
| `turmeric`    | `#E8A30A` | Highlights, labels       |
| `silk-gold`   | `#D4A843` | Prices, borders, logo    |
| `dark-earth`  | `#1C0F0A` | Background               |
| `cream`       | `#FAF3E0` | Text color               |
| `peacock`     | `#1A6B5E` | Secondary accent         |

## 🔤 Custom Fonts

| Token        | Font                 | Usage              |
|--------------|----------------------|--------------------|
| `font-playfair`  | Playfair Display | Headings, prices   |
| `font-cormorant` | Cormorant Garamond | Body text, italic  |
| `font-tamil`     | Noto Sans Tamil  | Tamil script, labels |

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite 5** — Lightning fast dev server & bundler
- **Tailwind CSS 3** — Utility-first styling
- **PostCSS + Autoprefixer** — CSS processing
- **Google Fonts** — Playfair Display, Cormorant Garamond, Noto Sans Tamil

---

## ✨ Features

- 🖱️ Custom golden cursor with ring trail
- 🎬 Scroll-triggered fade-up animations (IntersectionObserver)
- 📢 Auto-scrolling marquee banner
- 🃏 Hover-reveal "Add to Cart" on product cards
- 🏮 Kolam dot grid animation
- 🌟 Floating badge animation
- 📱 Tamil script throughout (bilingual UI)
- 🎨 Dark luxe editorial aesthetic

---

## 📝 License

Free to use and customize for your projects.
