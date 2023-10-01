const { UserModel } = require("../modals");

exports.getAllUsers = async (req, res)=>{

    const users = await UserModel.find();

    if(users.length === 0){
        res.status(404).json({success: false, message: "No users founs"})
    }

    res.status(200).json({
        success: true,
        data: users
    })
}

exports.getSingleUserById = async (req, res)=>{
    const {id} = req.params;
    
    // const user = await UserModel.findById(id);
    // const user = await UserModel.find({_id: id})
    const user = await UserModel.findById({_id: id})

    if(!user){
        return res.status(404).json({
            success: false,
            message: "User Does Not Exist"
        })
    }
    return res.status(200).json({
        success: true,
        data: user
    })
}

exports.deleteUser = async (req, res)=>{
    const {id} = req.params;
    
    const user = await UserModel.deleteOne({
        _id: id,
    })

    if(!user)
    return res.status(404).json({success: false, message: "User Not Found"});

    // const allUsers = await UserModel.find();

    return res.status(200).json({success: true, message: "Deleted the user succesfully"});
}