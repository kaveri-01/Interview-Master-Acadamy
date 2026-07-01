import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AuthContextProvider from "./context/authContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          toasterId="default"
          containerStyle={{
            zIndex: 99999,
          }}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#2663EB",
              color: "#fff",
              zIndex: 99999,
            },

            // Default options for specific types
            success: {
              duration: 5000,
              iconTheme: {
                primary: "white",
                secondary: "black",
              },
            },
            error : {
              duration: 5000,
              iconTheme: {
                primary: "red",
                secondary: "black",
              },
            }
          }}
        />
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
