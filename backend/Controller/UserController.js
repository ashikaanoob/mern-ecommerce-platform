const Schema = require('../models/user');
const userRegistration= (req,res)=>{
    
    const User = new Schema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
       
    });
    User.save()
    .then((result)=>{
        res.status(201).json({
            message: 'User registered successfully',
            User: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};
const viewallUsers = (req,res)=>{
    Schema.find()
    .then((result)=>{
        res.status(200).json({
            message: 'all users',
            User: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};
const viewAUser = (req,res)=>{
    Schema.find({lastName:"Ashraf"})
    .then((result)=>{
        res.status(200).json({
            message: 'a user',
            User: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });

}
const viewUser = (req,res)=>{
    Schema.findOne({lastName:"Ashraf"})
    .then((result)=>{
        res.status(200).json({
            message: 'a user',
            User: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });

}
const viewUserId = (req,res)=>{
    console.log(req.params)
    Schema.findById(req.params.id)
    .then((result)=>{
        res.status(200).json({
            message: 'a user',
            User: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });

}
const userIdandUpdate = (req,res)=>{
    
    const {firstName, lastName, tel, email, address, password} = req.body;
    Schema.findByIdAndUpdate(req.params.id,{firstName, lastName, tel, email, address, password},{new:true})
    .then((result)=>{
        res.status(200).json({
            message: 'User updated successfully',
            User: result
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};
const userOneAndUpdate = (req,res)=>{
    const {firstName, lastName, tel, email, address, password} = req.body;
    Schema.findOneAndUpdate({lastName:"Ashraf"},{firstName, lastName, tel, email, address, password},{new:true})
    .then((result)=>{
        res.status(200).json({
            message: 'User updated successfully',
            User: result
        });
    }
    )
    .catch((err)=>{
        console.log(err);
    });
};
const deleteUserById = (req,res)=>{
    const {firstName, lastName, tel, email, address, password} = req.body;

    Schema.findByIdAndDelete({ _id: req.params.id })
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
const userOneAndDelete = (req,res)=>{
    const { address} = req.body;
    Schema.findOneAndDelete({address:address})

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
const login = async(req,res)=>{
    const {email} = req.body;
    console.log(email);
    try{
   const a= await Schema.findOne({email:email})
    console.log(a); 
    
   if(!a){
    return res.status(404).json({
        message: 'User not found'
    });
    }
    else if(a.password !== req.body.password){
        return res.status(401).json({
            message: 'Invalid password'
        });
    }
    else{
        return res.status(200).json({
            message: 'Login successful',
            User: a
        });
    }
   }catch(err){
    console.log(err);
    return res.status(500).json({
        message: 'Internal server error'
    });
}


   
}

const userForgotPasswordById= (req,res)=>{
    const {password} = req.body;
    console.log(password);
    Schema.findByIdAndUpdate(req.params.id,{password:password},{new:true})
     .then((result)=>{
         res.status(200).json({
                message: 'Password updated successfully',
                User: result
            });
     })
     .catch((err)=>{
         console.log(err);
         return res.status(500).json({
             message: 'Internal server error'
         });
     });
}




module.exports = {
    userRegistration,
    viewallUsers,
    viewAUser,
    viewUser,
    viewUserId,
    userIdandUpdate,
    userOneAndUpdate,
    deleteUserById,
    userOneAndDelete,
    login,
    userForgotPasswordById
}

   


