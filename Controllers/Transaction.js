const express = require('express');
const app = express.Router();

const Transaction = require('../Models/Transaction');
const User = require('../Models/User');
const { default: mongoose } = require('mongoose');

app.post(
    '/transaction/',
    async(req,res)=>{
        const transaction = new Transaction(
            { amount : req.body.amount,
              category : req.body.category,
              owner : req.body.owner,
              description : req.body.description,
              paymentMethod : req.body.paymentMethod,
              ownerId : req.body.ownerId
            } 
        );

        
        try{
        const savedTransaction = await transaction.save();
        const id = savedTransaction.id;
        const ownerId = savedTransaction.ownerId;
        console.log(id);
        await User.findByIdAndUpdate(
            ownerId,
            { $push: { expenses: id } } // Append the new expense to the expenses array
        );
        res.status(201).json(savedTransaction);}
        catch(err){
            res.status(500).json({message:err.message});
        }
    }
);
module.exports = app;