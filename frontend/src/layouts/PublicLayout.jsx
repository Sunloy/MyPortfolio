export default function PublicLayout({ children }) {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <h2>Public Portfolio</h2>
      <div>{children}</div>
    </div>
  );
}