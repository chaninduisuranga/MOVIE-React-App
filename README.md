# 🎬 Movie Paradise — React Movie App

A modern, responsive movie discovery and favorites web application built with React and Vite.  
Browse, search, and save your favorite films with a beautiful UI and persistent local storage.

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

---

## Features

- 🔎 **Search** for movies by title with instant results.
- 🎞️ **Browse** a curated list of top movies with posters, ratings, genres, and descriptions.
- ❤️ **Favorite** movies and manage your personal favorites list (stored in your browser).
- ⭐ **Responsive Design** for desktop and mobile.
- ⚡ **Fast** thanks to [Vite](https://vitejs.dev/) and React HMR.
- 🎨 **Modern UI** with gradients, animations, and interactive effects.
- 🗂️ **Persistent Storage** using `localStorage` for favorites.

---

## Screenshots

![image](https://github.com/user-attachments/assets/89fd3cc2-82f7-459c-becd-3fb8bb2c743a)


---

## Tech Stack

- **React** (with hooks and context)
- **Vite** (blazing fast dev/build tool)
- **CSS Modules** for styling
- **LocalStorage** for persistence
- **[The Movie Database (TMDB)](https://www.themoviedb.org/) or static movie data**

---
4. **Open your browser:**  
Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Usage

- Use the search bar to find movies by title.
- Click the ❤️ button on any movie card to add/remove it from your favorites.
- Favorites are saved automatically and persist across sessions.
- Navigate using the navbar to view all movies or your favorites.

---

## Project Structure

src/
Components/
NavBar.jsx
MovieCard.jsx
Context/
MovieContext.jsx
Pages/
Home.jsx
Favorite.jsx
CSS/
App.css
MovieCard.css
...
App.jsx
main.jsx


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

