import React from 'react'
import ReactDOM from "react-dom/client";
import routes from './routes.jsx';
import { RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
