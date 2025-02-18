"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
            },
            message: '{VALUE} is not a valid email',
        },
        immutable: true,
    },
    products: [
        {
            product: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Product',
                required: [true, 'Product is required'],
            },
            quantity: {
                type: Number,
                required: [true, 'Quantity is required'],
                min: [1, 'Quantity must be at least 1'],
            },
            price: {
                type: Number,
                required: [true, 'Total price is required'],
                min: [0, 'Total price must be a positive number'],
            },
        },
    ],
    totalItems: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [1, 'Quantity must be at least 1']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required'],
        min: [0, 'Total price must be a positive number']
    },
    trxID: {
        type: String,
        required: false
    },
});
exports.OrderModel = (0, mongoose_1.model)('Order', orderSchema);
/*


{
  email: 'mosiur@gmail.com',
  products: [
    {
      product: '67a09b1e9d35af19f98d70df',
      quantity: 4,
      price: 20,
      _id: '67a6fd3c9756b868587819bd'
    }
  ],
  totalItems: 4,
  totalPrice: 80,
  _id: '67a6fd3c9756b868587819bc',
 








*/ 
