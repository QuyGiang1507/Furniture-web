//component giỏ hàng  
import ViewCardChild from "./viewCart/viewCardChild.js"
export default class ViewCart{
    $viewCartContainer;

    $viewCartChild //Thong so gio hang
    $calculateViewCart //tinh toan gio hang
    
    _getInputValue
    _id;
    _name
    constructor(getInputValue,id,name){
        this._name=name
        this._id=id
        this._getInputValue=getInputValue;
        this.$viewCartContainer=document.createElement("div");

        this.$viewCartChild=new ViewCardChild(this._getInputValue,this._id,this._name);
        this.$calculateViewCart=document.createElement("div");
        
    }

    render(container){
        this.$viewCartChild.render(this.$viewCartContainer)
        this.$viewCartContainer.appendChild(this.$calculateViewCart)

        container.appendChild(this.$viewCartContainer);
    }
}