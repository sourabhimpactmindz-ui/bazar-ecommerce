import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AuthPage from "../pages/User/Authpage";

const router = createBrowserRouter([
    {
        path : "/home",
        element : <Home />
    },

    {
        path : "/login",
        element : <AuthPage mode="login" />
    },

    {
        path : "/signup",
        element : <AuthPage mode="signup" />
    }
])

export default router;