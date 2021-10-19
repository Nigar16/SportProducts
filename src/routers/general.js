const router=require("express").Router();
const generalController=require("../controller/general")
router.get("/all-products",generalController.productGet);
router.get("/all-categories",generalController.categoryGet);
router.post("/add-product",generalController.productAdd);

module.exports=router;