import users from "../database"
import * as bcrypt from "bcrypt"

const verifyLoginMiddleware = (req, res, next) => {
    const { email, password } = req.body

    const user = users.find(user => user.email === email)

    if (!user) {
        return res.status(401).json({message: "Email ou senha inválidos"})
    }

    const passwordMatch = bcrypt.compareSync(password, user.hashedPassword)

    if (!passwordMatch) {
        return res.status(401).json({message: "Email ou senha inválidos"})
    }

    next()
}

export default verifyLoginMiddleware