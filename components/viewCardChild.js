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
        this.$viewCardChildContainer.setAttribute('class', "flex flex-col w-2/3 mx-auto")


        this.$parameter=document.createElement("div");
        this.$parameter.setAttribute('class','flex mt-20')

        this.$nameProduct=document.createElement("p");
        this.$nameProduct.textContent="Sản phẩm";
        this.$nameProduct.setAttribute('class','w-40')

        this.$cost=document.createElement("p");
        this.$cost.textContent="Giá";
        this.$cost.setAttribute('class','ml-10 w-40')

        this.$quantily=document.createElement("p");
        this.$quantily.textContent="Số lượng";
        this.$quantily.setAttribute('class','ml-10 w-40')

        this.$total=document.createElement("p");
        this.$total.textContent="Tổng";
        this.$total.setAttribute('class','ml-10 w-40')


        this.$informationOfPurchasedProduct=new InformationOfPurchasedProduct(this._getInputValue,this._id,this._name);

        this.$updateViewCart=document.createElement("div");
        this.$updateViewCart.setAttribute('class', "mt-20")

        this.$codeSale=document.createElement("input");
        this.$codeSale.type="";
        this.$codeSale.placeholder="Mã ưu đãi";
        this.$codeSale.setAttribute('class',"border-solid border-gray-400")

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