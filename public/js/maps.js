var mymap = L.map("main_map").setView([-27.583333, -60.716667], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap);

fetch("/api/puntos")
  .then((response) => response.json())
  .then((data) => {
    data.puntos.forEach((element) => {
      L.marker([element.lat, element.lon], { title: element.name }).addTo(
        mymap
      );
    });
  });
