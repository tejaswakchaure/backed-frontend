import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

async function addData(req ,res){
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("mydb");
    const myCollection = db.collection("message");

    await myCollection.insertOne({
        message : req.query.message || "No Data",
    });

    await client.close()
    res.json({status : "Add succesfully"});
}

async function readData(req,res){
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("mydb");
    const myCollection = db.collection("message");

    let list = await myCollection.find().toArray();

    await client.close();
    res.json(list);

}


app.get("/add",addData);
app.get("/read",readData);

app.listen(4000);