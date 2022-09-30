import showProfileUserService from "../services/showProfileUser.service"
import jwt from "jsonwebtoken"

const showProfileUserController = (req, res) => {
    const token = req.headers.authorization.split(" ")[1]

    const tokenPayload = jwt.decode(token, {complete: true}).payload

    const showProfile = showProfileUserService(tokenPayload.uuid)

    return res.status(200).json(showProfile)
}

export default showProfileUserController