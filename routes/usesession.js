var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.locals.hello = 'hhhhhhhello';
	if(req.session.islogin) {
		console.log('usesession:'+ req.session.islogin);
		res.locals.islogin = req.session.islogin;
	}
	req.session.username = 'zhangsan';
	req.session.sex = 'man';
	console.log(req.session);
	res.render('usesession', {title:'session示例'});
});

router.post('/', function (req, res) {
	req.session.islogin = 'success';
	res.locals.islogin = req.session.islogin;
	res.render('usesession', {title:'session示例'});
});

module.exports = router;