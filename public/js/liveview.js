;
$(document).ready(function() {
    var $up = $("#up");
    var $down = $("#down");
    var $left = $("#left");
    var $right = $("#right");
    var $auto = $("#auto");

    var $brightness = this.getElementById('brightness');
    var $contrast = this.getElementById("contrast");
    var $saturation = this.getElementById('saturation');
    var $sharpness = this.getElementById('sharpness');

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
            }
        });
    // };

    // send controlsignal
    $up.on('click', function() {
        $.post("api/control/", {
                ptz: 1
            },
            function(data, status) {
                console.log(status);
            });
    });

    $down.on('click', function() {
        $.post("api/control", {
                ptz: 3
            },
            function(data, status) {
                console.log(status);
            });
    });

    $left.on('click', function() {
        $.post("api/control", {
                ptz: 4
            },
            function(data, status) {
                console.log(status);
            });
    });

    $right.on('click', function() {
        $.post("api/control", {
                ptz: 2
            },
            function(data, status) {
                console.log(status);
            });
    });

    $auto.on('click', function() {
        $.post("api/control", {
                ptz: 0
            },
            function(data, status) {
                console.log(status);
            });
    });

    // send live setting
    $("#brightness").on('change', function() {
        var brightness = $brightness.value;
        $.post("api/setup/live", {
                brightness: brightness
            },
            function(data, status) {
                console.log(status);
            });
    });

    $("#contrast").on('change', function() {
        var contrast = $contrast.value;
        $.post("api/setup/live", {
                contrast: contrast
            },
            function(data, status) {
                console.log(status);
            });
    });

    $("#saturation").on('change', function() {
        var saturation = $saturation.value;
        $.post("api/setup/live", {
                saturation: saturation
            },
            function(data, status) {
                console.log(status);
            });
    });

    $("#sharpness").on('change', function() {
        var sharpness = $sharpness.value;
        $.post("api/setup/live", {
                sharpness: sharpness
            },
            function(data, status) {
                console.log(status);
            });
    });

});
