const { asyncHandler } = require("../utils/asyncHandler");
const { ok } = require("../utils/response");
const publicService = require("../services/public.service");

const getProfile = asyncHandler(async (req, res) => {
  const profile = await publicService.getProfile();
  ok(res, profile);
});

const listSkills = asyncHandler(async (req, res) => {
  const skills = await publicService.listSkills();
  ok(res, skills);
});

module.exports = { getProfile, listSkills };