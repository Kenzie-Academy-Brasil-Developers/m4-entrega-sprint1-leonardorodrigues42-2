import deleteUserService from "../services/deleteUser.service"
import jwt from "jsonwebtoken"

const deleteUserController = (req, res) => {
    const {uuid} = req.params

    const token = req.headers.authorization?.split(" ")[1]
    const tokenPayload = jwt.decode(token, {complete: true}).payload

    if (tokenPayload.isAdm === true) {
        const deletedUser = deleteUserService(uuid)
        return res.status(200).json(deletedUser)
    } else if (tokenPayload.uuid === uuid) {
        const deletedUser = deleteUserService(uuid) 
        return res.status(200).json(deletedUser)
    } else {
        return res.status(401).json({message: "Not authorized"})
    }
}

export default deleteUserController