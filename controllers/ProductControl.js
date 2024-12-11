
import Product from "../models/Product.js";



const addProduct = async (req, res) => {
    const { name, description, price, image, category } = req.body;
    try {
        const products = await Product.create({
            name, description, price, image, category
        });
        restart.status(201).json({ message: "successfully added Product", products })

    } catch (error) {
        restart.status(500).json({ message: error.message })

    }
}

const updateProduct = async (req, res) => {
    const { id, name, description, price } = req.body;


    try {
        const products = await Product.findByIdAndUpdate(
            id, (name, description, price),
            {
                new: true
            }

        );
        if (!products) return res.status(404).json({
            message: "Product Not Found"
        });
        res.json({ message: "Product update", products })

    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.json({ message: "Product Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { addProduct, updateProduct, deleteProduct }