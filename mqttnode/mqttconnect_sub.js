const  mqtt = require('mqtt')

const options = {
    host: '127.0.0.1',
    port: 1883,
    protocol: 'memo',
    //username:"cheon",
    //password:"356200",
};

const client = mqtt.connect(options);

client.subscribe('memo');

client.on('message',function (topic,message) {
    console.log("토픽:"+topic, "메세지:"+message);
})