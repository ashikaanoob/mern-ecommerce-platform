const express = require('express');
const router = express.Router();

const userController = require('./Controller/UserController');
const productController = require('./Controller/ProductController');
const orderController = require('./Controller/OrderController');

// Product routes
router.post('/add', productController.addProduct);
router.get('/viewall', productController.viewallProducts);

// User routes
router.get('/viewallusers', userController.viewallUsers);
router.get('/viewAuser', userController.viewAUser);
router.get('/viewUser', userController.viewUser);
router.get('/viewUserId/:id', userController.viewUserId);

router.put('/userIdandUpdate/:id', userController.userIdandUpdate);

router.post('/register', userController.userRegistration);
router.post('/userOneAndUpdate', userController.userOneAndUpdate);
router.post('/deleteUserById/:id', userController.deleteUserById);
router.post('/userOneAndDelete', userController.userOneAndDelete);

// Product routes
router.get('/viewAproduct', productController.viewAProduct);
router.get('/viewProduct', productController.viewProduct);
router.get('/viewProductId/:id', productController.viewProductId);

router.post('/viewProductIdandUpdate/:id', productController.viewProductIdandUpdate);
router.post('/productOneAndUpdate', productController.productOneAndUpdate);
router.delete('/deleteProductById/:id', productController.deleteProductById);
router.post('/productOneAndDelete', productController.productOneAndDelete);

// Auth
router.post('/login', userController.login);
router.post('/userForgotPasswordById/:id', userController.userForgotPasswordById);

//order route
router.post('/addOrder', orderController.addOrder);
router.get('/viewallOrders', orderController.viewallOrders);
router.get('/viewUserOrders/:userId', orderController.viewUserOrders);
module.exports = router;