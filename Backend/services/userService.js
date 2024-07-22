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
}

export default new UserService();