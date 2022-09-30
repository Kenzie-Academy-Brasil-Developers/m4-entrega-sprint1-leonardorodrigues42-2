import users from "../database"

const updateUserServices = (uuid, name, email) => {
    const user = users.find(user => user.uuid === uuid)
    const userIndex = users.findIndex(user => user.uuid === uuid)

    const dateNow = Date.now()

    let updatedUser = {}

    if (name && email) {
        updatedUser = {
            ...user,
            name,
            email,
            updatedOn: new Date(dateNow)
        }
    } else if (name) {
        updatedUser = {
            ...user,
            name,
            updatedOn: new Date(dateNow)
        }
    } else if (email) {
        updatedUser = {
            ...user,
            email,
            updatedOn: new Date(dateNow)
        }
    }

    users[userIndex] = updatedUser

    return updatedUser
}

export default updateUserServices