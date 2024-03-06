const express = require('express');
const Account = require('../database');
const {authMiddleware } = require('../middleware');
const router = express.Router();
const mongoose = require('mongoose');
router.use(express.json());

router.get('/balance',authMiddleware,async (req,res) =>{
    const account = await Account.findOne({ userId : req.userId })
    res.json({ balance : account.balance});
})

router.post('/transfer',authMiddleware, async (req,res) =>{
    const session = await mongoose.startSession();
    session.startTransaction();

    const { amount, to }= req.body;

    const fromAccount = await Account.findOne({ userId: req.userId }).session(session);
    if(!fromAccount || fromAccount.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({ message : "Invalid account || Insufficient balance"})
    }

    const toAccount = await Account.findOne({userId : to }).session(session);
    if(!toAccount){
        await session.abortTransaction(); 
        return res.status(400).json({message:"Invalid account !! "});
    }

        await Account.findByIdAndUpdate(
        { userId: req.userId }, 
        { $inc: {'balance' : -amount } }
        ).session(session)

        await Account.findByIdAndUpdate(
            { userId: to }, 
            { $inc: {'balance' : amount } }
        ).session(session)

        await session.commitTransaction();
        res.status(200).json({message : "Transfer successful"})
});


module.exports = router;