
const Schema = require('../models/ProductSchema');
const addProduct = (req,res)=>{
    const ProductSchema = new Schema({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image 

    });
    ProductSchema.save()
       .then((result)=>{
        res.status(201).json({
            message: 'added new product successfully',
            ProductSchema: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};
const viewallProducts = (req,res)=>{
    Schema.find()
    .then((result)=>{
        res.status(200).json({
            message: 'all products',
            ProductSchema: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });

}
const viewAProduct = (req,res)=>{
    Schema.find({description:"Electronic Device"})
    .then((result)=>{
        res.status(200).json({
            message: 'product found',
            ProductSchema: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};
const viewProduct = (req,res)=>{
    Schema.findOne({description:"Electronic Device"})
    .then((result)=>{
        res.status(200).json({
            message: 'product found',
            ProductSchema: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};
const viewProductId = (req,res)=>{
    Schema.findById(req.params.id)
    .then((result)=>{
        res.status(200).json({
            message: 'product found',
            ProductSchema: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};
const viewProductIdandUpdate = (req,res)=>{
    const {name, description, price, category} = req.body;
    Schema.findByIdAndUpdate(req.params.id, {name, description, price, category}, {new:true})
    .then((result)=>{
        res.status(200).json({
            message: 'product updated',
            ProductSchema: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};

const productOneAndUpdate = (req,res)=>{
    const {name, description, price, category} = req.body;
    Schema.findOneAndUpdate({category:"Laptop"}, {name, description, price, category}, {new:true})
    .then((result)=>{
        res.status(200).json({
            message: 'product updated',
            ProductSchema: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};
const deleteProductById = (req,res)=>{
    Schema.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.status(200).json({
            message: 'product deleted',
            ProductSchema: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};

const productOneAndDelete = (req,res)=>{
    const { category} = req.body;
    Schema.findOneAndDelete({category:category})

    .then((result)=>{
        res.status(200).json({
            message: 'User deleted successfully',
            User: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};

module.exports = {
        addProduct,
        viewallProducts,
        viewAProduct,
        viewProduct,
        viewProductId,
        viewProductIdandUpdate,
        productOneAndUpdate,
        deleteProductById,
        productOneAndDelete
    }



