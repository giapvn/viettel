;
$(document).ready(function() {
    var $up = $("#up");
    var $down = $("#down");
    var $left = $("#left");
    var $right = $("#right");
    var $auto = $("#auto");

    var $brightness = document.getElementById('brightness');
    var $contrast = document.getElementById("contrast");
    var $saturation = document.getElementById('saturation');
    var $sharpness = document.getElementById('sharpness');

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

    $("#brightness").on('change', function(){
    	var brightness=$brightness.value;
    	$.post("api/setup/video",{
    		brightness: brightness
    	},
    	function(data, status){
    		console.log(status);
    	});
    });

    $("#contrast").on('change', function(){
    	var contrast=$contrast.value;
    	$.post("api/setup/video",{
    		contrast: contrast
    	},
    	function(data, status){
    		console.log(status);
    	});
    });

    $("#saturation").on('change', function(){
    	var saturation=$saturation.value;
    	$.post("api/setup/video",{
    		saturation: saturation
    	},
    	function(data, status){
    		console.log(status);
    	});
    });

    $("#sharpness").on('change', function(){
    	var sharpness=$sharpness.value;
    	$.post("api/setup/video",{
    		sharpness: sharpness
    	},
    	function(data, status){
    		console.log(status);
    	});
    });

});
