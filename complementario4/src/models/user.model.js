const mongoose  =  require('mongoose') 
const { Schema } = mongoose;
const { genSaltSync, compareSync, hashSync } = require('bcryptjs');

const UserSchema =   new Schema({
    name : { type:String, required: true },
    username : {type:String , required:true},
    password : {type:String , required:true},
    tipo : {type:String , required:true}

})

UserSchema.methods.toJSON = function(){
    let user = this.toObject();
    delete password;
    return user;
}
UserSchema.methods.comparePassword = function(password){
    return compareSync( password,  this.password);
}
UserSchema.pre('save', async  function(next){

    const user = this;
    if ( user.isModified("password") )
    {
        next();
    }

    const salt = genSaltSync(10);
    const hashPassword =   hashSync(user.password, salt);
    user.password = hashPassword;
    next();

})
module.exports = mongoose.model('user', UserSchema);