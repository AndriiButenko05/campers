# 🚐 TravelTrucks - Camper Rental Application

![Project Banner](https://img.shields.io/badge/Travel-Trucks-E44848?style=for-the-badge)

## 📖 Project Description

This project is the frontend application for **TravelTrucks**, a camper rental service. The application enables users to browse a catalog of campers, filter them by various criteria, view detailed specifications, manage a list of favorites, and submit booking requests.

It is built with modern web technologies focusing on performance, user experience, and clean code architecture using **Next.js** and **TypeScript**.

## 🚀 WebSite

Check out the live application on Vercel:
**[🔗 View Live Demo](https://campers-snowy.vercel.app)**

## ✨ Key Features

### 🏠 Home Page (`/`)

- Hero section with a call-to-action button leading to the catalog.

### 🚐 Catalog Page (`/catalog`)

- **Display:** Grid of available campers fetched from the backend.
- **Filtering:**
  - **Location:** Text input for city filtering.
  - **Vehicle Type:** Filter by Van, Fully Integrated, or Alcove.
  - **Equipment:** Filter by amenities (AC, Kitchen, TV, Shower, etc.).
- **Pagination:** "Load More" button functionality using infinite query.
- **Favorites:** Heart icon to add/remove campers from the persistent favorites list.

### 📝 Camper Details (`/catalog/:id`)

- **Detailed Info:** Comprehensive specifications (tank size, consumption, dimensions).
- **Gallery:** Modal/Grid view of camper images.
- **Reviews:** User ratings and comments.
- **Booking Form:** Functional form with date picker (`react-datepicker`) and validation to book a camper.

### ❤️ Favorites (`/favorites`)

- Displays a list of user-favorited campers.
- **Persistence:** Favorites are saved in `localStorage`, so they remain after a page reload.

## 🛠 Technologies Used

The project is built with a robust and scalable tech stack:

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) (with Persist middleware)
- **Data Fetching:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Forms:** [React Datepicker](https://reactdatepicker.com/)
- **Icons:** SVG Sprites

## 🔌 API

The application connects to a **MockAPI** backend.

**Base URL:** `(https://66b1f8e71ca8ad33d4f5f63e.mockapi.io)`

**Endpoints:**

- `GET /campers`: Fetch all campers (supports pagination `?page=1&limit=4` and filtering).
- `GET /campers/:id`: Fetch details for a specific camper.

## 📦 State Management

The application uses **Zustand** for global state management:

1.  **Filters Store:** Manages active filters (location, equipment, type) to ensure they persist during navigation or search actions.
2.  **Favorites Store:** Manages the list of favorite camper IDs. Uses `persist` middleware to save data to the browser's `localStorage`.

## 💻 Installation & Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/AndriiButenko05/campers.git](https://github.com/AndriiButenko05/campers.git)
    cd campers
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add your API URL:

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000
    NEXT_PUBLIC_BACKEND_API_URL=[https://66b1f8e71ca8ad33d4f5f63e.mockapi.io](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io)
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

**Developed by [Andrii Butenko](https://github.com/AndriiButenko05)**
