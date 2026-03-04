# 🛡️ Fenrir Security - Frontend Design Challenge

A production-ready React application recreating a B2B SaaS security platform, built to demonstrate high visual accuracy, interactive behavior, and responsive design principles. 

---

## 🚀 Live Deployment
**URL:** https://aps1.netlify.app/

> **Note:** The application opens directly to the Login screen per requirement R6. 

---

## 🛠️ Tech Stack
**Framework:** React 18 (Vite) 
**Styling:** Tailwind CSS 
* **Icons:** Lucide-React
  **Navigation:** React Router DOM
  **State Management:** React Context API (Theme & Global state) 

---

## ✨ Key Features Implemented

### 1. Three-Screen UI Implementation (R1)
**Screen 1 (Login/Sign-up):** Features a premium split-layout with a dark gradient branding area and a clean functional form. 
* **Screen 2 (Dashboard):** Provides an org-level stats bar with four severity counters and a comprehensive scan table with status chips and progress bars.
* **Screen 3 (Active Scan Detail):** Includes a circular progress indicator, a horizontal step tracker, a live terminal console with colored logs, and a vertical finding log. 

### 2. Theming & Dark Mode (R1, R3)
**Native Dark/Light Mode:** Fully functional global theme toggle. 
**Custom Palette:** Utilized the mandatory Teal accent (`#0CC8A8`) and Near-Black (`#0F0F0F`) backgrounds for a professional look.                      **Severity Colors:** Fixed colors implemented: Red (Critical), Orange (High), Yellow (Medium), and Green (Low). 

### 3. Navigation & Interactivity (R2, R3)
**Logical Transitions:** Login form redirects to the Dashboard upon submission. 
**Deep Linking:** Clicking a row in the Scan table opens the Scan Detail view. 
**Functional Elements:** Implemented interactive tabs in the console and hover states for all buttons and inputs. 

### 4. Responsiveness & Polish (R4, R5)
  **Mobile Optimized:** Sidebar collapses for mobile viewports (375px) while maintaining full desktop functionality (1280px+). 
  **Realistic Mock Data:** Populated all screens with realistic JSON data representing security scan logs and vulnerabilities. 

---

## 📦 Local Setup
   git clone [YOUR_GITHUB_REPO_URL]
   npm install
   npm run dev
   npm run build
