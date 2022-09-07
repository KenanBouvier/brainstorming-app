const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const startupSchema = new Schema({
  idea:{
    summary: {
      type: String,
      required:true,
    },
    problem:{
      type:String,
      required:true,
    },
    solution:{
      type:String,
      required:true,
    }
  },
  // market:{
  //   targetMarket:{
  //     type:String,
  //   },
  //   competition:{
  //     type:String,
  //   },
  //   competitiveAdvantage:{
  //     type:String,
  //   }
  // },
  // product:{
  //   useCases:{
  //     type:String,
  //   },
  //   productFeatures:{
  //     type:String,
  //   }
  // },
  // businessModel:{
  //   monetization:{
  //     type:String
  //   },
  //   outreach:{
  //     type:String
  //   }
  // },
  // execution:{
  //   keyPeople:{
  //     type:String
  //   },
  //   milestones:{
  //     type:String
  //   },
  //   nextSteps:{
  //     type:String
  //   }
  // }
},{timestamps:true});

module.exports = mongoose.model('Startup',startupSchema);