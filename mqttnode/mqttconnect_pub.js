const  mqtt = require('mqtt')

const options = {
    host: '127.0.0.1',
    port: 1883,
    protocol: 'memo',
    //username:"cheon",
    //password:"356200",
};

const client = mqtt.connect(options);

buf = {
    "name": "chen",
    "data": "test",
};

//2초마다
setInterval(
    ()=> {
        client.publish('memo',JSON.stringify(buf),{qos:2});
    },
    2000
);
