# Role-Based Dashboard (RBAC + CRUD) – React + Vite

A simple role-based dashboard built using **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, with dynamic UI permissions and simulated CRUD features using local state and a public API.

---

## 🚀 Features

-  Role-based Access Control (Admin / Editor / Viewer)
-  Fetches data from public REST API (`https://api.restful-api.dev/objects`)
- ➕ Add, ✏️ Edit, 🗑️ Delete items 
-  Clean & modern UI with **Tailwind CSS**
-  Icons powered by **Lucide**
-  Local-only data manipulation (no backend)

---

## 🧑‍💼 Roles & Permissions

| Role    | Add | Edit | Delete | View |
|---------|-----|------|--------|------|
| Admin   | ✅  | ✅   | ✅     | ✅   |
| Editor  |  ❌ | ✅   |  ✅    | ✅   |
| Viewer  | ❌  | ❌   |   ❌   | ✅   |

Access rules are enforced via `permissions.js` and React Context (`useRole`).

---

## 📦 Tech Stack

- **React** + **Vite**  
- **Tailwind CSS**  
- **Lucide Icons**  
- **Axios** for API calls  
- **React Router DOM** for routing  

---

# 📦 Main Dependencies

- axios
- lucide-react
- react-router-dom
- tailwindcss

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/Tyasweningas/rbac-portal.git
cd rbac-portal

# Install dependencies
npm install

# Run the app
npm run dev
