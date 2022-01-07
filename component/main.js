import Header from "./headerPage.js";
import TitleAddressRoom from "./titleAddressRoom.js";
import Room from "./Room.js";
import IntroProduct from "./introduceProduct.js";
import Footer from "./footerPage.js";
import ViewCart from "./viewCartContainer.js";
import {livingRoom,diningroom,bedroom,titleAddressRoom} from "./API.js";
import HomePage from "./Home.js";
import CartModal from "./CartModal.js";

import Contact from "./contact.js"

export default class Main{

  $appContainer;

  $head;
  $titleAddress; 
  $room;
  $foot;
  
  $middleScreen;           //total :(listProdct or introduceProduct or viewCart) and titleAddress
 
  $introProduct;
  $viewCart;
  
  constructor(){
    this.$appContainer=document.createElement("div");

    this.$head=new Header();
    this.$head.$logoEl.addEventListener("click", this.onHomeClick);
    this.$head.$productModal.$guestroom.addEventListener("click", this.onGuestroomClick);
    this.$head.$productModal.$diningroom.addEventListener("click", this.onDiningroomClick);
    this.$head.$productModal.$bedroom.addEventListener("click", this.onBedroomClick);
    this.$head.$organizationEl.addEventListener("click", this.onOrganizationClick);
    this.$head.$contactEl.addEventListener("click", this.onContactClick);

    this.$cartModal = new CartModal();

    this.$foot=new Footer();
    this.$room= document.createElement("div");
    this.$room.setAttribute('class', "grid grid-cols-4");
    
    this.$middleScreen=document.createElement("div");
    this.$home=new HomePage();
    }

  onHomeClick = () => {
    this.$middleScreen.innerHTML ="";
    this.$head.$headerContainer.setAttribute("style", "color: white; width: 100vw; height: 600px; background-image: url('https://nt11.mediawz.com/wp-content/uploads/2017/10/img_5452.jpg'); background-size: cover; background-position: center center; display: flex; flex-direction: column; align-items: center;")
    this.$middleScreen.appendChild(this.$home.render());

  }

  onGuestroomClick = () => {
    this.$middleScreen.innerHTML ="";
    this.$room.innerHTML=""
    this.items= livingRoom.map(room=>new Room(room,this.handleClickProduct));
    this.items.forEach(room=>room.render(this.$room));
    this.$titleAddress=new TitleAddressRoom("Phòng khách");
    this.$titleAddress.render(this.$middleScreen);
    this.$middleScreen.appendChild(this.$room);

    this.$head.$headerContainer.setAttribute("style", "width: 100vw; color: orange; display: flex; flex-direction: column; align-items: center");
  }

  onDiningroomClick = () => {
    this.$middleScreen.innerHTML ="";
    this.$room.innerHTML=""
    this.items= diningroom.map(room=>new Room(room,this.handleClickProduct));
    this.items.forEach(room=>room.render(this.$room));
    this.$titleAddress=new TitleAddressRoom("Phòng ăn");    
    this.$titleAddress.render(this.$middleScreen);
    this.$middleScreen.appendChild(this.$room);

    this.$head.$headerContainer.setAttribute("style", "width: 100vw; color: orange; display: flex; flex-direction: column; align-items: center");
  }

  onBedroomClick = () => {  
    this.$middleScreen.innerHTML ="";
    this.$room.innerHTML=""
    this.items= bedroom.map(room=>new Room(room,this.handleClickProduct));
    this.items.forEach(room=>room.render(this.$room));
    this.$titleAddress=new TitleAddressRoom("Phòng ngủ");    
    this.$titleAddress.render(this.$middleScreen);
    this.$middleScreen.appendChild(this.$room);
    // console.log(this.$middleScreen,"middle2")
    this.$head.$headerContainer.setAttribute("style", "width: 100vw; color: orange; display: flex; flex-direction: column; align-items: center");
    
  }

  handleClickViewCart=(quantily)=>{
    // console.log(quantily,"quantily");
    // console.log(this.$id,"$id");
    const viewCart=new ViewCart(quantily,this.id,this.name);  
    this.$middleScreen.innerHTML ="";
    viewCart.render(this.$middleScreen);

    this.$head.$headerContainer.setAttribute("style", "width: 100vw; color: orange; display: flex; flex-direction: column; align-items: center");
  }
  
  handleClickProduct=(_id)=>{
    this.id=_id;
    this.$introProduct=new IntroProduct(this.handleClickViewCart,_id)
    this.$middleScreen.innerHTML ="";
    const _titleAddressRoom=titleAddressRoom[_id-1].name
    this.name=_titleAddressRoom;
    this.$titleAddress=new TitleAddressRoom(_titleAddressRoom); 
    this.$titleAddress.render(this.$middleScreen);
    this.$introProduct.render(this.$middleScreen);

    this.$head.$headerContainer.setAttribute("style", "width: 100vw; color: orange; display: flex; flex-direction: column; align-items: center");
  }

  onContactClick=()=>{
    this.$middleScreen.innerHTML ="";
    this.$titleAddress=new TitleAddressRoom("Liên Lạc"); 
    this.$titleAddress.render(this.$middleScreen);
    const contact = new Contact()
    contact.render(this.$middleScreen);
    this.$head.$headerContainer.setAttribute("style", "width: 100vw; color: orange; display: flex; flex-direction: column; align-items: center");
    this.$middleScreen.setAttribute("class","h-screen w-screen")
  }

  onOrganizationClick=()=>{
    this.$middleScreen.innerHTML ="";
    this.$titleAddress=new TitleAddressRoom("Cơ cấu tổ chức"); 
    this.$titleAddress.render(this.$middleScreen);
    const urlImg=document.createElement("img");
    urlImg.src="./IMG/Mo-hinh-hoat-dong.jpeg";
    this.$middleScreen.appendChild(urlImg);
    this.$head.$headerContainer.setAttribute("style", "width: 100vw; color: orange; display: flex; flex-direction: column; align-items: center");
  }
  render(mainContainer){
    this.$head.render(this.$appContainer);

    this.$middleScreen.appendChild(this.$home.render());
    this.$appContainer.appendChild(this.$middleScreen);
    
    this.$appContainer.appendChild(this.$cartModal.render());
    this.$foot.render(this.$appContainer);

    mainContainer.appendChild(this.$appContainer);
  }
}



 


  



