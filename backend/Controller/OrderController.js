const schema=require('../models/OrderSchema');
const addOrder = (req,res)=>{
    console.log(req.body);
    const OrderSchema = new schema({

       

        productId: req.body.productId,
        userId: req.body.userId

    });
    OrderSchema.save()
        .then((result)=>{
            res.status(201).json({
                message: 'Order added successfully',
                OrderSchema: result
            });
        })
        .catch((err)=>{
            console.log(err);
        });
};
const viewallOrders = (req,res)=>{
    schema.find().populate('productId').populate('userId')
    .then((result)=>{
        res.status(200).json({
            message: 'all orders',
            OrderSchema: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};
const viewUserOrders = (req, res) => {
console.log(req.params.userId);
  schema.find({ userId: req.params.userId })
    .populate("productId")
    .then(result => {
      res.json({ orders: result });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error fetching orders" });
    });

};

module.exports = {
    addOrder,
    viewallOrders,
    viewUserOrders
};