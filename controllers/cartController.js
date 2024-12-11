import User from "../models/userModel.js";
import Product from "../models/Product.js";

const addProductToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });
    const user = await User.findById(req.user._id);
    const existingItem = user.cart.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      user.cart.push({ product: productId, quantity });
    }

    await user.save();
    res.json({ message: "Product added to cart", cart: user.cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const userCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select("name cart")
      .populate("cart.product", "name description price");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      userName: user.name,
      cart: user.cart,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFromCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const user = await User.findById(req.user._id);

    const cartItemIndex = user.cart.findIndex(
      (item) => item.product.toString() === productId
    );

    if (cartItemIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    const currentQuantity = user.cart[cartItemIndex].quantity;

    if (quantity >= currentQuantity) {
      user.cart.splice(cartItemIndex, 1);
    } else {
      user.cart[cartItemIndex].quantity -= quantity;
    }

    await user.save();

    const populatedCart = await User.findById(req.user._id).populate(
      "cart.product",
      "name description price"
    );

    res.json({
      message: "Product quantity updated in cart",
      cart: populatedCart.cart,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addProductToCart, userCart, deleteFromCart };
