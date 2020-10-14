var Punto = require("../models/puntos");

exports.puntos_list = function (req, res) {
  res.render("puntos/index", { puntos: Punto.allPuntos });
};

exports.puntos_create_get = function (req, res) {
  res.render("puntos/create");
};

exports.puntos_edit_get = function (req, res) {
  var point = Punto.findById(req.params.id);
  res.render("puntos/edit", { punto: point });
};

exports.puntos_store_post = function (req, res) {
  var punto = new Punto(req.body.id, req.body.name, req.body.lat, req.body.lon);
  Punto.add(punto);
  res.redirect("/puntos");
};

exports.puntos_update_post = function (req, res) {
  var point = Punto.findById(req.params.id);
  point.id = req.body.id;
  point.name = req.body.name;
  point.lat = req.body.lat;
  point.lon = req.body.lon;
  res.redirect("/puntos");
};

exports.puntos_delete_post = function (req, res) {
  Punto.removeById(req.body.id);
  res.redirect("/puntos");
};
