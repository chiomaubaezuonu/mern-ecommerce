import express from "express"
import bcrypt from "bcryptjs"
import User from "../Model/UserModel.js"
import jwt from "jsonwebtoken"

const router = express.Router()

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const existingUser = await User.findOne({email})
        if(existingUser){
            res.status(403).json({message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        res.status(201).json({message: "User created successfully", user})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Server error"})
    }
})

router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if(!user) {
            res.status(400).json({message: "Invalid email or password!!"})
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if(!isPasswordMatched){
            res.status(400).json({message: " Invalid email or password"})
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || "secret123",
            { expiresIn: "7d" }
        )
        res.status(200).json({message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({message : "Server error"})
    }
}) 

export default router