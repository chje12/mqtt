var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/', function(error, db){
    if(error) {
        console.log("error:::::::::::::::::::::::"+error);
    } else {
        // 1. 입력할 document 생성
        var michael = {name:'Michael', age:15, gender:'M'};
        // 2. student 컬렉션의 insert( ) 함수에 입력
        console.log('데이터베이스에 연결됨: '+db);

        var dbo = db.db("school");

        // 1. 입력할 documents 를 미리 생성
        var jordan = {name:'Jordan', age:16, gender:'M'};
        var amanda = {name:'Amanda', age:17, gender:'F'};
        var jessica = {name:'Jessica', age:15, gender:'F'};
        var james = {name:'James', age:19, gender:'M'};
        var catherine = {name:'Catherine', age:18, gender:'F'}

        // 2. insertMany( ) 함수에 배열 형태로 입력
        dbo.collection('student').insertMany([jordan,amanda,jessica,james,catherine]);
        db.close();
    }
});