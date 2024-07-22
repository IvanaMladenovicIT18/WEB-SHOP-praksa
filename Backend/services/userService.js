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
}

export default new UserService();