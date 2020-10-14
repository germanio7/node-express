var mymap = L.map("main_map").setView([-27.583333, -60.716667], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap);

var marker = L.marker([-27.583333, -60.716667]).addTo(mymap);
