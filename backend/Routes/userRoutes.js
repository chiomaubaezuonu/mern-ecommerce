import express from "express";
import bcrypt from "bcryptjs";
import User from "../Model/UserModel.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(403).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid email or password!!" });
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      res.status(400).json({ message: " Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "7d" }
    );
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "No user with that email" });
    }
    const generateResetToken = (userId) => {
      return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
    };
    const resetToken = generateResetToken(user.id);
    user.resetToken = await bcrypt.hash(resetToken, 10);

    await user.save();
    const resetLink = `${
      process.env.FRONTEND_URL || "http://localhost:5173"
    }/reset-password/${resetToken}`;
    const mailTransporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 2525,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_API_KEY,
      },
    });

    const mail = await mailTransporter.sendMail({
      from: "preciousness023@gmail.com",
      to: user.email,
      subject: "Password reset request",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`,
    });
    res.status(200).json({ message: "Password reset email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/reset-password", async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;
    console.log("=== RESET PASSWORD DEBUG ===");
    console.log("Reset token received:", resetToken);
    console.log("New password provided:", !!newPassword);

    if (!resetToken || !newPassword) {
      return res
        .status(400)
        .json({ message: "Reset token and password are required" });
    }
    const verifiedToken = jwt.verify(resetToken, process.env.JWT_SECRET);
    if (!verifiedToken) {
      return res.status(404).json({ message: "Invalid or expired token" });
    }
    const user = await User.findById(verifiedToken.id);
    const isTokenMatched = await bcrypt.compare(resetToken, user.resetToken);
    if (!isTokenMatched) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();
    user.resetToken = null;
    await user.save();
    res.status(200).json({ message: "Password reset successfull!!" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid or expired token" });
  }
});

export default router;
