import users from "../database"

const showProfileUserService = (uuid) => {
    const user = users.find(user => user.uuid === uuid)

    if (user) {
        return user
    } else {
        return {message: "User not found"}
    }

}

export default showProfileUserService