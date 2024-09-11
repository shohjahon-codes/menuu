// const discount_products_EL = document.querySelector(".discount_products_box");
// import { getDIscountProducts } from "./service.js";

// const renderDiscountProducts = async () => {
//   const data = await getDIscountProducts();

//   discount_products_EL.innerHTML = data.map(
//     (item) => `
//     <div>
//       <img
//         src="${item.img}"
//         alt=""
//       />
//       <h1 style="color: red">${item.description}</h1>
//     </div>
//   `
//   );
// };

// renderDiscountProducts();

// //figamni boshliman
  
const webBanner = document.querySelector(".slider")
import { banner } from "./service.js";

const renderbanner = async()=>{
  const data = await banner();
  webBanner.innerHTML = data.map(
    (item) => `
    <div  class="w-[100px] h-[100px]p-[20px]"   >
      <img
        src="${item.img}"
        
        alt="rasm"
      />
     
    </div>
   
    `
  
  
  ).join("");
 
}

renderbanner();