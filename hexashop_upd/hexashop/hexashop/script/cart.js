let products = [
    {pic_id:0, pic:"images/101.png", p_name:"Rieka dress ", price:2150}, 
      {pic_id:1, pic:"images/102.png", p_name:"Neelkanth Dress", price:1500},
      {pic_id:2, pic:"images/103.png", p_name:"Fordx Ethnic Dress", price:1780},
      {pic_id:3, pic:"images/104.png", p_name:"Nivus dress", price:1450},
      {pic_id:4, pic:"images/105.png", p_name:"Women Elegant dress", price:999},
      {pic_id:5, pic:"images/106.png", p_name:"Fashion Collection", price:700},
      {pic_id:6, pic:"images/107.png", p_name:"Stylish wear", price:1250},
      {pic_id:7, pic:"images/108.png", p_name:"Latest Collection", price:1999},
      {pic_id:8, pic:"images/109.png", p_name:"Geargette Gown", price:890},
      {pic_id:9, pic:"images/110.png", p_name:"Party Wear", price:799},
      {pic_id:10, pic:"images/111.png", p_name:"Designer Dress", price:690},
      {pic_id:11, pic:"images/112.png", p_name:"Women Gown", price:599}
  ];

const cart=document.querySelector(".cart span");
const total_value = document.querySelector(".product_total span");
const cancel = document.getElementsByClassName('box_cancel');
const check = document.getElementById('check');

/*...Increasing cart numbers...*/
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

/*...Printing data in the cart page...*/

function display_img()
{ 
    let del_temp = ""
    let str_num = 0

    for(let j=0; j< store.length; j++)
    {
        for(let i=0; i<products.length; i++)
        {   
            if (products[i].pic_id == store[j])
            {
                del_temp += `<div class="img_box">
                                <div class="box_id">${str_num+1}</div>
                                <div class="box_name">${products[i].p_name}</div>
                                <div class="box_pic"><img src =" ${products[i].pic}" width = "50px"
                                height='70px' alt="Stylish Shoe...." ></div>
                                <div class="box_price">&#8377; - ${products[i].price}</div>
                                <div class="box_cancel">&#10008;</div>
                           </div>
                           <div class="box_line"></div>
                            `
                str_num += 1             
            }
        }
     
    }
    document.getElementById('products').innerHTML = del_temp;

/*...Adding event to the cart button...*/
for (let i = 0; i < cancel.length; i++) 
{	
    cancel[i].addEventListener("click", function(){delete_img(products[i].pic_id)});
}
}
export {display_img};

/*...Increasing the cart value...*/

function total_val()
{
    let total = []
    let sum = 0

    for(let i=0; i<store.length; i++)
    {
        let get_store = store[i]
        total.push(products[get_store].price)
    }
    for(let i=0; i<total.length; i++)
    {
        sum += total[i]
    }
    total_value.innerHTML = sum
}

export {total_val};

/*...Deleting Products in the cart page...*/

function delete_img(n)
{   
    store.splice(n,1);
    localStorage.setItem("shop_data",JSON.stringify(store));

    cart_num();
    display_img();

    total_val();
}

/*...Checkout Button...*/

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

  