
export default class Room {
  $urlImg;
  $saleButton;
  $titleProduct;
  $price;
  $buttonContainer;
  $buttonBuy;
  $check;
  $cartCheck;

  $productItem;
  constructor(room, _handleClickProduct,) {
    this.$productItem = document.createElement("div");
    this.$productItem.setAttribute(
      "class",
      "flex-1 box-content pb-3 px-1 pt-1 m-2 hover:shadow-lg focus:cursor-pointer duration-300 ease-in border border-solid text-center"
    );

    this.$saleButton = document.createElement("h3");
    this.$saleButton.textContent = "Giảm Giá";
    this.$saleButton.setAttribute(
      "class",
      "bg-red-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded-full"
    );

    this.$urlImg = document.createElement("img");
    this.$urlImg.src = room.img;
    this.$urlImg.id = room.id;
    this.$urlImg.setAttribute(
      "class",
      "w-64 h-64 object-cover hover:scale-110 duration-300"
    );
    this.$urlImg.addEventListener("click", () =>
      _handleClickProduct(this.$urlImg.id)
    );

    this.$titleProduct = document.createElement("h2");
    this.$titleProduct.textContent = room.name;
    this.$titleProduct.setAttribute("class", " font-normal mt-1 text-xl");

    this.$price = document.createElement("h4");
    this.$price.textContent = room.price;
    this.$price.setAttribute("class", "text-red-600 font-bold");

    this.$buttonContainer = document.createElement("div");
    this.$buttonContainer.setAttribute("class", "mt-5 flex justify-center");

    this.$buttonBuy = document.createElement("submit");
    this.$buttonBuy.textContent = "Mua hàng";
    this.$buttonBuy.setAttribute(
      "class",
      "bg-red-700 hover:shadow-lg text-white font-bold py-1 px-3 rounded flex"
    );
    // this.$buttonBuy.addEventListener("submit",this.handleSubmit)

    this.$check = document.createElement("div");
    this.$check.innerHTML = '<i class="fas fa-check"></i>';
    this.$check.setAttribute("class", "ml-2 hidden");

    this.$cartCheck = document.createElement("p");
    this.$cartCheck.textContent = "Xem giỏ hàng";
    this.$cartCheck.setAttribute("class", "py-1 px-3 hidden");
  }

  // handleSubmit=(()=>{

  // })

  render(container) {
    this.$productItem.appendChild(this.$urlImg);
    this.$productItem.appendChild(this.$saleButton);
    this.$productItem.appendChild(this.$titleProduct);
    this.$productItem.appendChild(this.$price);
    this.$productItem.appendChild(this.$buttonContainer);

    this.$buttonContainer.appendChild(this.$buttonBuy);
    this.$buttonContainer.appendChild(this.$cartCheck);

    this.$buttonBuy.appendChild(this.$check);

    container.appendChild(this.$productItem);
  }
}
