var listEl = document.querySelector("#grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  var item = document.createElement("div");
  if(event.target.matches("button")) {
    item.textContent = groceries[event.target.parentElement.id];
  } else if (event.target.matches("li")) {
    item.textContent = groceries[event.target.id];
  }
  shoppingCartEl.append(item);
});