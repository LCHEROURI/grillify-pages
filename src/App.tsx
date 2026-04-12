import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import BestRestaurantBlueBellPA from "./pages/BestRestaurantBlueBellPA.tsx";
import RomanticRestaurantBlueBellPA from "./pages/RomanticRestaurantBlueBellPA.tsx";
import PrivateDiningBlueBellPA from "./pages/PrivateDiningBlueBellPA.tsx";
import SteakhouseBlueBellPA from "./pages/SteakhouseBlueBellPA.tsx";
import DateNightBlueBellPA from "./pages/DateNightBlueBellPA.tsx";
import BusinessDinnerBlueBellPA from "./pages/BusinessDinnerBlueBellPA.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/best-restaurant-blue-bell-pa" element={<BestRestaurantBlueBellPA />} />
          <Route path="/romantic-restaurant-blue-bell-pa" element={<RomanticRestaurantBlueBellPA />} />
          <Route path="/private-dining-blue-bell-pa" element={<PrivateDiningBlueBellPA />} />
          <Route path="/steakhouse-blue-bell-pa" element={<SteakhouseBlueBellPA />} />
          <Route path="/date-night-blue-bell-pa" element={<DateNightBlueBellPA />} />
          <Route path="/business-dinner-blue-bell-pa" element={<BusinessDinnerBlueBellPA />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
