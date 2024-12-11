import Product from "../models/Product.js";

const addProduct = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const product = await Product.create({ name, description, price });
    res.status(201).json({ message: "Product added", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id, name, description, price } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product updated", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addProduct, updateProduct, deleteProduct };
