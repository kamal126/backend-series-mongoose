import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    // username: String,
    // email: String,
    // isActivate: Boolean

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      // required: true
      required: [true, 'password is required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);

/* User database ke andar plural form mai store hota hai.
User ----> users
and isko lower case mai hi store karta hai
*/
