# Reverse Odoo Challenge 🚀
**Technofutur TIC - Gosselies 2026**

Welcome to the **Reverse Odoo Challenge** repository! This project is a gamified, multi-level CTF (Capture The Flag) platform built with React, Vite, and React Router. Players navigate through a series of technical riddles and puzzles, interspersed with custom intern profiles, before unlocking the hardcore Act 2.

---

## 🏗️ Project Structure & Detailed Architecture

Here is the exact layout of the `src` directory and its components:

```text
src/
├── assets/              # Images and icons (react.svg, vite.svg, hero.png)
├── components/          # Reusable UI building blocks and templates
│   ├── AnswerForm.tsx
│   ├── ComponentLabel.tsx
│   ├── ContentAudio.tsx (+ css)
│   ├── ContentImage.tsx
│   ├── ContentText.tsx (+ css)
│   ├── ContentVideo.tsx (+ css)
│   ├── EnigmaHeader.tsx (+ css)
│   ├── Hint.tsx (+ css)
│   ├── InternProfileCard.tsx (+ css)
│   ├── InternTemplate.tsx (+ css)
│   ├── LevelTemplate.tsx (+ css)
│   ├── PopCultureBox.tsx
│   ├── ProfileStats.tsx
│   ├── ProjectCard.tsx
│   ├── ProtectedRoute.tsx
│   └── SkillBar.tsx
│
├── levels/              # Puzzle levels (Sandbox, Act 1, and Act 2)
│   ├── Level.css
│   ├── Level0.tsx       # Sandbox / Showcase level
│   ├── Level1.tsx ... Level11.tsx   # Act 1 levels
│   └── Level12.tsx ... Level22.tsx  # Act 2 (Hardcore) levels
│
├── pages/               # Transitional, static pages, and intern profiles
│   ├── FinalCongratulations.tsx
│   ├── OdooIntern0.tsx ... OdooIntern11.tsx  # Intern profile pages
│   ├── Rules.tsx        # Mission briefing / instructions page
│   └── TeamTransition.tsx # Transition between Act 1 and Act 2
│
├── App.tsx              # Main router configuration & state management (maxStep)
├── Home.tsx             # Landing page (+ Home.css)
├── index.css
└── main.tsx             # React entry point
```

---

## 👥 Participant Assignments (Act 1)

Each participant is assigned a unique number from **1 to 11**. The files you need to modify for your contributions are **strictly** limited to your assigned level (`LevelX.tsx`) and your associated intern profile (`OdooInternX.tsx`). In practice, you should not touch the rest of the core codebase.

### 📋 Assignment List :
- **Maxime C.** : Number **1** — Files to modify : `src/levels/Level1.tsx` and `src/pages/OdooIntern1.tsx`
- **Aaron** : Number **2** — Files to modify : `src/levels/Level2.tsx` and `src/pages/OdooIntern2.tsx`
- **Maxime W.** : Number **3** — Files to modify : `src/levels/Level3.tsx` and `src/pages/OdooIntern3.tsx`
- **Valentyn** : Number **4** — Files to modify : `src/levels/Level4.tsx` and `src/pages/OdooIntern4.tsx`
- **Jean-Baptiste** : Number **5** — Files to modify : `src/levels/Level5.tsx` and `src/pages/OdooIntern5.tsx`
- **Denis** : Number **6** — Files to modify : `src/levels/Level6.tsx` and `src/pages/OdooIntern6.tsx`
- **Jérôme** : Number **7** — Files to modify : `src/levels/Level7.tsx` and `src/pages/OdooIntern7.tsx`
- **Maxime N.** : Number **8** — Files to modify : `src/levels/Level8.tsx` and `src/pages/OdooIntern8.tsx`
- **Alex** : Number **9** — Files to modify : `src/levels/Level9.tsx` and `src/pages/OdooIntern9.tsx`
- **Arthur** : Number **10** — Files to modify : `src/levels/Level10.tsx` and `src/pages/OdooIntern10.tsx`
- **Corentin** : Number **11** — Files to modify : `src/levels/Level11.tsx` and `src/pages/OdooIntern11.tsx`

### ⚠️ Important Guidelines for Adding Content :
- If you need to create or add **custom components** specific to your level/profile, you must place them inside the `src/components/` subfolder.
- If you need to include **media files** (images, videos, audios, icons), please place them inside the `src/assets/` subfolder.

---

## 🛠️ Getting Started & Local Development

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
Make sure you have Node.js installed on your system.

### 2. Clone the repository
```bash
git clone https://github.com/mwattiaux/Challenge-Odoo.git
cd Challenge-Odoo
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the development server
```bash
npm run dev
```

Open your browser and go to `http://localhost:5173`.

---

## 🧪 Playground / Level 0 (Sandbox)
If you want to inspect how the level components and layout look and behave as an example without playing through the whole game, you can access the live sandbox preview locally at:
👉 `http://localhost:5173/level0`