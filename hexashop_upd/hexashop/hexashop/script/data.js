let products = [
    {pic_id:0, pic:"images/101.png", p_name:"Rieka fit and flare dress ", price:2150}, 
      {pic_id:1, pic:"images/102.png", p_name:"Neelkanth Trends Dress", price:1500},
      {pic_id:2, pic:"images/103.png", p_name:"Fordx Women Ethnic Dress", price:1780},
      {pic_id:3, pic:"images/104.png", p_name:"Nivus Clothing Women dress", price:1450},
      {pic_id:4, pic:"images/105.png", p_name:"Plus Women Elegant dress", price:999},
      {pic_id:5, pic:"images/106.png", p_name:"Dillu Fashion Collection", price:700},
      {pic_id:6, pic:"images/107.png", p_name:"Stylish Women Dress", price:1250},
      {pic_id:7, pic:"images/108.png", p_name:"Latest women's Collection", price:1999},
      {pic_id:8, pic:"images/109.png", p_name:"Embellished Geargette Gown", price:890},
      {pic_id:9, pic:"images/110.png", p_name:"Kudiyo Stylish Party Wear", price:799},
      {pic_id:10, pic:"images/111.png", p_name:"Gorgeous Designer Dress", price:690},
      {pic_id:11, pic:"images/112.png", p_name:"Innovinc Women Gown", price:599}
  ];
let cart = document.querySelector(".cart span");
/*...Inserting images...*/

function insert_img() {
    temp = "";
    for (let i = 0; i < products.length; i++) {
      temp += `<div>
          <div style="width:250px;height:280px;">
          <img class="img" src="${products[i].pic}">
          </div>
          <h3 class="pname">${products[i].p_name}</h3>
          <h3 class="price">&#8377;-${products[i].price}</h3>
          <button class="add_cart">Add Cart</button>
          </div>`;
    }
    document.getElementById("content").innerHTML = temp;

    /* ------------------------------------------------------ ADD EVENT TO CART BUTTTON -------------------------------------------- */
	
	const element = document.getElementsByClassName('add_cart');

	for (let i = 0; i < element.length; i++) 
		{	
			
			element[i].addEventListener("click", function(){entering_data(products[i].pic_id)});
			
		}
  }
insert_img();

/*------------------------------------------------ INCREASE CART NUMBER ----------------------------------------------*/

let store = [];

function get_data()
{
	store = JSON.parse(localStorage.getItem('shop_data'));

	if(store == null)
	{
		store = [];
	}
	else
	{
		cart.innerHTML = store.length;
	}
}

get_data();

/* ----------------------------------------  ENTERING DATA IN LOCAL Strg ------------------------------------------ */

function entering_data(n)
    {
		
		store_item = products[n].pic_id;
        store.push(store_item);
		
		localStorage.setItem('shop_data', JSON.stringify(store));
		
		get_data();

    }