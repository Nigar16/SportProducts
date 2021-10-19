const generalModel=require("../model/general")


const productGet=async(req,res)=>{
    
    try{
        const bringProducts= await generalModel.bringProducts();
        res.json({
            data:bringProducts,
            status:"success"
        })
    }
    catch(err){
        res.json({
            data:err,
            status:"error"
        })
    }

};

const categoryGet=async(req,res)=>{
    
    try{
        const bringCategories= await generalModel.bringCategories();
        res.json({
            data:bringCategories,
            status:"success"
        })
    }
    catch(err){
        res.json({
            data:err,
            status:"error"
        })
    }

};


const productAdd=async(req,res)=>{
    try{
        const {product_title,category_title,amount}=req.query;
        const addProduct= await generalModel.addProduct(product_title,category_title,amount);
        res.json({
            data:addProduct,
            status:"success"
        })
    }
    catch(err){
        res.json({
            data:err,
            status:"error"
        })
    }

};






module.exports={
    productGet,
    categoryGet,
    productAdd,
}