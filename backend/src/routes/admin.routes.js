const router = require("express").Router();
const adminCtrl = require("../controllers/admin.controller");
const { requireAuth, requireAdmin } = require("../middleware/auth");

router.post("/login", adminCtrl.login);

// protected CRUD example: skills
router.get("/skills", requireAuth, requireAdmin, adminCtrl.listSkills);
router.post("/skills", requireAuth, requireAdmin, adminCtrl.createSkill);
router.put("/skills/:id", requireAuth, requireAdmin, adminCtrl.updateSkill);
router.delete("/skills/:id", requireAuth, requireAdmin, adminCtrl.deleteSkill);

module.exports = router;