
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');


// get Total
function getTotal()
{
    if(price.value != ''){
        let result =
          Number(price.value) +
          Number(taxes.value) +
          Number(ads.value) -
          Number(discount.value);
        total.innerHTML  = result;
        total.style.background = '#040'
    }else
    {
        total.innerHTML = '';
        total.style.background = "darkred";
    }
}

// create Product

let dataProduct;
if(localStorage.product != null){
    dataProduct = JSON.parse(localStorage.product)
}else{
    dataProduct =[];
}

// save loacalStorage

submit.onclick = function(){
    let newProduct ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    dataProduct.push(newProduct);
    localStorage.setItem('product' , JSON.stringify(dataProduct));
    console.log(dataProduct);
 
}

// clear inputs

// read
// count
// delete 
// updata
// search
// clean data
