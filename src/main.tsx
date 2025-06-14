import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx'; // We will create this layout component next
import HomePage from './pages/HomePage.tsx';
import './index.css';

// 1. Define the routes for our application
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The main App component will act as a layout
    children: [
      {
        path: '/', // The "index" route
        element: <HomePage />,
      },
    ],
  },
]);

// 2. Render the application with the router
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
