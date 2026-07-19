# Custom React Web Application - FER202

## 1. App Concept
This project is a complete Laptop Store Management System designed using a customized dark theme. Users can view a list of laptops, check their detailed specifications (including discount percentage calculations), add new laptops, edit existing ones, and delete products. 

## 2. Run Instructions
To run this project locally, please follow these steps:
1. Extract the ZIP file and navigate to the root directory.
2. Open your terminal and run: `npm install` (to install all dependencies including Bootstrap, React Router, Axios, Redux Toolkit).
3. Start the development server by running: `npm run dev`
4. Open the provided `localhost` link in your browser.

## 3. Learning Outcomes (LO1 - LO8) Application
* **LO1 (Project Setup & Git):** Created via Vite. Maintained Git history with multiple commits (included inside `.git` hidden folder).
* **LO2 (Components):** 
  - Functional Components: Used across `App`, `ProductList`, `ProductDetail`, etc.
  - Class Component: Successfully implemented in the `About.jsx` page.
* **LO3 (JSX & ES6):** Utilized ES6 Arrow functions, template literals for dynamic API URLs/routing, and object destructuring for props handling throughout the app.
* **LO4 (Styling):** Fully styled with Bootstrap 5 (`bootstrap/dist/css/bootstrap.min.css`) and customized with native CSS (`index.css`) for a seamless Dark Theme.
* **LO5 (React Router):** Implemented specific routes: `/` (Home), `/feature` (Product List), `/about` (About us), along with dynamic parameters routing for `/product/:id` and `/edit/:id`.
* **LO6 (State & Effects):** Utilized `useState` for local form data handling and `useEffect` for data fetching upon component mount.
* **LO7 (API Fetching & Lazy Loading):**
  - Fetched mock initial data via `axios` from a local JSON API simulation (`data.json`).
  - Added Error handlers/conditional rendering for loading states.
  - Successfully implemented `React.lazy` and `<Suspense>` for the Main Feature component (`ProductList.jsx`).
* **LO8 (Redux):** Implemented Redux Toolkit (`@reduxjs/toolkit` and `react-redux`) to manage the global state of `totalCount`. The total quantity of products actively updates on the Navbar.

## 4. Team Contributions
* **Member:** Nguyen Anh Minh (Individual Submission)
* **Role:** Full-stack Developer (UI/UX Setup, State Management, CRUD Operations, Redux Integration).

## 5. Resource Transparency
* UI Design Reference: Followed the `.docx` mockup provided in the course instructions.
* Icons/Fonts: Default Bootstrap UI.