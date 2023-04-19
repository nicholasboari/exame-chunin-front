import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CarDetails } from "./pages/CarDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles/:vehicleId" element={<CarDetails />} />
    </Routes>
  );
}
