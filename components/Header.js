import ProductModal from "./ProductModal.js";

export default class Header {
    $mainContainer;
    $contactsContainer;
    $phoneEl;
    $socialMediaEl;
    $searchBtn;
    $searchInput;
    $tabarContainer;
    $logoEl;
    $projectsEl;
    $priceListEl;
    $productsEl;
    $productModal;
    $promotionEl;
    $newEl;
    $organizationEl;
    $contactEl;

    constructor() {   
        this.$mainContainer = document.createElement("div");
        this.$mainContainer.setAttribute("style", "color: white; width: 100vw; height: 600px; background-image: url('https://nt11.mediawz.com/wp-content/uploads/2017/10/img_5452.jpg'); background-size: cover; background-position: center center; display: flex; flex-direction: column; align-items: center;");

        this.$contactsContainer = document.createElement("div");
        this.$contactsContainer.setAttribute("class", "w-1/2 flex justify-end mt-2");

        this.$phoneEl = document.createElement("p");
        this.$phoneEl.innerHTML = '<i class="fas fa-phone-volume">0123.456.789</i>';
        this.$phoneEl.setAttribute("class", "mr-2 text-red-800");

        this.$socialMediaEl = document.createElement("a");
        this.$socialMediaEl.innerHTML = '<a><i class="fab fa-facebook-f"></i></a>';
        this.$socialMediaEl.setAttribute("class", "text-blue-400 bg-gray-200 px-2.5 mr-2 rounded cursor-pointer hover:opacity-60");
        this.$socialMediaEl.href = "https://www.facebook.com/groups/1008247523059939";

        this.$searchBtn = document.createElement("button");
        this.$searchBtn.innerHTML = '<button><i class="fas fa-search"></i></button>';
        this.$searchBtn.setAttribute("class", "text-blue-400 bg-gray-200 px-2 rounded cursor-pointer hover:opacity-60");

        this.$tabarContainer = document.createElement("div");
        this.$tabarContainer.setAttribute("class", "w-1/2 flex justify-between mt-4");

        this.$logoEl = document.createElement("p");
        this.$logoEl.innerHTML = '<i class="fas fa-home"></i>';
        this.$logoEl.setAttribute("class", "text-2xl cursor-pointer hover:scale-105")

        this.$projectsEl = document.createElement("p");
        this.$projectsEl.textContent = "Dự án";
        this.$projectsEl.setAttribute("class", "font-bold cursor-pointer hover:text-red-600 hover:underline");

        this.$priceListEl = document.createElement("p");
        this.$priceListEl.textContent = "Bảng giá";
        this.$priceListEl.setAttribute("class", "font-bold cursor-pointer hover:text-red-600 hover:underline");

        this.$productsEl = document.createElement("p");
        this.$productsEl.textContent = "Sản phẩm";
        this.$productsEl.setAttribute("class", "font-bold cursor-pointer hover:text-red-600 hover:underline");
        this.$productsEl.addEventListener("mouseover", () => {
            this.$productModal.onHover();
        });
        this.$productsEl.addEventListener("mouseout", () => {
            this.$productModal.onOut();
        });

        this.$productModal = new ProductModal();

        this.$promotionEl = document.createElement("p");
        this.$promotionEl.textContent = "Khuyến mãi";
        this.$promotionEl.setAttribute("class", "font-bold cursor-pointer hover:text-red-600 hover:underline");

        this.$newEl = document.createElement("p");
        this.$newEl.textContent = "Tin tức";
        this.$newEl.setAttribute("class", "font-bold cursor-pointer hover:text-red-600 hover:underline");

        this.$organizationEl = document.createElement("p");
        this.$organizationEl.textContent = "Cơ cấu tổ chức";
        this.$organizationEl.setAttribute("class", "font-bold cursor-pointer hover:text-red-600 hover:underline");

        this.$contactEl = document.createElement("p");
        this.$contactEl.textContent = "Liên hệ";
        this.$contactEl.setAttribute("class", "font-bold cursor-pointer hover:text-red-600 hover:underline");
    }

    render() {
        this.$contactsContainer.appendChild(this.$phoneEl);
        this.$contactsContainer.appendChild(this.$socialMediaEl);
        this.$contactsContainer.appendChild(this.$searchBtn);

        this.$tabarContainer.appendChild(this.$logoEl);
        this.$tabarContainer.appendChild(this.$projectsEl);
        this.$tabarContainer.appendChild(this.$priceListEl);
        this.$tabarContainer.appendChild(this.$productsEl);
        this.$tabarContainer.appendChild(this.$promotionEl);
        this.$tabarContainer.appendChild(this.$newEl);
        this.$tabarContainer.appendChild(this.$organizationEl);
        this.$tabarContainer.appendChild(this.$contactEl);

        this.$productModal.render(this.$productsEl);

        this.$mainContainer.appendChild(this.$contactsContainer);
        this.$mainContainer.appendChild(this.$tabarContainer);

        return this.$mainContainer
    }
}