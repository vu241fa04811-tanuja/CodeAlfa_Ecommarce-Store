const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");
const authMiddleware = require("../middleware/authMiddleware");

/* ADD TO CART */
router.post("/add", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId,
                products: [
                    {
                        productId,
                        quantity: 1
                    }
                ]
            });
        } else {
            const existingProduct = cart.products.find(
                p => p.productId.toString() === productId
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.products.push({
                    productId,
                    quantity: 1
                });
            }
        }

        await cart.save();

        res.json({
            message: "Product added to cart",
            cart
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

/* GET CART WITH PRODUCT DETAILS */
router.get("/", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;

        const cart = await Cart.findOne({ userId })
            .populate("products.productId");

        if (!cart) {
            return res.json({
                message: "Cart is empty",
                products: []
            });
        }

        res.json(cart);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

/* REMOVE FROM CART */
router.post("/remove", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        cart.products = cart.products.filter(
            p => p.productId.toString() !== productId
        );

        await cart.save();

        res.json({
            message: "Product removed from cart",
            cart
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;