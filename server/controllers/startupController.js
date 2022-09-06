const Startup = require('../models/startupModel');
const mongoose = require('mongoose');

//get all startups
const getStartups = async(req,res)=>{
  //gets all but can put parameters in find() function
  const startups = await Startup.find({}).sort({createdAt:-1});
  res.status(200).json(startups);
}

// get single startup
const getStartup = async(req,res)=>{
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"No such startup exists"});
  }

  const startup = await Startup.findById(id);
  if(!startup){
    return res.status(404).json({error:"No such startup exists"})
  }
  return res.status(200).json(startup);
}

//create new startup
const createStartup = async(req,res)=>{
  const {idea} = req.body;
  try{
    const startup = await Startup.create({idea})
    res.status(200).json(startup);
  }catch(error){
    res.status(400).json({error:error.message});
  } 
}

//delete a startup
const deleteStartup = async(req,res)=>{
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"No such startup exists"});
  }

  // await Startup.findByIdAndDelete(id);
  const startup = await Startup.findOneAndDelete({_id:id});
  if(!startup){
    return res.status(400).json({error:"No such startup exists"});
  } 
  res.status(200).json(startup);
}

//update a startup
const updateStartup = async(req,res) =>{
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"No such startup exists"});
  }

  const startup = await Startup.findOneAndUpdate({_id:id},{...req.body})

  if(!startup){
    return res.status(400).json({error:"No such startup exists"});
  }
  res.status(200).json(startup);
}

module.exports = {
  getStartups,
  getStartup,
  deleteStartup,
  createStartup,
  updateStartup,
}