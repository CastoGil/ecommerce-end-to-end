import userRepository from '../Dao/user/user.js';

export const userService = {
  getAllUsers: async () => {
    return await userRepository.getAllUsers();
  },

  getUserByEmail: async (email) => {
    return await userRepository.getUserByEmail(email);
  },

  getUserById: async (uid) => {
    return await userRepository.getUserById(uid);
  },

  createUser: async (first_name, last_name, email, age, password, role) => {
    return await userRepository.createUser(first_name, last_name, email, age, password, role);
  },

  getUserByResetToken: async (resetToken) => {
    return await userRepository.getUserByResetToken(resetToken);
  },

  deleteById: async (uid) => {
    return await userRepository.deleteById(uid);
  },

  getInactiveUsers: async (cutoffDate) => {
    return await userRepository.getInactiveUsers(cutoffDate);
  },

  updateUserRole: async (uid, role) => {
    return await userRepository.updateUserRole(uid, role);
  },

  deleteUser: async (uid) => {
    return await userRepository.deleteUser(uid);
  },
};






