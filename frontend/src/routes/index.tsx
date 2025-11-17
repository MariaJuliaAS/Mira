import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { PrivateRoutes } from "./privateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element:
            <PrivateRoutes>
                <Home />
            </PrivateRoutes>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])