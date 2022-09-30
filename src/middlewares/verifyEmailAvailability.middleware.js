import users from "../database"

const verifyEmailMiddleware = (req, res, next) => {
    const { email } = req.body

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists) {
        return res
            .status(400)
            .json({
                message: "This email adress is already being used"
            })
    }

    next()
}

export default verifyEmailMiddleware