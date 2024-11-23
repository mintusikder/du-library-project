import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto">
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster></Toaster>
        </AuthProvider>
      </HelmetProvider>
    </div>
  </StrictMode>
);
