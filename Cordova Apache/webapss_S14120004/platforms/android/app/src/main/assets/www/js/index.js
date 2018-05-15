var app = {
    initialize:function(){
        document.getElementById('btnTomarFoto').addEventListener('click', app.tomarFoto);
        document.getElementById('btnVibrar').addEventListener('click', app.vibrate);
        document.getElementById('btnStatusBateria').addEventListener('click',app.onBatteryLow)
         document.getElementById('btnNet').addEventListener('click',app.checkConnection)

        
    },
    tomarFoto: function(){
    let opts = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.PICTURE,
        encodingType: Camera.EncodingType.JPEG,
        cameraDirection: Camera.Direction.BACK,
        targetHeight:170,
        targetWidth: 200

    };
    navigator.camera.getPicture(app.guardarFoto,app.error,opts);
    },
    guardarFoto:function(imgURI){
        /*document.getElementById('msg').textContent=imgURI;*/
        document.getElementById('imgFoto').src = imgURI;
    },
    error: function(msg){
        document.getElementById('msg').textContent = msg;
    },
   vibrate: function () {

    navigator.vibrate([1000, 1000, 3000, 1000, 5000]);

   },

   onBatteryLow: function (status) {
    alert("El nivel de bateria es:" + status.level + "%");
},

checkConnection: function() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Tipo de conexion: ' + states[networkState]);
}


};
 document.addEventListener('deviceready',app.initialize);
checkConnection();



