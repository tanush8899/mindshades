import "@fontsource/prata/400.css";
 // Prata Regular (400)
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import SeriesPage from "./pages/SeriesPage";
import ArtworkDetail from "./pages/ArtworkDetail";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "series/:slug", element: <SeriesPage /> },
      { path: "art/:id", element: <ArtworkDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
