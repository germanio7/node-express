var express = require("express");
var router = express.Router();
var puntoController = require("../../controllers/api/puntosControllerApi");

router.get("/", puntoController.puntos_list);
router.post("/store", puntoController.puntos_store_post);
router.post("/delete", puntoController.puntos_delete_post);

module.exports = router;
