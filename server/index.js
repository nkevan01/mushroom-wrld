const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.json())
 const mushroomModel = require('./Models/Mushrooms');
mongoose.connect("mongodb+srv://nkevan01:password1234@cluster0.hvymqly.mongodb.net/?retryWrites=true&w=majority", () => {
    useNewUrlParser:true
});

app.get("/", async (req, res) => {
    const mushroom = new mushroomModel({mushroomName:'Enoki', mushroomVariety:'Choice'});

    try {
        await mushroom.save();
        res.send("inserted Data")
    } catch(err){
        console.log(err)
    }
})




app.listen(3001, () => {
console.log("Server is running on port 3001.")
});