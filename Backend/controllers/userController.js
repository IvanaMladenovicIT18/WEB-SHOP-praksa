import UserService from "../services/userService.js";
import generateToken from "../utils/generateToken.js";

class UserController {

    async register(req,res) {
        try {
            const userData = req.body;
            const user = await UserService.registerUser(userData);
            res.status(201).json({
                name: user.name,
                surname: user.surname,
                email: user.email,
                phoneNumber: user.phoneNumber,
                address: user.address,
                registrationDate: user. registrationDate,
                token: generateToken(user.id), 
            });
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserService.login(email, password);
            res.json({
                id: user.id,
                name: user.name,
                surname: user.surname,
                email: user.email,
                phoneNumber: user.phoneNumber,
                address: user.address,
                registrationDate: user. registrationDate,
                token: generateToken(user.id), 
            });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const userId = req.user.id;
            const userData = req.body;
            const updatedUser = await UserService.updateUser(userId, userData);
            res.json({
                id: updatedUser.id,
                name: updatedUser.name,
                surname: updatedUser.surname,
                email: updatedUser.email,
                phoneNumber: updatedUser.phoneNumber,
                address: updatedUser.address,
                registrationDate: updatedUser.registrationDate,
                token: generateToken(updatedUser.id) 
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

export default new UserController();