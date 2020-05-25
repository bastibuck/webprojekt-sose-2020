function addItem() {
  var itemCount = document.querySelectorAll("li").length;
  console.log(itemCount);

  if (itemCount === 6) {
    return;
  }

  var newItem = document.createElement("li");

  if (itemCount === 3) {
    newItem.textContent = "Rust";
  }

  if (itemCount === 4) {
    newItem.textContent = "Python";
  }

  if (itemCount === 5) {
    newItem.textContent = "C#";
  }

  document.getElementById("coding-languages").appendChild(newItem);
}
