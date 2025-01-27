const mongoose = require('mongoose');

async function mongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        const fetchdata = await mongoose.connection.db.collection('fooddata')
        fetchdata.find({}).toArray().then(async function (data) {
        const foodcatagory= await mongoose.connection.db.collection('foodcatagory')
        foodcatagory.find({}).toArray().then(async function (catagorydata){
            global.food_items=data;
            global.food_catagory=catagorydata;


        }).catch(function (error){
            console.log(error)
        })
        }).catch(function (err) {
            console.log(err)
        })

    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = mongoDB;
