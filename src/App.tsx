import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import BestRestaurantNewarkDE from "./pages/BestRestaurantNewarkDE.tsx";
import RomanticRestaurantNewarkDE from "./pages/RomanticRestaurantNewarkDE.tsx";
import PrivateDiningNewarkDE from "./pages/PrivateDiningNewarkDE.tsx";
import SteakhouseNewarkDelaware from "./pages/SteakhouseNewarkDelaware.tsx";
import DateNightNewarkDE from "./pages/DateNightNewarkDE.tsx";
import BusinessDinnerNewarkDE from "./pages/BusinessDinnerNewarkDE.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/best-restaurant-newark-de" element={<BestRestaurantNewarkDE />} />
          <Route path="/romantic-restaurant-newark-de" element={<RomanticRestaurantNewarkDE />} />
          <Route path="/private-dining-newark-de" element={<PrivateDiningNewarkDE />} />
          <Route path="/steakhouse-newark-delaware" element={<SteakhouseNewarkDelaware />} />
          <Route path="/date-night-newark-de" element={<DateNightNewarkDE />} />
          <Route path="/business-dinner-newark-de" element={<BusinessDinnerNewarkDE />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
