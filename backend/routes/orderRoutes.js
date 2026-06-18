const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Cart = require("../models/Cart");
const authMiddleware = require("../middleware/authMiddleware");

/* PLACE ORDER */
router.post("/create", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;

        const cart = await Cart.findOne({ userId })
            .populate("products.productId");

        if (!cart || cart.products.length === 0) {
            return res.status(400).json({
                message: "Cart is empty"
            });
        }

        let totalAmount = 0;

        cart.products.forEach(item => {
            totalAmount += item.productId.price * item.quantity;
        });

        const order = new Order({
            userId,
            products: cart.products,
            totalAmount
        });

        await order.save();

        // Empty cart after order
        cart.products = [];
        await cart.save();

        res.json({
            message: "Order placed successfully",
            order
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

/* GET MY ORDERS */
router.get("/", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;

        const orders = await Order.find({ userId })
            .populate("products.productId");

        res.json(orders);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;