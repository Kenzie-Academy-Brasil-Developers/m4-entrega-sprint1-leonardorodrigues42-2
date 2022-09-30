import users from "../database"
import jwt from "jsonwebtoken"

const userLoginService = (email) => {
    
    const user = users.find(user => user.email === email)

    const token = jwt.sign({uuid: user.uuid, isAdm: user.isAdm}, "SECRET_KEY", {expiresIn: "24h"})

    return token
}

export default userLoginService