import { http } from "./http";

export const adminApi = {
  login: (email, password) =>
    http.request("/api/admin/login", { method: "POST", body: { email, password } }),

  listSkills: () => http.request("/api/admin/skills", { auth: true }),

  createSkill: (payload) =>
    http.request("/api/admin/skills", { method: "POST", body: payload, auth: true }),

  updateSkill: (id, payload) =>
    http.request(`/api/admin/skills/${id}`, { method: "PUT", body: payload, auth: true }),

  deleteSkill: (id) =>
    http.request(`/api/admin/skills/${id}`, { method: "DELETE", auth: true }),
};