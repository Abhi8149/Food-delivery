const express=require('express')
const router=express.Router()

router.post('/FoodData', (req,res)=>{
    try {
        return res.send([ global.food_items, global.food_catagory])
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

module.exports=router
