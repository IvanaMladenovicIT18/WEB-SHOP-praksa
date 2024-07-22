import UserService from "../services/userService.js";

class UserController {

    async register(req,res) {
        try {
            const userData = req.body;
            const user = await UserService.registerUser(userData);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

export default new UserController();