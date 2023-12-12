const Order = require("../models/OrderProduct");
// const bcrypt = require("bcrypt");
const createOrder = (newOrder) => {
  console.log("newOrder", newOrder);
  return new Promise(async (resolve, reject) => {
    const {
      orderItems,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
      fullName,
      address,
      city,
      phone,
      user,
    } = newOrder;

    try {
      const createOrder = await Order.create({
        orderItems,
        shippingAddress: {
          fullName,
          address,
          city,
          phone,
        },
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice,
        user: user,
      });
      if (createOrder) {
        resolve({
          status: "OK",
          message: "success",
          data: createOrder,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createOrder,
};
