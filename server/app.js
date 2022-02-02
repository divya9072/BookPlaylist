const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");
const cors=require('cors')

const app = express();

app.use(cors())

const URL ="mongodb+srv://Divya9072:Divimg9072@cluster0.dvcx3.mongodb.net/usertable_details?retryWrites=true&w=majority"
mongoose.connect(
  URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true, 
  },
  () => console.log("DB CONNECTED")
);

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});