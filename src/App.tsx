import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Practice from "./pages/Practice";
import Tests from "./pages/Tests";
import Roadmap from "./pages/Roadmap";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ListeningPractice from "./pages/practice/ListeningPractice";
import WritingPractice from "./pages/practice/WritingPractice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/listening" element={<ListeningPractice />} />
          <Route path="/practice/writing" element={<WritingPractice />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
