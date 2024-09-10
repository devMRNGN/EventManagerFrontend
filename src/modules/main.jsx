import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "@auth/hooks/AuthContext/AuthContext.jsx";
import { LoadingProvider } from "@common/hooks/Loading/LoadingProvider.jsx";
import { App } from "@pages/app/app.jsx";
import { Register } from "@auth/components/register.jsx";
import { Login } from "@auth/components/Login.jsx";
import { Loading } from "@common/components/Loading.jsx";
import { ProtectedRoute } from "@auth/components/ProtectedRoute.jsx";
import { Home } from "@pages/home/Home.jsx";
import { Calendar } from "@pages/app/components/Calendar.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login isCustomer={false} />
  },
  {
    path: "/cadastro",
    element: <Register isCustomer={false} />
  },
  {
    path: "/cliente/login",
    element: <Login isCustomer={true} />
  },
  {
    path: "/cliente/cadastro",
    element: <Register isCustomer={true} />
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App/>
      </ProtectedRoute>
    )
  },
  {
    path: "/teste",
    element: <App/>
  },
  {
    path: "/calendar",
    element: <App funcionalityComponent={<Calendar/>}/>
  },
]);

const theme = extendTheme({
  colors: {
    primary: {
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1"
    },
    secundary: {
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280"
    },
    highlight: {
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4"
    },
    base: {
      
    }
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
      <AuthProvider>
        <ChakraProvider
          toastOptions={{defaultOptions: { position: "top" }}} 
          theme={theme}
        >
          <Loading/>
          <RouterProvider router={router} />
        </ChakraProvider>
      </AuthProvider>
    </LoadingProvider>
  </StrictMode>
);