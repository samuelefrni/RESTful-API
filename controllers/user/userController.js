const { User, userJoiSchema } = require("../../models/user/userModel");
const { validateRequestFunction } = require("../../utils");

const postUser = async (req, res) => {
  try {
    const error = validateRequestFunction(userJoiSchema, req, res);
    if (error) return;
    const user = await User.create(req.body);
    res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

const putUser = async (req, res) => {
  try {
    const error = validateRequestFunction(userJoiSchema, req, res);
    if (error) return;
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res
        .status(404)
        .json({ errorMessage: `User with ${id} id wasn't found` });
    }
    const upgradedUser = await User.findById(id);
    res.status(200).json({ upgradedUser });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToDelete = await User.findByIdAndDelete(id);
    if (!userToDelete) {
      return res
        .status(404)
        .json({ errorMessage: `User with ${id} id wasn't found` });
    }
    res.status(200).json({ userToDelete });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { postUser, putUser, deleteUser };
