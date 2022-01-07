import InformationOfPurchasedProduct from "../viewCart/informationOfPurchasedProduct.js"
export default class ViewCardChild{
    $viewCardChildContainer;

    $parameter;  // gom : Sản phẩm, Giá, Số lượng, Tổng
    $nameProduct;
    $cost
    $quantily;
    $total;

    $informationOfPurchasedProduct; //thông tin của sản phẩm đã mua

    $updateViewCart;        //gom ; ma san pham, update gio hang
    $codeSale;
    $applyButton;
    $updateViewCartButton;

    _getInputValue
    _id
    _name
    constructor(getInputValue,id,name) {
        this._getInputValue=getInputValue
        this._id=id
        this._name=name;
        this.$viewCardChildContainer=document.createElement("div");


        this.$parameter=document.createElement("div");

        this.$nameProduct=document.createElement("p");
        this.$nameProduct.textContent="Sản phẩm";

        this.$cost=document.createElement("p");
        this.$cost.textContent="Giá";

        this.$quantily=document.createElement("p");
        this.$quantily.textContent="Số lượng";

        this.$total=document.createElement("p");
        this.$total.textContent="Tổng";


        this.$informationOfPurchasedProduct=new InformationOfPurchasedProduct(this._getInputValue,this._id,this._name);

        this.$updateViewCart=document.createElement("div");

        this.$codeSale=document.createElement("input");
        this.$codeSale.type="";
        this.$codeSale.placeholder="Mã ưu đãi";

        this.$applyButton=document.createElement("button");
        this.$applyButton.textContent="Áp dụng";

        this.$updateViewCartButton=document.createElement("button");
        this.$applyButton.textContent="Cập nhật giỏ hàng";


    }

    render(container){
        this.$parameter.appendChild(this.$nameProduct);
        this.$parameter.appendChild(this.$cost);
        this.$parameter.appendChild(this.$quantily);
        this.$parameter.appendChild(this.$total);


        this.$updateViewCart.appendChild(this.$codeSale);
        this.$updateViewCart.appendChild(this.$applyButton);
        this.$updateViewCart.appendChild(this.$updateViewCartButton);

        this.$viewCardChildContainer.appendChild(this.$parameter);
        this.$informationOfPurchasedProduct.render(this.$viewCardChildContainer);
        this.$viewCardChildContainer.appendChild(this.$updateViewCart);

        container.appendChild(this.$viewCardChildContainer)

    }


}