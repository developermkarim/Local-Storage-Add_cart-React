// here we are using local storage

/* 
Line 5: Local storage theke get item metod diye data ta variable e rakhse
Line 6: Check kortese variable er data ase naki
LINE: 7 : Data ta json theke js e covert korse ar ager shopping cart variable e rakhse
Line 9 : Jodi data na thake empty object return hobe   shoppingcart = {}
Line 12: ekta variable e shopping-cart[id] tar value rakhse
Line 14: Key tar value jodi thake taile ager value r sathe 1 jog hobe
Line 15: value ta set kore dise
Line 17 : jodi value na thake taile key tar value 1 hobe
And last line e json formate e local storage e set kore dise

*/
const AddTolocalstorage = (sotrageid) =>{

    let shoppingcart = {} ;
    
    
    // getting Shopping Cart from local storage

    if(localStorage.getItem('Shopping Cart')){
        shoppingcart = JSON.parse(localStorage.getItem('Shopping Cart'))
    }
    
    // add quantity
    const storedcart = shoppingcart[sotrageid]
   // console.log(storedcart);
    if(storedcart){
        shoppingcart[sotrageid] = storedcart + 3;
        console.log(shoppingcart[sotrageid]);
    }
    else{
        shoppingcart[sotrageid] = 2
    }

    localStorage.setItem('Shopping Cart',JSON.stringify(shoppingcart))
    
}

// remove shopping cart from local storage

const RemoveCartFromDatabase = (removeCartfromDB) =>{

    if(localStorage.getItem('Shopping Cart')){

        const shoppingcartremove = JSON.parse(localStorage.getItem('Shopping Cart'))

        if(removeCartfromDB in shoppingcartremove){

            delete shoppingcartremove[removeCartfromDB]

            console.log('Exists removing cart');
            localStorage.setItem('Shopping Cart',JSON.stringify(shoppingcartremove))

        }
    }
}

export {AddTolocalstorage, RemoveCartFromDatabase}