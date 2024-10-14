//ASSIGNMENTS
const cart = [
  { title: "Laptop", price: 1000, quantity: 1 },
  { title: "Headphones", price: 200, quantity: 2 },
  { title: "Mouse", price: 50, quantity: 3 },
  { title: "AirPods", price: 400, quantity: 2 },
  { title: "TV", price: 1200, quantity: 2 },
];

// 1. Write a function that prints out the title of each product in the cart array.
const printCartItemsTitle = () => {
  cart.map((item) => {
    const { title } = item;
    console.log(title);
  });
};
printCartItemsTitle();

// 2. Write a function that calculates the total number of items (quantity) in the cart.
const totalQuantity = () => {
  return cart.reduce((prev, curr) => prev + curr.quantity, 0);
};
console.log(totalQuantity());

// 3. Write a function that finds and prints the most expensive product in the cart.
const mostExpensive = () => {
  let expensive = cart[0].price; //1000
  for (item of cart) {
    if (item.price > expensive) {
      expensive = item.price;
    }
  }
  console.log(expensive);
};
mostExpensive();
//the total price
//4. Write a function that calculates the total value of the cart by multiplying the price
//and quantity for each product, and then summing up the results.
const totalValueInCart = () => {
  const totalValue = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  console.log(totalValue);
};
totalValueInCart();

//5. Write a function that filters and displays products that cost more 100

const itemsGreaterthan100 = () => {
  const items = cart.filter((item) => item.price > 100);
  console.log(items);
};
itemsGreaterthan100();

//6. Write a function that checks if a certain product is in the cart
// based on its title.e.g is Laptop in the cart
const searchItem = (search) => {
  const item = cart.find((product) => product.title === search);
  if (item) {
    console.log(item);
  } else {
    console.log("That item is not in cart");
  }
};
searchItem("TV");

//7. Write a function that displays each product along with its total value (price * quantity).
const displayItemPrice = () => {
  cart.forEach((product) => {
    console.log(`${product.title} costs ${product.price * product.quantity}`);
  });
};

displayItemPrice();
//laptop,
//8. Write a function that concatenates all the
// product titles into a single string, separated by dash.
const concatTitles = () => {
  return cart.map((product) => product.title).join("-");
};
console.log(concatTitles());

//9. Write a function that checks if the cart contains
//any products that are more expensive than 70.
//some
const checkmoreExpensivethan70 = () => {
  return cart.some((item) => item.price > 70);
};
console.log(checkmoreExpensivethan70());

//10. Write a function that clears the entire cart (removes all products).
const clearCart = () => [];
console.log(clearCart());
