import User from "../models/userModel.js";
import Product from "../models/Product.js";

const addProductToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const user = await User.findById(req.user._id);
    const cartItem = user.cart.find(
      (item) => item.product.toString() === productId
    );

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      user.cart.push({ product: productId, quantity });
    }

    await user.save();

    const updatedCart = await User.findById(req.user._id).populate(
      "cart.product",
      "name description price"
    );

    res
      .status(200)
      .json({ message: "Product added to cart", cart: updatedCart.cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const userCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate(
      "cart.product",
      "name description price"
    );

    const validCartItems = user.cart.filter((item) => item.product !== null);

    const missingProducts = user.cart.length - validCartItems.length;
    if (missingProducts > 0) {
      user.cart = validCartItems;
      await user.save();
    }

    res.status(200).json({
      message: missingProducts
        ? `${missingProducts} product(s) in your cart are no longer available`
        : "Cart retrieved successfully",
      cart: validCartItems,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFromCart = async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  try {
    const user = await User.findById(req.user._id);

    const cartItem = user.cart.find(
      (item) => item.product.toString() === productId
    );
    if (!cartItem) {
      return res.status(404).json({ message: "Product not found in cart" });
    }
    if (quantity >= cartItem.quantity) {
      user.cart = user.cart.filter(
        (item) => item.product.toString() !== productId
      );
    } else {
      cartItem.quantity -= quantity;
    }
    await user.save();
    const updatedCart = await User.findById(req.user._id).populate(
      "cart.product",
      "name description price"
    );

    res
      .status(200)
      .json({ message: "Product removed from cart", cart: updatedCart.cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addProductToCart, userCart, deleteFromCart };
