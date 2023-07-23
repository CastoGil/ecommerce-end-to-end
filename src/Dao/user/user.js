import { userModel } from "../models/user.js";

const userDAO = {
  getAllUsers: async () => {
    return await userModel.find().select("first_name last_name email role");
  },

  getUserByEmail: async (email) => {
    return await userModel.findOne({ email });
  },

  getUserById: async (uid) => {
    return await userModel.findById(uid);
  },

  createUser: async (first_name, last_name, email, age, password, role) => {
    const user = new userModel({
      first_name,
      last_name,
      email,
      age: parseInt(age),
      password,
      role,
    });
    return await user.save();
  },

  getUserByResetToken: async (resetToken) => {
    return await userModel.findOne({ resetToken });
  },

  deleteById: async (uid) => {
    return await userModel.findByIdAndDelete(uid);
  },

  getInactiveUsers: async (cutoffDate) => {
    return await userModel.find({ last_connection: { $lt: cutoffDate } });
  },

  updateUserRole: async (uid, role) => {
    return await userModel.findByIdAndUpdate(uid, { role });
  },

  deleteUser: async (uid) => {
    return await userModel.findByIdAndDelete(uid);
  },
};

export default userDAO;

