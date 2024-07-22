
import User from './../models/UserModel.js';

class UserRepository {

    async findUserByEmail(email) {
        return User.findOne({ where: { email } });
    }

    async createUser(userData) {
        return User.create(userData);
    }
}

export default new UserRepository();