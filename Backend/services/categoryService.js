import CategoryRepository from "../repositories/categoryRepository.js";

class CategoryService {

    async getAllCategories() {
        return await CategoryRepository.findAll();
    }

    async getCategoryById(id) {
        return await CategoryRepository.findById(id);
    }

    async deleteCategory(id) {
        return await CategoryRepository.delete(id);
    }
}

export default new CategoryService();