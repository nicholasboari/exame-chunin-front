import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CarDetails } from "./pages/CarDetails";
import { Auth } from "./pages/Auth";
import { PrivateRoute } from "./components/PrivateRoute";
import { Form } from "./pages/Admin/Vehicles/Form";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles/:vehicleId" element={<CarDetails />} />
      <Route
        path="/admin/vehicles"
        element={
          <PrivateRoute path="/">
            <Form />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/vehicles/:vehicleId"
        element={
          <PrivateRoute path="/">
            <Form />
          </PrivateRoute>
        }
      />

      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
