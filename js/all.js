var map = L.map('map', {
  center: [24.041901169872627, 121.69285748577341],
  zoom: 18
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([24.038001169872627, 121.59043248577341]).addTo(map)
.bindPopup('<h1>柴油糟雷達波液位計192.168.2.66</h1></p>')
.openPopup();

L.marker([24.040401169872627, 121.59043248577341]).addTo(map)
.bindPopup('<h1>四號光纖箱192.168.2.9</h1></p>')
.openPopup();

L.marker([24.042201169872627, 121.59043248577341]).addTo(map)
.bindPopup('<h1>七號光纖箱192.168.2.12</h1></p>')
.openPopup();

L.marker([24.042701169872627, 121.59044248567341]).addTo(map)
.bindPopup('<h1>八號光纖箱192.168.2.15</h1></p>')
.openPopup();
