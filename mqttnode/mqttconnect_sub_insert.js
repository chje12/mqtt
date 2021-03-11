const  mqtt = require('mqtt')

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const options = {
    host: '127.0.0.1',
    port: 1883,
    protocol: 'memo',
    //username:"cheon",
    //password:"356200",
};

const mqttClient = mqtt.connect(options);

mqttClient.subscribe('memo');

mqttClient.on('message',function (topic,myobj) {
    console.log("토픽:"+topic, "메세지:"+myobj);
    mongoClient.connect(url, function(error, db){
        if(error) {
            console.log("error:::::::::::::::::::::::"+error);
        } else {
            console.log('데이터베이스에 연결됨: '+db);

            var dbo = db.db("mqtttest");
            //var myobj = { name: "Company Inc", address: "Highway 37" };
            dbo.collection(topic).insertOne(JSON.parse(myobj), function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        }
    });
})