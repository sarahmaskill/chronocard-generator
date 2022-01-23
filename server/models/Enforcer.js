const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const enforcerSchema = new Schema({
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
    required: true,
    unique: true
   },
email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
},
password: {
    type: String,
    minlength: 5,
},
shows: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Shows'
    }
]
})

enforcerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  enforcerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const Enforcer = model('Enforcer', enforcerSchema);
  
  module.exports = Enforcer;