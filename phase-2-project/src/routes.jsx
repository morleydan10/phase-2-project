import App from "./App";
import ErrorPage from "./ErrorPage"
import Home from "./Home";
import ColorStudio from "./ColorStudio";
import SavedColorPallets from "./SavedColorPallets";
import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {
    path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            }, 
            {
                path: "/ColorStudio",
                element: <ColorStudio />
            },
            {
                path: "/Pallets",
                element: <SavedColorPallets />
            },
        ]
    }
])

export default routes;
