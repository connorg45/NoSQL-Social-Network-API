const { User } = require('../models');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Still in dev
  async createUser(req, res) {

  },

  async getUserById(req, res) {

  },

  async updateUser(req, res) {

  },

  async deleteUser(req, res) {

  },

  async addFriend(req, res) {

  },

  async removeFriend(req, res) {

  },
};
