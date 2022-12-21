const mongoose = require('mongoose');
 const mushroomSchema = new mongoose.Schema({
    mushroomName: {
        type:'string',
        required:true,
    },
    mushroomVariety: {
     type:'string',
     required: true
    
    }
  
});
 const mushroom = mongoose.model("mushrooms", mushroomSchema)
 module.exports = mushroom