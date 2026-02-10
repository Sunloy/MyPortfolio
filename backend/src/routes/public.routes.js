const router = require("express").Router();
const publicCtrl = require("../controllers/public.controller");

router.get("/profile", publicCtrl.getProfile);
router.get("/skills", publicCtrl.listSkills);

module.exports = router;