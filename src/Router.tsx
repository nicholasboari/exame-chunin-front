import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { CarDetails } from "./pages/CarDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicle" element={<CarDetails />} />
    </Routes>
  );
}
