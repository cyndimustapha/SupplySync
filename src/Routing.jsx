import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage/>
    },
    {
        path: '/Home',
        element: <Dashboard/>
    },
  
])

export default router;