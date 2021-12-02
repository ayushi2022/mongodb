var mongo= require('mongodb').MongoClient;
var url="mongodb://locathost:27017";
mongo.connect(url,function(err,database)
{
 var dbo = database.db('kiet');
 var query ={ name :"AnkitV"};
 var newvalue={$set:{_id:56, name:"kapil",city="kanpur"}}
 dbo.collection("students").updateOne(query,newvalues,function(err,result){

    console.log("updated");
    // var jsonobj=JSON.parse(result);
 });
 /* 
 // to insert the data 
 var obj=[{_id: 67,name:"kapil,city:delhi",rollno:13},{_id:99,name:"Satish",city:"Gorakpur",roll no:14}];
 dbo.colletcion("students").insertMany(obj,function(error,res){
     console.log("Records inserted");
 });
 /*
 // to create a collection
 dbo.createCollecton("employees",function(error,res)
 {
     if(error) throw error;
     condosole.log|("colection created");
 });
 */
});