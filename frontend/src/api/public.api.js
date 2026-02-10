import { http } from "./http";

export const publicApi = {
  getProfile: () => http.request("/api/public/profile"),
  listSkills: () => http.request("/api/public/skills"),
};