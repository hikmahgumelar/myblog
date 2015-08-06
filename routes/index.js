var mongoose = require('mongoose');
var Schema	= mongoose.Schema;

var postSchema = new Schema({
				isi : String,
				judul : String,
				tgl : Date,
				pengarang : String


});

var posts = mongoose.model('posts', postSchema);
var input = function(req, res){
var tanggal = new Date();
new posts({
    judul : req.body.judul,
    isi : req.body.isi,
    tgl   : tanggal,
    pengarang : req.body.author
  }).save(function(err, prd){
    if(err) res.json(err);
    else    
          res.redirect('/');
  });
}

var login = function(req, res){ 
mongoose.model('posts').find(function(err, posts){

  res.render('data', {title:"Login", data:posts});
});
}


var adddata = function(req, res){
res.render('add',{title:"add data" });

}

var tampil = function(req, res){
mongoose.model('posts').find(function(err, posts){
	
  res.render('index', {title:"My Blog", data:posts});
});
}

var admin = function(req, res){ 
mongoose.model('posts').find(function(err, posts){

  res.render('data', {title:"halaman Admin", data:posts});
});
}

var detail = function(req, res){

mongoose.model('posts').findById(req.params.id,function(err, posts){

  res.render('detail', {title:"detail", data:posts});
});  
}

module.exports.input = input;
module.exports.login = login;
module.exports.adddata = adddata;
module.exports.tampil = tampil;
module.exports.admin = admin;
module.exports.detail = detail;
