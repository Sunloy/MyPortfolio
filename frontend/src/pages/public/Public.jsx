import { useEffect, useState } from "react";
import { publicApi } from "../../api/public.api";

export default function Public() {
  const [skills, setSkills] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    publicApi
      .listSkills()
      .then(setSkills)
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <div>
      <h3>Skills (Public)</h3>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      <ul>
        {skills.map((s) => (
          <li key={s.id}>
            {s.name} {s.level ? `(${s.level})` : ""} {s.category ? `- ${s.category}` : ""}
          </li>
        ))}
      </ul>

      <hr />
      <a href="/admin/login">Go to Admin Login</a>
    </div>
  );
}