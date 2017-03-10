var mongoose=require('mongoose');
var db=mongoose.connect('mongodb://127.0.0.1:27017/users');
var Schema=mongoose.Schema;
var userSchema=new Schema({
	name:String,
	password:String
});
exports.user=db.model('users',userSchema);

