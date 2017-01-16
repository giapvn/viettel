;
$(document).ready(function() {

    var $btnDefault = $("#default");
    var $btnSave = $("#save");
    var $brightness = this.getElementById("brightness");
    var $contrast = this.getElementById("contrast");
    var $saturation = this.getElementById('saturation');
    var $sharpness = this.getElementById('sharpness');
    var $fps = this.getElementById("fps");
    var $bitrate = this.getElementById("bitrate");

    // init();

    // setup default for live when start incoming setup
    // var init = function() {
        $.ajax({
            url: "http://localhost:3333/setup-video",
            type: "get",
            timeout: 2000,
            dataType: "json",
            success: function(data){
                $brightness.value = data.brightness;
                $contrast.value = data.contrast;
                $saturation.value = data.saturation;
                $sharpness.value = data.sharpness;

                // setup for video in html
                $("#stream option").filter(function() {
                    return $(this).text() == data.stream;
                }).prop('selected', true);

                $("#encode option").filter(function() {
                    return $(this).text() == data.encode;
                }).prop('selected', true);

                $("#resolution option").filter(function() {
                    return $(this).text() == data.resolution;
                }).prop('selected', true);

                $fps.value = data.fps;
                $bitrate.value = data.bitrate;
            }
        });
    // };

    $btnDefault.on("click", function() {
        $.ajax({
            url: "http://localhost:3333/setup/video/default",
            type: "get",
            timeout: 2000,
            dataType: "json",
            success: function(data) {
                // set default value for the properties

                $brightness.value = data.brightness;
                $contrast.value = data.contrast;
                $saturation.value = data.saturation;
                $sharpness.value = data.sharpness;

                $("#stream option").filter(function() {
                    return $(this).text() == data.stream;
                }).prop('selected', true);

                $("#encode option").filter(function() {
                    return $(this).text() == data.encode;
                }).prop('selected', true);

                $("#resolution option").filter(function() {
                    return $(this).text() == data.resolution;
                }).prop('selected', true);

                $fps.value = data.fps;
                $bitrate.value = data.bitrate;
            }

        });
    });

    $btnSave.on("click", function() {
        $.ajax({
            url: "http://localhost:3333/setup/video/save",
            type: "post",
            timeout: 2000,
            data: {
                brightness: $brightness.value,
                contrast: $contrast.value,
                saturation: $saturation.value,
                sharpness: $sharpness.value,
                stream: $("#stream option:selected").text(),
                encode: $("#encode option:selected").text(),
                resolution: $("#resolution option:selected").text(),
                fps: $fps.value,
                bitrate: $bitrate.value
            },
            success: function(data) {}
        });
    });
});
