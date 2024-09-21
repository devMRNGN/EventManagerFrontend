import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "@auth/hooks/AuthContext/AuthContext.jsx";
import { LoadingProvider } from "@common/hooks/Loading/LoadingProvider.jsx";
import { Loading } from "@common/components/Loading.jsx";
import { router } from "@configs/router.jsx";
import { theme } from "@configs/theme.js";

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