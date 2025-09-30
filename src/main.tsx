import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Follow from "./routes/Follow.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/followus",
        element: <Follow />,
      },
      {
        path:"/game/:id",
        element: <Game />
      }
    ],
  },
]);

import "./index.css";
import App from "./App.tsx";
import Game from "./routes/Game.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
