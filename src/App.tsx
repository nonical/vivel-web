import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <BrowserRouter>
        <ToastContainer position="bottom-right" />
        <Routes>
          <Route path="/drives" element={<Drive />} />
          <Route path="/drives/:driveId" element={<DonationOverview />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
