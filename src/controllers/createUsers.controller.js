import createUserService from "../services/createUsers.service"

const createUserController = async (req, res) => {
    const { name, email, password, isAdm } = req.body

    const createdUser = await createUserService(name, email, password, isAdm)

    return res
        .status(201)
        .json(createdUser)
}

export default createUserController