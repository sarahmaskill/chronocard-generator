const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const deputySchema = new Schema({
firstName: {
    type: String,
    trim: true
},
lastName: {
    type: String, 
    trim: true
},
handle: {
    type: String,
    trim: true,
    required: true
   },
email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
},
password: {
    type: String,
    required: true,
    minlength: 5,
},
shows: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Shows'
    }
],
enforcers: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Enforcer'
    }
],
})

deputySchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  deputySchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const Deputy = model('Deputy', deputySchema);
  
  module.exports = Deputy;