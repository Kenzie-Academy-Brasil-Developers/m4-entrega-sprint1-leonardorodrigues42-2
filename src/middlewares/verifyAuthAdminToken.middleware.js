import jwt from "jsonwebtoken"

const verifyAuthAdminTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res
            .status(401)
            .json({ message: "Missing Authorization token"})
    }
    
    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        
        if (error) {
            return res
                .status(401)
                .json({message: "Invalid Token"})
        }

        if (decoded.isAdm) {
            next()
        } else {
            return res
            .status(401)
            .json({message: "Not authorized"})
        }
   })

}

export default verifyAuthAdminTokenMiddleware