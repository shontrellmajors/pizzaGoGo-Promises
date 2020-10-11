//PizzaGoGo - ✨🍕💵🚗
//1.Order a Pizza [x]
//2.Pay for Pizza [x]
//3.Request an Uber [x]
console.clear();

function placeAnOrder(menuItem, orderDetails) {
  console.info(`🍕 You just ordered a ${menuItem} ${orderDetails}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        menuItem,
        orderDetails,
        cost: 12.99
      })
    }, 3000);
  });
}

function payForOrder(order, cash) {
  console.info(`💵 You are paying for a ${order.menuItem} with the cost of ${order.cost}`);
  return new Promise((resolve, reject) => {
    reject("Uh oh out of pepperoni");
    setTimeout(() => {
      resolve({
        order,
        change: order.cost - cash
      })
    }, 1000);
  });
}

function orderAnUber(destination, numberOfRiders) {
  console.info(`You just hailed a ride for ${numberOfRiders} riders(s) headed towards ${destination}`);
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Your Uber has arrived");
  }, 5000);
});
}

placeAnOrder("pizza", "pepperoni")
.then((order) => payForOrder(order, 15))
.then((receipt) => orderAnUber("Broadway", 2))
.then((msg) => console.log(msg))
.catch(console.error);

  