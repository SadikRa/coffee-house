import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Home/Home';
import AddACoffee from './AddACoffee/AddACoffee';
import UpdateCoffee from './UpdateCoffee/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: 'addCoffee',
        element: <AddACoffee></AddACoffee>
      },
      {
        path: 'updateCoffee',
        element: <UpdateCoffee></UpdateCoffee>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);