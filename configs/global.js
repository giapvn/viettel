'use strict'
// protocol
const HTTP = 1;
const FTP = 2;
const RTSP = 3;
const UDP = 4;

// compression technology
const H264 = 1;

// resolution
const FULL_HD = '1920 × 1080';
const HD = '1280x720';

var DRIVER_CONFIG = {
	clientId: "1096770352055-ir0i154cd8stn8t9b1v7lpnnm7im47s1.apps.googleusercontent.com",
	clientSecret: "h7cH-ID3I5rQFdhrgi_OLzoW",
	redirectUrl: "http://localhost:3333/oauth2callback",
	ip: "192.168.3.12",
	username: "admin",
	password: "admin",
	type: "PTZ"
};

var CAMERA_CONFIG = {
	protocol: UDP,
	compression: H264,
	resolution: FULL_HD
};

module.exports.setDirverConfig = function(clientId, clientSecret, redirectUrl){
	DRIVER_CONFIG.clientId = clientId;
	DRIVER_CONFIG.clientSecret = clientSecret;
	DRIVER_CONFIG.redirectUrl = redirectUrl;
};

module.exports.getDriverConfig = function(){
	return DRIVER_CONFIG;
};

module.exports.setCameraConfig = function(protocol, compression, resolution){
	CAMERA_CONFIG.protocol = protocol;
	CAMERA_CONFIG.compression = compression;
	CAMERA_CONFIG.resolution = resolution;
};

module.exports.getCameraConfig = function(){
	return CAMERA_CONFIG;
};