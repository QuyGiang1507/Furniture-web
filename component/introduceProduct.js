//giới thiệu sản phẩm ->sau khi click vào sản phẩm bất kì trong list sản phẩm (ở phần Living Room) 
import DescribeProduct from "./describeProduct.js";
export default class IntroProduct{
    $introContainer;

    $describe;
    $suggest;

    _handleClickViewCart;
    _id;
    constructor(handleClickViewCart,id){
        // console.log("introProduct",id)
        this._id=id;
        this._handleClickViewCart=handleClickViewCart;

        this.$introContainer=document.createElement("div");

        this.$describe=new DescribeProduct((quanity)=>{
            this.functionViewCart(quanity)
        },this._id);

        
        this.$suggest=document.createElement("div");
    }

    functionViewCart(quanity){
        this._handleClickViewCart(quanity);
    }

    render(container){
        
        this.$describe.render(this.$introContainer);
        this.$introContainer.appendChild(this.$suggest);

        container.appendChild(this.$introContainer);
    }
}