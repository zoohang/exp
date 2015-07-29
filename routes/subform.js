var express = require('express');
var router = express.Router();

router.get('/', function (req,res) {
	/*var
	username = req.query.username,
	password = req.query.password,
	username2 = req.param('username'),
	password2 = req.param('password');

	console.log('req.query.用户名:'+username);
	console.log('req.query.密码:'+password); 
	console.log('req.param.用户名:'+username2); 
	console.log('req.param.密码:'+password2); */

	res.render('subform', {title: '提交表单及接受参数示例'});
});

router.post('/', function (req, res) {
	var
	username = req.body.username,
	password = req.body.password,
	username2 = req.param('username'),
	password2 = req.param('password');

	console.log('req.body.用户名:'+username);
	console.log('req.body.密码:'+password); 
	console.log('req.param.用户名:'+username2); 
	console.log('req.param.密码:'+password2); 

	res.render('subform', {title: '提交表单及接受参数示例'});
});

module.exports = router;