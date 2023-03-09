class Seccion1 extends HTMLElement {
    constructor(){
        super();
        this.seccion1()
    }
    seccion1(){
        this.innerHTML = `
    <base href>
    <link rel="stylesheet" href="./seccion1/seccion1.css">
    <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./img/seccion1blue.png" />
      </div>
      <div class="swiper-slide pink">
        <img src="./img/seccion1pink.png" />
      </div>
     
    </div>
   
  </div>
        

    `;
    }

}
customElements.define("seccion-1", Seccion1);
export default Seccion1