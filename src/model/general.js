const DB=require("../db/connection")
const moment=require("moment");
const bcrypt = require ('bcrypt');



const bringProducts=()=>{

    return new Promise((resolve,reject)=>{

        const query=`SELECT * FROM products`;
        const filter=[];
        DB.query(query,filter,async(err,result)=>{

            if(err){
                reject(err);
                return 0;
            }

            if(result.length===0 || result==undefined ||!result){
                resolve([]);
                return 0;
            }
            resolve(result)
            return 0;
        })

    });
}

const   bringCategories=()=>{

    return new Promise((resolve,reject)=>{

        const query=`SELECT * FROM categories`;
        const filter=[];
        DB.query(query,filter,async(err,result)=>{

            if(err){
                reject(err);
                return 0;
            }

            if(result.length===0 || result==undefined ||!result){
                resolve([]);
                return 0;
            }
            resolve(result)
            return 0;
        })

    });
}


const addProduct=(product_title,category_title,amount,products_price)=>{

    return new Promise(async (resolve,reject)=>{    

    const  category_id=DB.query(`SELECT * FROM categories WHERE category_title = ? `,[category_title],async(err,result)=>{
        if(err){    
            reject(err);     
    }
        if(result.affectedRows===0){
            reject("Rows are not affected");
           
        }

        resolve(result)
        return 1;
     });

    }).then(function (category_id) {
            const query=`INSERT INTO products (product_title,category_id,category_title,amount,products_price) VALUES(?,?,?,?,?)`;
            const filter = [product_title, category_id[0].category_id, category_title, amount,products_price ];
            DB.query(query, filter, async (err, result) => {
                if (err) {
                    throw err;

                }
                if (result.affectedRows === 0) {
                    console.log("Rows are not affected");
                    return 0;
                }

                console.log("Product is successfully added");
                return 1;
            });
        });
}


module.exports={
    bringProducts,
    bringCategories,
    addProduct,
}