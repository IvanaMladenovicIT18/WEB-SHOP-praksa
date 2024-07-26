import UserRepository from '../repositories/userRepository.js'

class UserService {

    async registerUser(userData) {

        const userExists = await UserRepository.findUserByEmail(userData.email);

        if (userExists) {
            throw new Error('User with this email already exists');
        }

        const user = await UserRepository.createUser(userData);

        return user;
    }

    async login(email, password) {

        const user = await UserRepository.findUserByEmail(email);

        if (user && (await user.matchPassword(password))) {
            return user;
        }

        throw new Error("Invalid email or password");
    }

    async updateUser(userId, userData) {
        const user = await UserRepository.findById(userId);

        if (user) {

            userData.name = userData.name || user.name;
            userData.surname = userData.surname || user.surname;
            userData.phoneNumber = userData.phoneNumber || user.phoneNumber;
            userData.address = userData.address || user.address;

            const updatedUser = user.update(userData);

            return updatedUser;
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    }
}

export default new UserService();