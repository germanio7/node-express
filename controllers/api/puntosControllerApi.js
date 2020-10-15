var Punto = require("../../models/puntos");

exports.puntos_list = function (req, res) {
  res.status(200).json({
    puntos: Punto.allPuntos,
  });
};

exports.puntos_store_post = function (req, res) {
  var punto = new Punto(req.body.id, req.body.name, req.body.lat, req.body.lon);
  Punto.add(punto);
  res.status(200).json({
    message: "punto creado",
  });
};

exports.puntos_delete_post = function (req, res) {
  Punto.removeById(req.body.id);
  res.status(204).json({
    message: "punto eliminado",
  });
};
