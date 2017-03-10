var express = require('express');
var router = express.Router();
var user=require('../database/db').user;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
	res.render('login', { title: 'login' });
});
/* 登录逻辑 */
router.post('/ucenter', function(req, res, next) {
	var query={name:req.body.name,password:req.body.password};
	(function(){
		user.count(query,function(err,doc){
			if(doc==1){
				console.log(query.name+'登录成功'+new Date());
				res.render('ucenter',{title:'ucenter',username:query.name});
			}else{
				console.log(query.name+'登录失败'+new Date());
				res.redirect('/');
			}
		})
	})(query);
});

module.exports = router;
