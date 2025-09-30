import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Follow from "./routes/Follow.tsx";
import Game from "./routes/Game.tsx";
import App from "./App.tsx";
import "./index.css";

const router = createHashRouter([
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
        path: "/game/:id",
        element: <Game />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
