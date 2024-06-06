import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Gallery from "./pages/gallery/Gallery.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Certifications from "./pages/certifications/Certifications.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "certifications",
        element: <Certifications />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
