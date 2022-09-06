require('dotenv').config();

const express = require('express');
const startupRoutes = require('./routes/startups')
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.json());

app.use((req,res,next)=>{
  console.log(req.path,req.method);
  next();
})


//for routes
app.use('/api/startups',startupRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    // listen for requests
    app.listen(process.env.PORT,()=>{
      console.log("Listening on port 4000!");
    });
  })
  .catch((err)=>{
    console.log(err);
  })

