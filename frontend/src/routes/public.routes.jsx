import { Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Public from "../pages/public/Public";

export const publicRoutes = (
  <Route
    path="/"
    element={
      <PublicLayout>
        <Public />
      </PublicLayout>
    }
  />
);