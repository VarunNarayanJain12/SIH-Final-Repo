const mongoose = require("mongoose");
//const mongooseUniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required:true, unique: true},
    password: {type: String, required:true}
})

//userSchema.plugin(mongooseUniqueValidator)

const Users = mongoose.model("Users", userSchema);
module.exports = Users;