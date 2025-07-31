// export const loginUser = (req, res) => {
//   res.send("this is separeated login or Auth controller api foooor");
// };

const { validationEmail } = require("../../helpers/validation");

const users = [];

exports.loginUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        message: "please entire all field",
      });
    }
    //email validation

    if (!validationEmail(email)) {
      return res.status(400).json({
        message: "please entar a valid email",
      });
    }
    //check email already exists
    const existingUser = await users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(409).json({
        message: "email already exist",
      });
    }

    //successfully send the user data to response
    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      email,
    };
    //save
    users.push(newUser);

    res.status(201).json({
      user: newUser,
      message: "User created succssfully",
    });
  } catch (error) {
    console.log(error);
  }
};
