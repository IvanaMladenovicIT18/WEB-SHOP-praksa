import CategoryService from './../services/categoryService.js';

class CategoryController {
    
    async getAll(req, res) {
        const categories = await CategoryService.getAllCategories();
        res.json(categories);
    }

    async getById(req, res) {
        const category = await CategoryService.getCategoryById(req.params.id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ error: 'Category not found' });
            throw new Error("Category not found");
        }
    }

    async delete(req, res) {
        const category = await CategoryService.getCategoryById(req.params.id);

        if (category) {
            await CategoryService.deleteCategory(req.params.id);
            res.json( { message: "Category successfully deleted" });
        } else {
            res.status(404).json({ error: 'Category not found' });
            throw new Error("Category not found");
        }
    }
}

export default new CategoryController();
