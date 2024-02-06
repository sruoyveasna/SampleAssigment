const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
var products = [
  {
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    image: "e1.jpg",
    stars: 4, // Number of stars for rating
    price: 88,
  },
  {
    brand: "adidas",
    name: "Astronaut T-Shirts",
    image: "e2.jpg",
    stars: 5, // Number of stars for rating
    price: 108,
  },
  {
    brand: "adidas",
    name: " T-Shirts",
    image: "e3.jpg",
    stars: 5, // Number of stars for rating
    price: 78,
  },
  {
    brand: "adidas",
    name: "White T-ShirtF",
    image: "e4.jpg",
    stars: 5, // Number of stars for rating
    price: 58,
  },
  {
    brand: "adidas",
    name: "Flower T-Shirt",
    image: "e5.jpg",
    stars: 4, // Number of stars for rating
    price: 89,
  },
  {
    brand: "Mongo",
    name: "2layer Shirt",
    image: "e6.jpg",
    stars: 5, // Number of stars for rating
    price: 98,
  },
  {
    brand: "Travis",
    name: "pan",
    image: "e7.jpg",
    stars: 5, // Number of stars for rating
    price: 99,
  },
  {
    brand: "samba",
    name: "Women Shirts",
    image: "e8.jpg",
    stars: 4, // Number of stars for rating
    price: 75,
  },
  {
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    image: "n1.jpg",
    stars: 5, // Number of stars for rating
    price: 57,
  },
  {
    brand: "adidas",
    name: "Stripe Shirts",
    image: "n2.jpg",
    stars: 5, // Number of stars for rating
    price: 67,
  },
  {
    brand: "adidas",
    name: "Cartoon Shirts",
    image: "n3.jpg",
    stars: 5, // Number of stars for rating
    price: 45,
  },
  {
    brand: "adidas",
    name: "Collarless shirt",
    image: "n4.jpg",
    stars: 5, // Number of stars for rating
    price: 89,
  },
  {
    brand: "adidas",
    name: "Nehru collar shirt",
    image: "n5.jpg",
    stars: 5, // Number of stars for rating
    price: 79,
  },
  {
    brand: "adidas",
    name: "Band collar shirt",
    image: "n6.jpg",
    stars: 5, // Number of stars for rating
    price: 56,
  },
  {
    brand: "adidas",
    name: "Grandad shirt",
    image: "n7.jpg",
    stars: 5, // Number of stars for rating
    price: 34,
  },
  {
    brand: "adidas",
    name: "Cartoon Shirts",
    image: "n8.jpg",
    stars: 4, // Number of stars for rating
    price: 99,
  },
];
$(document).ready(function () {
  // Get the product container
  var productContainer = $(".pro-container");

  // Iterate through products and generate HTML
  products.forEach(function (product) {
    var productHTML = `
      <div class="pro" onclick="window.location.href='sproduct.html';">
        <img src="${product.image}" alt="${product.name}" />
        <div class="des">
          <span>${product.brand}</span>
          <h5>${product.name}</h5>
          <div class="star">
            ${generateStars(product.stars)}
          </div>
          <h4>${product.price}$</h4>
        </div>
        <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
    `;

    // Append the product HTML to the container
    productContainer.append(productHTML);
  });

  // Function to generate star icons based on the number of stars
  function generateStars(starCount) {
    var starsHTML = "";
    for (var i = 0; i < starCount; i++) {
      starsHTML += '<i class="fas fa-star"></i>';
    }
    return starsHTML;
  }
});
