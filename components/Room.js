import {products} from "./ProductApi.js"

import CartModal from "./CartModal.js";

export default class Room {
  $container;
  $id;
  $img;
  $name;
  $price;
  $btn;
  $cartModal;

  constructor(img, name, price, id) {
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "product cursor-pointer flex-1 box-border pb-3 px-1 pt-1 m-2 hover:shadow-lg duration-300 overflow-hidden ease-in border border-solid text-center"
    );
    this.$img = document.createElement("img");
    this.$img.src = img;
    this.$img.setAttribute(
      "class",
      "product-image w-60 h-60 object-cover hover:scale-110 duration-300"
    );

    this.$price = document.createElement("p");
    this.$price.textContent = price;
    this.$price.setAttribute("class", "product-price text-red-600 font-bold");

    this.$name = document.createElement("p");
    this.$name.textContent = name;
    this.$name.setAttribute("class", "product-name font-normal mt-4 text-xl");

    this.$id = id;
    this.$btn = document.createElement("button");
    this.$btn.type = "button";
    this.$btn.textContent = "Mua hàng";
    this.$btn.setAttribute(
      "class",
      "add-to-cart bg-red-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded"
    );
    this.$btn.setAttribute("data-id", this.$id)
    this.$btn.addEventListener("click", this.addToCart);

    this.$cartModal = new CartModal();
  }

  addToCart = (add) => {
    add.preventDefault()
    let productsInCart = [],
      cartEl = document.querySelector(".shopping-cart-list"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      productQuantityEl = document.querySelector(".product-quantity"),
      totalPriceEl = document.querySelector(".total-price");

    cartEl.innerHTML = "- "+ this.$name.textContent+ "- "+ this.$price.textContent
    emptyCartEl.style.display = "block";
    cartCheckoutEl.style.display = "block"


  };

  render() {
    this.$container.appendChild(this.$img);
    this.$container.appendChild(this.$name);
    this.$container.appendChild(this.$price);
    this.$container.appendChild(this.$btn);

    return this.$container;
  }
}
