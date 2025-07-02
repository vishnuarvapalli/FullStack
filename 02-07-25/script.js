
const products = [
  {
    name: "Men's Casual Shirt",
    price: "₹899",
    image: "https://via.placeholder.com/300x400?text=Shirt+1"
  },
  {
    name: "Women's Dress",
    price: "₹1299",
    image: "https://via.placeholder.com/300x400?text=Dress+1"
  },
  {
    name: "Men's Sneakers",
    price: "₹2199",
    image: "https://via.placeholder.com/300x400?text=Shoes"
  },
  {
    name: "Kids Jacket",
    price: "₹799",
    image: "https://via.placeholder.com/300x400?text=Kids+Jacket"
  },
];

const grid = document.getElementById("product-grid");

products.forEach((item) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.price}</p>
  `;
  grid.appendChild(card);
});
