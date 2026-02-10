import { useEffect, useState } from "react";
import { adminApi } from "../../api/admin.api";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ name: "", level: "", category: "" });
  const [err, setErr] = useState("");

  async function load() {
    setErr("");
    try {
      const data = await adminApi.listSkills();
      setSkills(data);
    } catch (e) {
      setErr(e.message);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function addSkill(e) {
    e.preventDefault();
    setErr("");
    try {
      const payload = {
        name: form.name.trim(),
        level: form.level ? Number(form.level) : null,
        category: form.category.trim() || null,
      };
      await adminApi.createSkill(payload);
      setForm({ name: "", level: "", category: "" });
      await load();
    } catch (e) {
      setErr(e.message);
    }
  }

  async function removeSkill(id) {
    setErr("");
    try {
      await adminApi.deleteSkill(id);
      await load();
    } catch (e) {
      setErr(e.message);
    }
  }

  return (
    <div>
      <h3>Skills CRUD</h3>
      {err && <p style={{ color: "crimson" }}>{err}</p>}

      <form onSubmit={addSkill} style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        />
        <input
          placeholder="Level (1-100)"
          value={form.level}
          onChange={(e) => setForm((p) => ({ ...p, level: e.target.value }))}
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
        />
        <button type="submit">Add</button>
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Level</th>
            <th>Category</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {skills.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.level ?? "-"}</td>
              <td>{s.category ?? "-"}</td>
              <td>
                <button onClick={() => removeSkill(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}