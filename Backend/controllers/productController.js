import ProductService from './../services/productService.js';

class ProductController {
    
    async getAll(req, res) {
        const products = await ProductService.getAllProducts();
        res.json(products);
    }

    async getAllByCategory(req, res) {
        try {
            const { categoryId } = req.params;
            const products = await ProductService.getAllProductsByCategory(categoryId);
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    async getById(req, res) {
        const product = await ProductService.getProductById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
            throw new Error("Product not found");
        }
    }

    async delete(req, res) {
        const product = await ProductService.getProductById(req.params.id);

        if (product) {
            await ProductService.deleteProduct(req.params.id);
            res.json( { message: "Product successfully deleted" });
        } else {
            res.status(404).json({ error: 'Product not found' });
            throw new Error("Product not found");
        }
    }
}

export default new ProductController();
