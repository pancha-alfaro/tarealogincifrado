const mongoose = require("mongoose");

const Uri = "mongodb+srv://panchaalfaroh:MPo5CU9ig2FDhE0J@users.lialtqx.mongodb.net/Users";

mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos"))
.catch(err => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({

    username: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true}
});

module.exports = mongoose.model('Usuarios', userSchema);