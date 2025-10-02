import express from "express"
import bcrypt from "bcryptjs"
import User from "../Model/UserModel.js"

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
        res.status(200).json({message: "User craeted successfully", user})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Server error"})
    }
})

export default router