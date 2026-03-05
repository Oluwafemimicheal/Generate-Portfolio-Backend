import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  career: {
    type: String,
    required: true,
  },
  userBio: {
    type: String,
    required: true,
  },
  project: {
    type: [String],
    default: []
  },
  certification: {
    type: [String],
    default: []
  },
  socialMedia: {
    type: [String],
    default: []
  },
  mainSkills: {
    type: [String],
    default: []
  },
  otherSkills: {
    type: [String],
    default: []
  }

}, { timestamps: true })


const UserInfo = mongoose.model("UserInfo", userInfoSchema);
export default UserInfo;