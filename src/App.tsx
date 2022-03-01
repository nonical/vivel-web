import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Protected from "./components/Protected";
import { AuthProvider } from "./contexts/Auth";
import { Login, Redirect, Refresh } from "./views/Auth";
import DonationOverview from "./views/DonationOverview";
import Drive from "./views/Drive";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Refresh>
          <BrowserRouter>
            <ToastContainer position="bottom-right" />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/redirect" element={<Redirect />} />
              <Route
                path="/drives"
                element={
                  <Protected>
                    <Drive />
                  </Protected>
                }
              />
              <Route
                path="/drives/:driveId"
                element={
                  <Protected>
                    <DonationOverview />
                  </Protected>
                }
              />
              <Route path="*" element={<Navigate to="/drives" />} />
            </Routes>
          </BrowserRouter>
        </Refresh>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
