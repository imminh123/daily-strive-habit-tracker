import mongoose from "mongoose";
const { Schema } = mongoose;

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  profile: string;
  password: string;
  notification: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    firstname: String,
    lastname: String,
    email: {
      required: true,
      type: String,
    },
    profile: String,
    password: {
      required: true,
      type: String,
    },
    notification: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    virtuals: {
      fullname: {
        get() {
          return this.firstname + " " + this.lastname;
        },
      },
    },
  },
);

export const UserModel = mongoose.model("User", UserSchema);
