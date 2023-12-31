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

L.marker([24.038511169872627, 121.59094248567341]).addTo(map)
.bindPopup('<h1>一號光纖箱</h1></p><h2>MOV: 192.168.127.61 #1#2#5油槽</p>鍋爐房光纖線路: 192.168.2.66</P>監視設備:</p>192.168.1.13舊品堆置場</p>192.168.1.15報廢車輛置放</p>192.168.1.16A幹道往東</p>192.168.1.62行政倉庫前</p>192.168.1.63行政倉庫後</p>192.168.1.90集水坑1</p>192.168.1.91集水坑2</p></h2>')
.openPopup();

L.marker([24.039995428153116, 121.59188116168602]).addTo(map)
.bindPopup('<h1>二號光纖箱</p></h1><h2>MOV:192.168.127.63#1#4油槽</p>監視器:</p>192.168.1.49</p>192.68.1.50舊操作室後</p>192.168.1.94集水坑5</p></h2>')
.openPopup();
L.marker([24.03904499625862, 121.5893384275644]).addTo(map)
.bindPopup('<h1>三號光纖箱</h1></p><h2>MOV:192.168.127.65#3#6油槽</p>監視器</p>192.168.1.92集水坑3</p>192.168.1.93 集水坑4</p></h2>')
.openPopup();

L.marker([24.040308971152935, 121.59030402280047]).addTo(map)
.bindPopup('<h1>四號光纖箱</h1></p><h2>VOC 192.168.2.9</p>MOV192.168.127.67 #7#8#9油槽</p>#9號油槽雷達波192.168.2.22</p>監視器</p>192.168.1.96集水坑7</p>192.168.1.97集水坑8</h2>')
.openPopup();

L.marker([24.041602327936847, 121.5912696180365]).addTo(map)
.bindPopup('<h1>五號光纖箱</h1></p><h2>MOV192.168.127.69 #7 #10油槽</p>監視器</p>192.168.1.24輸油管往西</p>192.168.1.28 10號油糟</p>192.168.1.99 集水坑10</p>#10號油槽雷達波液位計192.168.2.21</h2>')
.openPopup();


L.marker([24.040916458537048, 121.5891667661891]).addTo(map)
.bindPopup('<h1>六號光纖箱</h1></p><h2>MOV 192.168.127.71 #9 #11</p>監視器</p>192.168.1.98 集水坑9</p>192.168.1.100 集水坑11</p></h2>')
.openPopup();
L.marker([24.042201169872627, 121.59043248577341]).addTo(map)
.bindPopup('<h1>七號光纖箱</h1></p><h2>MOV192.168.127.73#12 #13油槽</p>#12號油槽雷達波192.168.2.23</p>VOC</p>192.168.2.12#12 #13油槽</p>監視器</p>192.168.1.101 集水坑12</h2>')
.openPopup();
L.marker([24.042701169872627, 121.59044248567341]).addTo(map)
.bindPopup('<h1>八號光纖箱</h1></p><h2>VOC192.168.2.15 </p>MOV192.168.127.75#15 #16油槽</p>192.168.2.24	#16號油槽雷達波</p>監視器</p>192.168.1.103 集水坑15</p>192.168.1.104 集水坑16</h2>')
.openPopup();

L.marker([24.043003449787424, 121.5901323614355]).addTo(map)
.bindPopup('<h1>9號光纖箱</h1></p><h2></h2>')

L.marker([24.039217356348, 121.59373145019438]).addTo(map)
.bindPopup('<h1>A幹道排放口</h1></p><h2>監視器</P>192.168.1.11</p>192.168.1.18環保草地</p></h2>')
.openPopup();

L.marker([24.038998339639566, 121.59237421608252]).addTo(map)
.bindPopup('<h1>材料室路口CCTV低壓電源訊號箱</h1></p><h2>監視器</P>192.168.1.14油罐車手動洗車場</p></h2>')
.openPopup();

L.marker([24.03934127991845, 121.59325398063095]).addTo(map)
.bindPopup('<h1>廢油糟旁CCTV低壓電源訊號箱</h1></p><h2>監視器</P>192.168.1.14油罐車手動洗車場</p></h2>')
.openPopup();

L.marker([24.038336952221997, 121.59078634835615]).addTo(map)
.bindPopup('<h1>CCTV鍋爐房水池旁</h1></p><h2>監視器</P>192.168.1.13 舊品堆置場</P>192.168.1.15 報廢車輛置放場192.168.1.16  A幹道往東192.168.1.155 nothing</P>192.168.1.151~154</P>151行政報廢場1</P>152行政報廢場2</P>153行政報廢場3</P>154行政報廢場4</P></p></h2>')
.openPopup();


