import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import AuthPovider from "./providers/AuthPovider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthPovider>
        <HelmetProvider>
          <RouterProvider router={Router} />
          <Toaster />
        </HelmetProvider>
      </AuthPovider>
    </QueryClientProvider>
  </React.StrictMode>
);
