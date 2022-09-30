import updateUserServices from "../services/updateUsers.service"
import jwt from "jsonwebtoken"

const updateUserController = (req, res) => {
    const {uuid} = req.params
    const {name, email} = req.body

    let updatedUser = {}

    const token = req.headers.authorization?.split(" ")[1]
    const tokenPayload = jwt.decode(token, {complete: true}).payload

    if (tokenPayload.isAdm === true) {
        updatedUser = updateUserServices(uuid,name, email)
    } else if (tokenPayload.uuid === uuid) {
        updatedUser = updateUserServices(uuid,name, email)
    } else {
        return res.status(401).json({message: "Not authorized"})
    }

    return res.status(200).json(updatedUser)
}

export default updateUserController