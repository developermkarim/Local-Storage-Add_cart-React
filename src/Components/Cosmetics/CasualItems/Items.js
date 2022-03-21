const Show = () =>{
let store = '1 pair Bata Fashion Show';
let price = 2290;
const sell_info = `Store available = ${store} and price is ${price}`
return sell_info
}
const AnotherBrand = () =>{
    let Brandname = 'Lotto';
    let stock = '2 thousand Products'
   let  averageprice = `${2299}$`
 let priceDetails = ` Brand Name is : ${Brandname} , stock available is ${stock} and ${averageprice}`
 return priceDetails
    
}

const Myshow = (sname,price) =>{
let showname = sname;
let showprice = price;
return  `Shwo brnad name Here ${showname} + and Price is ${showprice}`
}

export {Show, AnotherBrand, Myshow}