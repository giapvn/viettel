'use strict'

var fs = require('fs');

module.exports.checkAccountValid = function(username, password, callback){
	fs.readFile('/configs/account_config', function(err, data){
		if(err) return callback(true);
		else {
			var account = JSON.parse(data);
			if((data.username == username)&&(data.password = password)){
				callback(false);
			}else{
				callback(true);
			}			
		}
	})
};

module.exports.changeAccount = function(_username, _password, callback){
	var options = {
	  flags: 'w',
	  defaultEncoding: 'utf8',
	  fd: null,
	  mode: 0o666,
	  autoClose: true
	};

	var account = {
		username: _username,
		password: _password
	}

	fs.writeFile('account', JSON.stringify(account), options, function(err){
		if(err) return callback(true, err);
		return callback(false, account);
	});
}