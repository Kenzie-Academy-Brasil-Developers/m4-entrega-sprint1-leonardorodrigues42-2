import userLoginService from "../services/userLogin.service"

const userLoginController = (req, res) => {
    const { email } = req.body

    const token = userLoginService(email)

    return res
        .status(200)
        .json({token})
}

export default userLoginController