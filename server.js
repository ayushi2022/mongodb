var express=require('express');
var app=express();
var mongo=require('mongodb').MOngoClient;
var url="mongodb:// localhost:27017";

var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({ extended: false}));

app.get('/',function (req, res){
    res.sendfile(_dirname+'/static/index.html');
});

app.get('/login',function(req, res){
    res.sendfile(_dirname+'/static/index.html')
    // res.send("Login Please");
})

app.post('/login',function(req,res){
    let username = req.body.username;
    let password=req.body.password;
    // res.send (' username: '+ username +  ',' + ' password :' +password);

mongo.connet(url,function(err,database){
    var dbo=database.bd('mca3b');

    var query={name:username};
    dbo.collection("stuinfo").find(query).toArray(function(err,result){
        if( result.length>0)
        res.send('Correct User');
        else
        // res.send("Invalid User");
        res.sendfile(__dirname + '/static /index.html')
    });

});
 var port=8080;
 app.listen(port,function(err){
     if(err ) throw err;
     console.log("Running");
 })


})