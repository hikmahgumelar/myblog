var mongoose = require('mongoose');
var Schema	= mongoose.Schema;

var postSchema = new Schema({
				isi : String,
				judul : String,
				tgl : Date,
				pengarang : String


});

var posts = mongoose.model('posts', postSchema);
exports.input = function(req, res){
var tanggal = new Date();
new posts({
    judul : req.body.judul,
    isi : req.body.isi,
    tgl   : tanggal,
    pengarang : req.body.author
  }).save(function(err, prd){
    if(err) res.json(err);
    else    
          res.redirect('/show');
  });
}

exports.admin = function (req, res){

res.render('admin', {title:"Halaman Admin"});

}

exports.adddata = function(req, res){
res.render('add',{title:"add data" });

}

exports.tampil = function(req, res){
	res.render('index', {title:"Tampilan Awal"});
}


exports.show = function(req, res){ 
mongoose.model('posts').find(function(err, posts){

  res.render('data', {title:"tampil", data:posts});
});
}

exports.detail = function(req, res){

mongoose.model('posts').findById(req.params.id,function(err, posts){

  res.render('detail', {title:"detail", data:posts});
});  
}

