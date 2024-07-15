import ProductRepository from './../repositories/productRepository.js';

class ProductService {
    
    async getAllProducts() {
        return await ProductRepository.findAll();
    }

    async getAllProductsByCategory(categoryId) {
        return await ProductRepository.findAllByCategory(categoryId);
    }

    async getProductById(id) {
        return await ProductRepository.findById(id);
    }

    async deleteProduct(id) {
        return await ProductRepository.delete(id);
    }
}

export default new ProductService();
