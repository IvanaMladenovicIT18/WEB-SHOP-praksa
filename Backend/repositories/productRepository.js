import Product from "../models/ProductModel.js";

class ProductRepository {
    
    async findAll() {
        return await Product.findAll();
    }

    async findAllByCategory(categoryId) {
        return await Product.findAll({ where: { categoryID: categoryId } });
    }

    async findById(id) {
        return await Product.findByPk(id);
    }

    async delete(id) {
        return await Product.destroy({ where: { productID: id } });
    }
}

export default new ProductRepository();
