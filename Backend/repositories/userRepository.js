
import User from './../models/UserModel.js';

class UserRepository {

    async findUserByEmail(email) {
        return User.findOne({ where: { email } });
    }

    async findById(id) {
        return await User.findByPk(id);
    }

    async createUser(userData) {
        return User.create(userData);
    }
}

export default new UserRepository();