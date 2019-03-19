import express from 'express';
import schema from '../data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';
require('dotenv').config()

let app = express();

app.use(express.static('public'));

let db;
MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true }, (err, database)=> {
  if (err) throw err;
  db = database.db("rgrjs");
  app.use('/graphql', GraphQLHTTP({
    schema: schema(db),
    graphiql: true
  }));
  app.listen(3000, () => console.log('Listening on port 3000')); 
});

app.get("/data/links", (req,res) => {
  db.collection("rgr_collection").find({}).toArray(
    (err, rgr_collection) => {
      if (err) throw err;
      res.json(rgr_collection);
    }
  );
})
// const uri = process.env.MONGO_URL;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("rgrjs").collection("rgr_collection");
//   // perform actions on the collection object
//   client.close();
// });

