const { prisma } = require("../db/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { env } = require("../config/env");

// AUTH
async function adminLogin(email, password) {
  const user = await prisma.adminUser.findUnique({ where: { email } });
  if (!user) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const token = jwt.sign({ sub: user.id, email: user.email, role: user.role }, env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return { token, user: { id: user.id, email: user.email, role: user.role } };
}

// SKILLS CRUD
async function createSkill(data) {
  return prisma.skill.create({ data });
}

async function updateSkill(id, data) {
  return prisma.skill.update({ where: { id }, data });
}

async function deleteSkill(id) {
  return prisma.skill.delete({ where: { id } });
}

async function listSkillsAdmin() {
  return prisma.skill.findMany({ orderBy: { id: "desc" } });
}

module.exports = {
  adminLogin,
  createSkill,
  updateSkill,
  deleteSkill,
  listSkillsAdmin,
};