const MongoClient=require("mongodb").MongoClient;
const ObjectId=require('mongodb').ObjectID;
const dbname="crud_mongodb";
const url="mongodb+srv://Arpandbuser:9jq7YPlOvGiyeuTv@cluster0-zgvom.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
const mongoOptions={useNewUrlParser:true,useUnifiedTopology:true};

const state={
    db:null
}

const connect = (cb) => {

    if(state.db)
    cb();
    else {
        MongoClient.connect(url,mongoOptions, (err,client)=>{
            if(err)
            cb(err);
            else {
                state.db=client.db(dbname);
                cb();
            }
        })
    }


}

const getPrimaryKey = (_id) => {
return ObjectId(_id);
}


const getDB =  () =>{

    return state.db;
}


module.exports ={getDB,connect,getPrimaryKey};