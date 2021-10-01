let shoppingList = new Map([
  [3, "Banana"],
  [4, "Pineapple"],
  [2, "Pear"],
  [10, "Carrot"],
  [1.5, "Apple"],
]);

let arrValue = [];
let arrKey = [];

for (let value of shoppingList.values()) {
  arrValue.push(`groceries: ${value}`);
}
for (let print of arrValue) {
  console.log(print);
}

for (let key of shoppingList.keys()) {
  arrKey.push(`amount: ${key}`);
}
for (let print of arrKey) {
  console.log(print);
}

for (let [key, value] of shoppingList) {
  console.log("[ " + "'" + value + "'" + ", " + key + " ]");
}

module.exports = { shoppingList, arrKey, arrValue };
