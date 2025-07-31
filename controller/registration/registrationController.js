const validationEmail = require("../../helpers/validation");

const users = [];

exports.registration = (req, res) => {
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
  const existingUser = users.find((user) => user.email === email);
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

  return res.status(201).json({
    user: newUser,
    message: "User created succssfully",
  });
};

// export const registration = (req, res) => {
//   res.send("this is proile Controller attached file api");
// };
