const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: 'Path `email` is required and must be a valid email address.'
    }
  },
  order_data: {
    type: Array,
    required: true
  }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;