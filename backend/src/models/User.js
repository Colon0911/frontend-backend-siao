import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { model, Schema } = mongoose;

const userSchema = new Schema(
  {
    identificationType: {
      type: String,
      required: true,
      trim: true,
    },
    identification: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    confirmation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

// Hash password
userSchema.pre("save", async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

// Compare Passwords // Mover al controlador
userSchema.methods.comparePassword = async function (pass) {
  const user = this;
  return await bcrypt.compare(pass, user.password);
};

export default model("User", userSchema);
