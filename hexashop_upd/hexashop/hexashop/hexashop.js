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

//Inserting Images

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
}
insert_img();

//ENTERING DATA IN LOCAL
let details = [];

const element = document.getElementsByClassName("add_cart");

for (let i = 0; i < element.length; i++) {
  element[i].addEventListener("click", function () {
    entering_data(products[i].pic_id);
  });
}

var store = [];

function entering_data(n) {
  x = products[n];
  store.push(x);
  localStorage.setItem("Data", JSON.stringify(store));
}

function printing_data() {
  document.getElementById("Products").innerHTML = stored_data;
}
//DELETING DATA
function deleting_data() {
  store.splice(n, 1);
}

// Add cart count
const cart=document.querySelector(".cart span");
const total_value = document.querySelector(".total span");
const cancel = document.getElementsByClassName('box_cancel');
const check = document.getElementById('out');



/*-------------------------------------------------- INCREASE CART NUMBER -------------------------------------------------- */

let store = []

function cart_num()
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

export {cart_num};

/* ----------------------------------------------------- PRINTING IMAGE IN CART PAGE -------------------------------------------------------- */

function display_img()
{ 
    let d_temp = ""
    let s_num = 0

    for(let j=0; j< store.length; j++)
    {
        for(let i=0; i< items.length; i++)
        {   
            if (items[i].pic_id == store[j])
            {
                d_temp += `<div class="img_box">
                                <div class="box_id">${s_num+1}</div>
                                <div class="box_name">${items[i].productname}</div>
                                <div class="box_pic"><img src =" ${items[i].photo}" width = "80px" height ="110px" alt="Stylish Shoe...." ></div>
                                <div class="box_price">&#8377; - ${items[i].price}</div>
                                <div class="box_cancel">&#10008;</div>
                           </div>
                           <div class="box_line"></div>
                            `
                s_num += 1             
            }
        }
     
    }
    document.getElementById('products').innerHTML = d_temp;

    /* ------------------------------------------------------ ADD EVENT TO CART BUTTON -------------------------------------------- */
    
    for (let i = 0; i < cancel.length; i++) 
    {	
        
        cancel[i].addEventListener("click", function(){delete_img(items[i].pic_id)});
        
    }
}

export {display_img};

/* ------------------------------------------------------ INCREASE BASKET VALUE -------------------------------------------- */


function total_val()
{
    let total = []
    let sum = 0

    for(let i=0; i<store.length; i++)
    {
        let get_store = store[i]
        total.push(items[get_store].price)
    }
    for(let i=0; i<total.length; i++)
    {
        sum += total[i]
    }
    total_value.innerHTML = sum
}

export {total_val};

/* ------------------------------------------------------ DELETE IMAGE -------------------------------------------- */

function delete_img(n)
{   
    store.splice(n,1);
    localStorage.setItem("shop_data",JSON.stringify(store));

    cart_num();
    display_img();

    total_val();
}

/* ------------------------------------------------------ CHECKOUT BUTTON -------------------------------------------- */


function checkout()
{  
    store=[];
    localStorage.setItem("shop_data",JSON.stringify(store));

    cart_num();
    display_img();

    total_val();

}

check.addEventListener("click",checkout)


export {checkout};
