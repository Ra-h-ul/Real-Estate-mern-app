import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import JWT from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log(username);
    console.log(password);
    console.log(email);

    //Hash the password using bcrypt
    // we use await because bcrypt.hash is an async function
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);


  

    //create new user and save it to db
    // this prisma is my prisma client
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedpassword,
      },
    });

    console.log(newUser);

    res.status(201).json("user created sucessfully");
  } catch (err) {
    console.log(err);
    res.status(400).json("Failed to create user");
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // check if username exist in our db
    // this either returns null || returns db data
    const isPresent = await prisma.user.findUnique({
      where: { username: username },
    });
    if (!isPresent)
      return res.status(400).json({ message: "invalid credentails" });

    // check if password is correct
    const isCorrect = await bcrypt.compare(password, isPresent.password);
    if (!isCorrect)
      return res.status(400).json({ message: "invalid credentails" });

    //create user data for response
    const { password:userpassword , ...userinfo} = isPresent;


    //generate a cookie token (JWT)
    //secure is false because localhost is http
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = JWT.sign({ id: isPresent.id }, process.env.JWT_KEY, {
      expiresIn: age,
    });

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: age, //cookie will expire in 7 days
      })
      .status(200)
      .json(userinfo);

  } catch (error) {
    console.log(error);
    res.status(400).json({ messaage: "Error occured " });
  }
};

export const logout = (req, res) => {
 

  try {
    res.clearCookie("token").status(200).json({
      message: "logout sucessful"
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error occured"
    })
  }
};

export default { register, login, logout };
