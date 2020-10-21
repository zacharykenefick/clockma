let saturn;
let gold;
let fog;
let blended;
let blendee;
let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;
var lat = 0.0;
var long = 0.0;

let sunrisePos;

function preload() {
  gold = loadImage('assets/1.png');
  fog = loadImage('assets/2.png');
  saturn = loadImage('assets/3.png');
  girl = loadImage('assets/4.png');

  blendgold = loadImage('assets/1.png');
  blendfog = loadImage('assets/2.png');
  blendgirl = loadImage('assets/4.png');
}



function setup() {
  createCanvas(saturn.width, saturn.height);
}





function draw() {
   //GET LAT AND LONG
  navigator.geolocation.getCurrentPosition(
    function(position) {
      lat = (position.coords.latitude);
      long = (position.coords.longitude);
      //CALC SUN POS
      var sunPos = SunCalc.getPosition(new Date(), lat, long);



  //clean blendings
  blendgold.copy(gold, 0, 0, gold.width, gold.height, 0, 0, gold.width, gold.height);
  blendfog.copy(fog, 0, 0, fog.width, fog.height, 0, 0, fog.width, fog.height);
  blendgirl.copy(girl, 0, 0, girl.width, girl.height, 0, 0, girl.width, girl.height);
//do blendings
      
  blendgold.blend(saturn, floor((sunPos.azimuth * 20000)%100), floor(abs(sunPos.altitude)) * 300 , width, height, 0, 0, width, height, LIGHTEST);
  blendgirl.blend(fog,floor((sunPos.altitude * 20000)%100), floor(abs((sunPos.azimuth* 20000)%100) * 300) , width, height, 0, 0, width, height, LIGHTEST);
      
      
  blendgirl.blend(blendgold, -1* second(), 0, width, height, 0, 0, width, height, LIGHTEST);
      
      
//print the image
  image(blendgirl, 0, 0);
      
      
    }
  )
}