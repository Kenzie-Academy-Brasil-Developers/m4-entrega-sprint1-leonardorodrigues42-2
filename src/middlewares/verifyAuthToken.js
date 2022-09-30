import jwt from "jsonwebtoken"

const verifyAuthTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res
            .status(401)
            .json({ message: `${token}`})
    }

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        
        if (error) {
            return res
                .status(401)
                .json({message: `${token}`})
        }
    })
    next()
}

export default verifyAuthTokenMiddleware