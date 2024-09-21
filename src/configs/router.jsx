import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@auth/components/ProtectedRoute.jsx";
import { Home } from "@pages/home/Home.jsx";
import { Calendar } from "@pages/app/components/Calendar.jsx";
import { Customers } from "@components/customers/Customers.jsx";
import { App } from "@pages/app/app.jsx";
import { Register } from "@auth/components/register.jsx";
import { Login } from "@auth/components/Login.jsx";

export const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login isCustomer={false}/>,
    },
    {
        path: "/cadastro",
        element: <Register isCustomer={false}/>,
    },
    {
        path: "/cliente/login",
        element: <Login isCustomer={true}/>,
    },
    {
        path: "/cliente/cadastro",
        element: <Register isCustomer={true}/>,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <App />
            </ProtectedRoute>
        ),
    },
    {
        path: "/calendar",
        element: (
            <ProtectedRoute>
                <App funcionalityComponent={<Calendar/>}/>
            </ProtectedRoute>
        ),
    },
    {
        path: "/customers",
        element: (
            <ProtectedRoute>
                <App funcionalityComponent={<Customers/>}/>
            </ProtectedRoute>
        ),
    },
]);
