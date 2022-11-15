import React from "react";
import ReactDOM from "react-dom/client";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import "./index.css";
import Root from './routes/root'
import ErrorPage from "./error-page";
import Home from './Pages/Home/Home'
import Game from './Pages/Game/Game'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/game',
        element: <Game />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);