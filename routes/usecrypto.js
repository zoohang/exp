var express = require('express');
var router = express.Router();
var crypto = require('crypto');

router.get('/', function (req, res) {
	res.render('usecrypto', {title: '加密字符串示例'});
});

router.post('/', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;

	var md5 = crypto.createHash('md5');
	var pwd = md5.update(password).digest('hex');
	console.log('加密后的密码:'+pwd);
	res.render('usecrypto', {title:'加密字符串示例'});
});

module.exports = router;