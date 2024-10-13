import { express, router  } from "express";
// const router = express.Router();
const _userController = require("../controller/user.controller");

router.get("/", _zipController.getZip);
router.post("/", _zipController.createZip);

module.exports = router;
