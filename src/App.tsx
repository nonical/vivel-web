import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Drive from "./views/Drive";
import DonationOverview from "./views/DonationOverview";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/drives" element={<Drive />} />
          <Route path="/drives/:driveId" element={<DonationOverview />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
