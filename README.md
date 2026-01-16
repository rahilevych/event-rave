# 🕺 Event Rave — Frontend

Discovering events platform. This platform allows users to browse events, manage a personal wishlist, and features a robust authentication system.

<p align="left">
  <a href="https://event-rave.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-🚀-blue?style=for-the-badge&logo=vercel" alt="Live Demo">
  </a>
  <a href="https://github.com/rahilevych/event-rave-back" target="_blank">
    <img src="https://img.shields.io/badge/Backend_Repo-⚙️-lightgrey?style=for-the-badge&logo=github" alt="Backend">
  </a>
</p>

> [!NOTE]
> The backend is hosted on a free Render instance. If the site feels slow to load initially, please wait a little bit for the server to "wake up" from its sleep state. Sometimes a manual page reload helps once the server is active.
---

## 🖼️ Preview

### Home page
<img width="1920" height="993" alt="home" src="https://github.com/user-attachments/assets/99d18d7d-be1c-46c6-9414-8013f2b9f42c" />

### Login page
<img width="1920" height="993" alt="login" src="https://github.com/user-attachments/assets/4dc251da-fcc5-4d96-8958-2d7dbf33b52d" />

### Home page for logged in user
<img width="1920" height="993" alt="loggedinUser" src="https://github.com/user-attachments/assets/120b7b0e-f8a9-4b02-be01-86caa3bc2679" />

### Profile page
<img width="1920" height="993" alt="profile" src="https://github.com/user-attachments/assets/20b6939e-dd38-4ef7-b942-402e33ecf388" />

### Search
<img width="1920" height="993" alt="search" src="https://github.com/user-attachments/assets/b043fc1b-0749-4330-95d6-64d1b68bd4a2" />

### Filering on categories page
<img width="1920" height="993" alt="filtering by categories" src="https://github.com/user-attachments/assets/4bebc5e0-ee05-4be6-99e4-8b1fb445a5c1" />

### Liked events
<img width="1920" height="993" alt="wishList" src="https://github.com/user-attachments/assets/afdef725-d69d-492a-9c5d-5594961d53ac" />

---

## ✨ Features

*  Browse events with an infinite scroll experience
*  Search and filter events
*  Save favorite events to your personal list
*  Manage personal account info
*  Sign up via traditional email/password or use **GitHub OAuth**.
*  Fully optimized for Mobile, Tablet, and Desktop.

## 🛠 Tech Stack

* **Core:** React + TypeScript + Vite
* **Zustand:** for local UI state
* **TanStack Query:** for server-state management, caching, and infinite loading
* **Architecture:** Feature-Sliced Design (FSD)
* **Styling:** module styles

## 🏗 Project Structure (FSD)
The project follows the Feature-Sliced Design pattern:
- `app/`: routes, app, etc.
- `pages/`: pages.
- `features/`: features (auth, like, profile etc. with their components, services, hooks, models)
- `layouts/`:  header, footer etc
- `shared/`: reusable UI components
- `config/`: configuration files and constants.

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rahilevych/event-rave
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment Variables:**
    Create a `.env` file in the root:
    ```env
    VITE_API_URL=[your server url]
    VITE_TARGET_OAUTH_URL=[https://[your server url ]/github-auth]
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 🗺 What can be added
- [ ] Stripe Payment Integration for ticket booking.
- [ ] Email notifications for upcoming events.
- [ ] Map integration to see event locations.
