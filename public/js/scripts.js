$(document).ready(function(){function o(o){t=o.coords.latitude,n=o.coords.longitude,$("#latitude").val(t),$("#longitude").val(n)}if(42==window.yolo){var t=0,n=0;$("#ip").val(myip),today=new Date,$("#date").val(today);document.getElementById("form");navigator.geolocation?navigator.geolocation.getCurrentPosition(o):($("#latitude").val(0),$("#longitude").val(0))}});var k=[38,38,40,40,37,39,37,39,66,65],n=0;$(document).keydown(function(o){if(o.keyCode===k[n++]){if(n===k.length)return window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank"),!1}else n=0});
//# sourceMappingURL=scripts.js.map
