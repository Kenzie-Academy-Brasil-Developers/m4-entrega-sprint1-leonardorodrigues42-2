import users from "../database"
import { v4 as uuidv4 } from "uuid"
import * as bcrypt from "bcrypt"

const createUserService = async (name, email, password, isAdm) => {
    
    const dateNow = Date.now()
    const hashedPassword = await bcrypt.hash(password, 10)
    
    const user = {
        uuid: uuidv4(),
        name,
        email,
        hashedPassword,
        isAdm,
        createdOn: new Date(dateNow),
        updatedOn: new Date(dateNow)
    }

    users.push(user)

    // const userReturn = user
    // delete userReturn.password
    
    return user
}

export default createUserService