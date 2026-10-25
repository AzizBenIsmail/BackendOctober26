const userModel = require("../models/users.model");

module.exports.esmFunction = (req, res) => {
  try {
    //logic
    res.status(200).json("message de reponse de la fonction exportée");
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.Hey = (req, res) => {
  try {
    const message1 = "Hello from the controller!";
    const message2 = "marhbe bik";
    const message = message1 + " " + message2;
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//crud operations -> Read, Create, Delete , Update

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.createUser = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

module.exports.getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
