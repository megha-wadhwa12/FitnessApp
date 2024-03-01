const UserSchema = require("../Schema/UserSchema");

const getAllUser = async (req, res) => {
  try {
    const allUserData = await UserSchema.find({});
    res.status(200).json(allUserData);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching all User data" });
  }
};

const getOneUser = async (req, res) => {
  try {
    const oneUser = await UserSchema.findById(req.params.id);
    if (!oneUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: `See user for ${req.params.id}`, user: oneUser });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching single user" });
  }
};

const addUserData = async (req, res) => {
  try {
    const { Name, Username, Email_id, Password } = req.body;

    if (!Name || !Username || !Email_id || !Password) {
      res.status(400).json({ error: "Enter all fields" });
      throw new Error("Enter all fields");
    }

    const existingUser = await UserSchema.findOne({ Email_id });

    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    const createUserData = await UserSchema.create({
      Name,
      Username,
      Email_id,
      Password,
    });

    if (createUserData) {
      res.status(201).json(createUserData);
    } else {
      res.status(400).json({ message: "Error while creating new user" });
    }
  } catch (error) {
    console.error("Error in addUserData:", error);
    res.status(500).json({ message: "Error while creating" });
  }
};

module.exports = {
  getAllUser,
  getOneUser,
  addUserData,
};
