import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CarDetails } from "./pages/CarDetails";
import { Admin } from "./pages/Admin";
import { Auth } from "./pages/Auth";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles/:vehicleId" element={<CarDetails />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
