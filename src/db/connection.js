const mysql=require("mysql2");

const connection=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
// dateString:true,
database:"sport_products"
})



connection.connect(error=>{
    if(error) throw error;
    console.log("Succes DB Connection")
});

module.exports=connection;