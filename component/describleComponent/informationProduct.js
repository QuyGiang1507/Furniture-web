import InputQuantily from "../InputQuantily.js";

//Thông tin sản phẩm
export default class InformationProduct{      
    inforList;

    price;

    cardLi;
    material;
    color;
    size;
    id;
    from;

    cardComplete;
    quantily;
    buttonBuy;

    _appendNotification

    constructor(appendNotification) {
        this._appendNotification=appendNotification;

        this.inforList=document.createElement("div");
        // this.inforList.setAttribute("class", "w-1/2 m-auto");

        this.price=document.createElement("p");
        this.price.textContent="2,500,000.00"

        this.cardLi=document.createElement("ul");

        this.material=document.createElement("li");
        this.material.textContent="Chất Liệu: Gỗ cao su";

        this.color=document.createElement("li");
        this.color.textContent="Màu sắc: Không";

        this.size=document.createElement("li");
        this.size.textContent="Kích thước: Cao 45 cm, Đường kính 33 cm";

        this.id=document.createElement("li");
        this.id.textContent="Mã Sản Phẩm: 4469";

        this.from=document.createElement("li");
        this.from.textContent="Xuất Xứ: ViệtNam";


        this.cardComplete=document.createElement("div");

        this.quantily=new InputQuantily(1);
    
        this.buttonBuy=document.createElement("button");
        this.buttonBuy.type="submit";
        this.buttonBuy.textContent="Mua hàng";
        this.buttonBuy.setAttribute(
            "class",
            "bg-red-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded"
          );
        this.buttonBuy.addEventListener("click",this.onClickButtonBuy);

    } 

    onClickButtonBuy=((e)=>{
        e.preventDefault();  
        if(this.quantily.getValueInputQuantily()==0){
            alert("Vui long nhap so luong mua");
        }
        else{
            this._appendNotification(this.quantily)
        }
    })

    render(container){
        this.cardLi.appendChild(this.material);
        this.cardLi.appendChild(this.color);
        this.cardLi.appendChild(this.size);
        this.cardLi.appendChild(this.id);
        this.cardLi.appendChild(this.from);

        this.quantily.render(this.cardComplete)
        this.cardComplete.appendChild(this.buttonBuy);

        this.inforList.appendChild(this.price);
        this.inforList.appendChild(this.cardLi);
        this.inforList.appendChild(this.cardComplete);

        container.appendChild(this.inforList);
        


    }


}