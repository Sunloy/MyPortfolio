import { clearToken } from "../utils/storage";

export default function AdminLayout({ children }) {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Admin Dashboard</h2>
        <button onClick={() => (clearToken(), (window.location.href = "/admin/login"))}>
          Logout
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
}