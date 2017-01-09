;
$(document).ready(function() {

    var $btnDefault = $("#default");
    var $btnSave = $("#save");
    var $brightness = document.getElementById("brightness");
    var $contrast = document.getElementById("contrast");
    var $saturation = document.getElementById('saturation');
    var $sharpness = document.getElementById('sharpness');
    var $stream = document.getElementById('stream');

    var brightness, contrast, saturation, sharpness, stream, encode, resolution, fps, bitrate;



    $btnDefault.on("click", function() {
        brightness = $brightness.defaultValue;
        contrast = $contrast.defaultValue;
        saturation = $saturation.defaultValue;
        sharpness = $sharpness.defaultValue;


     


        $brightness.value = brightness;
        $contrast.value = contrast;
        $saturation.value = saturation;
        $sharpness.value = sharpness;
    });

    $btnSave.on("click", function(){
    	brightness=$brightness.value;

    	console.log(brightness);
    	$brightness.value=brightness;

    	console.log($brightness.defaultValue);
    });




});
