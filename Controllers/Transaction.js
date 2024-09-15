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

app.get(
    '/getTransaction/:id',
    async(req,res)=>{
        try{
            const { id } = req.params;
            const documents = await Transaction.find({ownerId: id});

            if (!documents.length) {
                return res.status(404).json({ message: 'No documents found' });
            }
                
            res.status(200).json(documents);
        }catch (error) {
                    console.error("Error fetchang documents", error);
                    res.status(500).json({message: 'Internal Server Error' });
                }
        }
);

app.get(
    '/getUserBytransaction/:id',
    async(req,res)=>{
        try{
        const { id } = req.params;
        const transactionDocument = await Transaction.findById(id);
        const userId = transactionDocument.ownerId;
        const user = await User.findById(userId);



        res.status(200).json(user);
        }
        catch (error) {
            console.error("Error fetchang documents", error);
            res.status(500).json({message: 'Internal Server Error' });
        }

    }
)
module.exports = app;