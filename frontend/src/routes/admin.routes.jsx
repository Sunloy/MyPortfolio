import { Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Login from "../pages/admin/Login";
import Skills from "../pages/admin/Skills";
import { getToken } from "../utils/storage";

function Protected({ children }) {
  const token = getToken();
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
}

export const adminRoutes = (
  <>
    <Route
      path="/admin/login"
      element={
        <AdminLayout>
          <Login />
        </AdminLayout>
      }
    />
    <Route
      path="/admin/skills"
      element={
        <Protected>
          <AdminLayout>
            <Skills />
          </AdminLayout>
        </Protected>
      }
    />
  </>
);