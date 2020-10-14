var express = require("express");
var router = express.Router();
var puntoController = require("../controllers/puntos");

router.get("/", puntoController.puntos_list);
router.get("/create", puntoController.puntos_create_get);
router.get("/:id/edit", puntoController.puntos_edit_get);
router.post("/store", puntoController.puntos_store_post);
router.post("/:id/update", puntoController.puntos_update_post);
router.post("/:id/delete", puntoController.puntos_delete_post);

module.exports = router;
