const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  deleteAssociatedThoughts,
} = require('../../controllers/userController');

router.route('/users').get(getAllUsers).post(createUser);

router.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

router
  .route('/users/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
