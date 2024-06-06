const { User, userJoiSchema } = require("../../models/user/userModel");
const { validateRequestFunction } = require("../../utils");

const postUser = async (req, res) => {
  try {
    const error = validateRequestFunction(userJoiSchema, req, res);
    if (error) return;
    const user = await User.create(req.body);
    return res.status(200).json({ user });
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
    return res.status(200).json({ upgradedUser });
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
    return res.status(200).json({ userToDelete });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const userById = await User.findById(id);

      if (!userById) {
        return res
          .status(404)
          .json({ errorMessage: `User with ${id} id wasn't found` });
      }

      return res.status(200).json({ userById });
    }

    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ errorMessage: "There aren't any users" });
    }

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { postUser, putUser, deleteUser, getUser };
