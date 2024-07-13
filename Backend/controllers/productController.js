import ProductService from './../services/productService.js';

class ProductController {
    
    async getAll(req, res) {
        const products = await ProductService.getAllProducts();
        res.json(products);
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
