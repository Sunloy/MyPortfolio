const { asyncHandler } = require("../utils/asyncHandler");
const { ok, created } = require("../utils/response");
const adminService = require("../services/admin.service");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await adminService.adminLogin(email, password);
  ok(res, result, "Logged in");
});

const listSkills = asyncHandler(async (req, res) => {
  const skills = await adminService.listSkillsAdmin();
  ok(res, skills);
});

const createSkill = asyncHandler(async (req, res) => {
  const { name, level, category } = req.body;
  const skill = await adminService.createSkill({ name, level, category });
  created(res, skill);
});

const updateSkill = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const { name, level, category } = req.body;
  const skill = await adminService.updateSkill(id, { name, level, category });
  ok(res, skill, "Updated");
});

const deleteSkill = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const skill = await adminService.deleteSkill(id);
  ok(res, skill, "Deleted");
});

module.exports = {
  login,
  listSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};