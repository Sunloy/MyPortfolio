import { Routes } from "react-router-dom";
import { publicRoutes } from "./routes/public.routes";
import { adminRoutes } from "./routes/admin.routes";

export default function App() {
  return (
    <Routes>
      {publicRoutes}
      {adminRoutes}
    </Routes>
  );
}