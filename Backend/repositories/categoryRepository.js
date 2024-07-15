import Category from "../models/CategoryModel.js";

class CategoryRepository {

    async findAll() {
        return await Category.findAll();
    }

    async findById(id) {
        return await Category.findByPk(id);
    }

    async delete(id) {
        return await Category.destroy({ where: { id: id}});
    }
}

export default new CategoryRepository();