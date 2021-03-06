var Punto = function (id, name, lat, lon) {
  this.id = id;
  this.name = name;
  this.lat = lat;
  this.lon = lon;
};

Punto.prototype.toString = function () {
  return "id: " + this.id + " | name: " + this.name;
};

Punto.allPuntos = [];
Punto.add = function (point) {
  Punto.allPuntos.push(point);
};

Punto.findById = function (id) {
  var point = Punto.allPuntos.find((x) => x.id == id);
  if (point) return point;
  else throw new Error(`No existe un punto con el id ${id}`);
};

Punto.removeById = function (id) {
  for (let index = 0; index < Punto.allPuntos.length; index++) {
    if (Punto.allPuntos[index].id == id) {
      Punto.allPuntos.splice(index, 1);
      break;
    }
  }
};

var a = new Punto(1, "plaza", -27.5768434, -60.7113742);
var b = new Punto(2, "museo", -27.5786399, -60.7092994);
var c = new Punto(3, "municipalidad", -27.576213, -60.71163);
var d = new Punto(4, "hospital", -27.586504, -60.714289);
var e = new Punto(5, "secretaria de cultura", -27.577723, -60.710882);

Punto.add(a);
Punto.add(b);
Punto.add(c);
Punto.add(d);
Punto.add(e);

module.exports = Punto;