L.marker([24.040034621051, 121.59214938260126]).addTo(map)
.bindPopup('<h1>舊操作室</h1></p><h2>雙軸封</P>192.168.2.5 175hp 250hp 雙軸封液位計</P>監視器</p>舊操作室1 192.168.1.109</P> 舊操作室2 192.168.1.110</P></h2>')
.openPopup();
/*汽修間*/
L.marker([24.042373795854726, 121.59257001446458]).addTo(map)
.bindPopup('<h1>汽修間</h1></p><h2>監視器</P>192.16.1.70-81</P>192.168.1.248</p>192.168.1.249</P></h2>')
.openPopup();

/*操作室*/
L.marker([24.040913878182412, 121.59311450288665]).addTo(map)
.bindPopup('<h1>操作室</h1></p><h2>雷達波液位警報盤192.168.2.30</P></P></p></P></h2>')
.openPopup();

/*10號光纖箱*/
L.marker([24.039649909240655, 121.59236348436971]).addTo(map)
.bindPopup('<h1>10號光纖箱</h1></p><h2>MOV 192.168.127.77 #UG #LFO</P></P></p></P></h2>')
.openPopup();

/*11號光纖箱*/
L.marker([24.040585639387114, 121.59196115301947]).addTo(map)
.bindPopup('<h1>11號光纖箱</h1></p><h2>MOV 192.168.127.79 #SD #DO</P></P></p></P></h2>')
.openPopup();
/*92 98 色液*/
L.marker([24.040164316711856, 121.59204161928916]).addTo(map)
.bindPopup('<h1>92 98色液</h1></p><h2>192.168.2.252 92 98 色液PLC</P></P></p></P></h2>')
.openPopup();

/*汽油清淨計*/
L.marker([24.040654226668565, 121.59188068674982]).addTo(map)
.bindPopup('<h1>汽油清淨計</h1></p><h2>192.168.2.250</P></P></p></P></h2>')
.openPopup();

/*柴油清淨計*/
L.marker([24.04076200660827, 121.59181094931608]).addTo(map)
.bindPopup('<h1>柴油清淨計</h1></p><h2>192.168.2.251</P></P></p></P></h2>')
.openPopup();







/*一號光纖箱到舊操作室*/
var latlngs = [
  [24.038511169872627, 121.59094248567341],
  [24.038996004581584, 121.59231031384937],
  [24.039936638736506, 121.59192407704616],
  [24.040034621051, 121.59214938260126],

];
L.polyline(latlngs, {color: 'orange'}).addTo(map);

/*一號光纖箱到鍋爐房*/
var latlngs = [
  [24.038511169872627, 121.59094248567341],
  [24.037937783144816, 121.5906473455487],

];
L.polyline(latlngs, {color: 'orange'}).addTo(map);

/*二號光纖箱馬路9號光纖箱*/
var latlngs = [
  [24.039936638736506, 121.59192407704616],
  [24.043199409662552, 121.59066880323333],
  [24.043003449787424, 121.5901323614355]

];
L.polyline(latlngs, {color: 'orange'}).addTo(map);

/*8號光纖箱*/
var latlngs = [
  [24.04281728762911, 121.5908190069367],
  [24.042701169872627, 121.59044248567341]

];
L.polyline(latlngs, {color: 'orange'}).addTo(map);

/*7號光纖箱*/
var latlngs = [
  [24.042405770321604, 121.59096921064008],
  [24.042201169872627, 121.59043248577341]

];
L.polyline(latlngs, {color: 'orange'}).addTo(map);

/*5號光纖箱-6號光纖箱*/
var latlngs = [
  [24.041602327936847, 121.5912696180365],
  [24.040916458537048, 121.5891667661891]

];
L.polyline(latlngs, {color: 'orange'}).addTo(map);

/*2號光纖箱-3號光纖箱*/
var latlngs = [
  [24.039995428153116, 121.59188116168602],
  [24.03904499625862, 121.5893384275644]

];
L.polyline(latlngs, {color: 'orange'}).addTo(map);


/*路口到-4號光纖箱*/
var latlngs = [
  [24.040759687874264, 121.59159148311518],
  [24.040308971152935, 121.59030402280047]

];
L.polyline(latlngs, {color: 'orange'}).addTo(map);

/*汽修間到排水口*/
var latlngs = [
  [24.042373795854726, 121.59257001446458],
  [24.039217356348, 121.59373145019438]

];
L.polyline(latlngs, {color: 'orange'}).addTo(map);


/*舊操作室到操作室*/
var latlngs = [
  [24.040034621051, 121.59214938260126],
  [24.040507253877752, 121.59311986730275],
  [24.040913878182412, 121.59311450288665]

];
L.polyline(latlngs, {color: 'orange'}).addTo(map);














