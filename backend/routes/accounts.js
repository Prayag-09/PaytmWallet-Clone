const express = require('express');
const { Account } = require('../database');
const { authMiddleware } = require('../middleware');
const router = express.Router();
const mongoose = require('mongoose');
router.use(express.json());

router.get('/balance', authMiddleware, async (req, res) => {
    try {
        // Fetch account balance
        const account = await Account.findOne({ userId: req.userId });
        if (!account) {
            return res.status(404).json({ message: "Account not found" });
        }
        res.json({ balance: account.balance });
    } catch (error) {
        console.error("Error fetching balance:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const { amount, to } = req.body;

        // Find sender's account
        const fromAccount = await Account.findOne({ userId: req.userId }).session(session);
        if (!fromAccount || fromAccount.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid account or insufficient balance" });
        }

        // Find recipient's account
        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid recipient account" });
        }

        // Deduct amount from sender's account
        await Account.updateOne({ userId: req.userId }, { $inc: { 'balance': -amount } }, { session });
        // Add amount to recipient's account
        await Account.updateOne({ userId: to }, { $inc: { 'balance': amount } }, { session });

        await session.commitTransaction();
        res.status(200).json({ message: "Transfer successful" });
    } catch (error) {
        await session.abortTransaction();
        console.error("Error transferring funds:", error);
        res.status(500).json({ message: "Internal server error" });
    } finally {
        session.endSession();
    }
});

module.exports = router;