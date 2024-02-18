const seats = document.getElementById("A1");
console.log(seats.innerText);
seats.addEventListener("click", function () {
  console.log("clicked");
  const price = document.getElementById("price-container");
  const p = document.createElement("p");
  p.innerHTML = 500;
  price.appendChild(p);
});
