// const mongoose = require("mongoose");
// const uri = "mongodb+srv://adminhamza:adminhamza123&@cluster0.pzcviot.mongodb.net/InventoryManagementApp?retryWrites=true&w=majority";

const mongoose = require("mongoose");

// Replace 'YourLocalDatabaseName' with the name of your local database
const uri = "mongodb://localhost:27017/InventoryManagement";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Additional options if needed
});

function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };