import listUsersService from "../services/listUsers.service"

const listUsersController = (req, res) => {
    const userList = listUsersService()

    return res.status(200).json(userList)
}

export default listUsersController