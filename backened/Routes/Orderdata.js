const express = require('express');
const Orders = require('../models/Order'); // Update the path to the correct location
const router = express.Router();

router.post('/orderdata', async (req, res) => {
  let data = req.body.order_data;
  data.unshift({ Order_date: req.body.order_date });

  let eId = await Orders.findOne({ "email": req.body.email });

  if (eId == null) {
    try {
      await Orders.create({
        email: req.body.email,
        order_data: [data],
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    try {
      await Orders.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      );
      res.json({ success: true });
    } catch (error) {
      console.log(error.message);
      res.send("server error", error.message);
    }
  }
});

router.post('/myorderdata', async(req,res)=>{
  let data=await Orders.findOne({"email":req.body.email})
  res.json({orderdata:data})

})
module.exports = router;
