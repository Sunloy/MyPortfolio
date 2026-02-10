const { prisma } = require("../db/prisma");

async function getProfile() {
  // single profile (first row)
  return prisma.profile.findFirst({ orderBy: { id: "asc" } });
}

async function listSkills() {
  return prisma.skill.findMany({ orderBy: { id: "desc" } });
}

module.exports = { getProfile, listSkills };