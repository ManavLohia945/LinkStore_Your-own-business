
var cart_number = 0;

var total = [];
var cartShop = [];
// console.log(cartShop);

(function() {

  const cartBtn = document.querySelectorAll(".cartButtonChange");

  //const itemCart = {};
  

  cartBtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      //console.log(event.target);

      if(event.target.parentElement.classList.contains("cartButtonChange"))
      {

        const itemCart = {};

        let picture = event.target.parentElement.parentElement.children[0].src;
        console.log(picture);
        itemCart.picture = picture;

        let prodName = event.target.parentElement.previousElementSibling.children[1].textContent;
        console.log(prodName);
        itemCart.prodName = prodName;

        let price = event.target.parentElement.previousElementSibling.children[3].textContent;
        console.log(price);
        itemCart.price = price;

        addItem.innerHTML += 
            `
            <tr> 
            
                    <td><img src="${itemCart.picture}" alt=""></td>
                    <td>${itemCart.prodName}</td>
                    <td id="costOfGoods">${itemCart.price}</td>
                    
            </tr>`
            ;
        //alert("Item added");
        cart_number++;

        showTotal();
        showCartNumber();

        // var remove_item = document.getElementById("remove_item");
        // console.log(remove_item);

        // (function() {
        //   remove_item.addEventListener("click", function() {
        //     addItem.innerHTML -= addItem;
        //   })
        // })();

        cartShop.push(itemCart.price);
        console.log("Array ",cartShop);

        var stringCost = 0;
        for(let i=0; i < cartShop.length; i++)
        {
          //var stringCost = ; 
          stringCost += parseFloat(cartShop[i].slice(2));
        }

        document.getElementById("cartAmount").textContent = "Rs "+stringCost;
      }
    })
  })

  

  function showCartNumber()
  {
    document.getElementById("cart_number").textContent = cart_number;
  }

  function showTotal()
  {
    
    // console.log("Original total ",total);
    // var items = document.querySelectorAll(".cart-item-price");

    // console.log("Items" ,items);

    // items.forEach(function(item) {
    //   console.log("Item is" ,item);
    //   console.log(item.textContent);
    //   total.push(parseFloat(item.textContent));
    // });

    // console.log("First total ",total);

    // var totalMoney = total.reduce(function(total, item) {
    //   total += item;
    //   return total;      
    // }, 0);

    // console.log("TotalMoney ",totalMoney);
    // var finalMoney = totalMoney.toFixed(2);
    

    // document.getElementById("cartAmount").textContent = "Rs "+finalMoney;
    //console.log("PaymentText ",payment_text);

    // total.push(parseFloat(itemCart.price));
     //console.log(total);
  }

})();

/////////////////////////// CLEARING CART ///////////////////////

const clearCart = document.getElementById("clearCart");
console.log(clearCart);

(function() {
  clearCart.addEventListener("click",function() {
  addItem.innerHTML = ``;
  document.getElementById("cartAmount").textContent = " ";
  document.getElementById("cart_number").textContent = 0;
  cart_number = 0;
  cartShop = [];
  console.log(total);
  })
})();



// ################## PAYMENT #############/

// const payment = document.getElementById("payment");
// var changeBody1 = document.getElementById("product1");
// var changeBody2 = document.getElementById("product2");
// var changeBody3 = document.getElementById("product3");
// var changeBody4 = document.getElementById("product4");


// // var payWall = document.getElementsByTagName("section");
// //console.log(changeBody1);


// (function() {
//   payment.addEventListener("click", function() {
    
//   })
// })();



// (function() {
//   payment.addEventListener("click", function() {
//     if(cart_number == 0)
//     {
//       alert("Empty Cart");
//     }
//     else
//     {
      
//       changeBody1.innerHTML = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>LinkStore</title>
//         <link rel="stylesheet" href="payment.css">
//         <style>
//         container {
//           background: #E3E6F3;
//         }
//         </style>
//     </head>
//     <body>
//             <div class="container">
//                 <div class="left">
//                     <h3>BILLING ADDRESS</h3>
                    
//                     <form action="">
//                         Full Name
//                         <input type="text" name="" placeholder="Enter Name">
//                         Email
//                         <input type="text" name="" placeholder="Enter E-mail">
//                         Address
//                         <input type="text" name="" placeholder="Enter address">
//                         City
//                         <input type="text" name="" placeholder="Enter City">
//                         <div id="zip">
//                             <label>
//                                 District
//                                 <select name="" id="">
//                                     <option value="null">Choose District</option>
//                                     <option value="Rajasthan">Mumbai Suburban</option>
//                                     <option value="Haryana">Mumbai City</option>
//                                 </select>
//                             </label>
//                             <label for="">Zip Code
//                             <input type="number" name="" id="" placeholder="Zip Code">
//                             </label>
//                         </div>
//                     </form>
//                 </div>
//                 <div class="right">
//                     <h3>PAYMENT</h3>
//                     <form action="">
//                         <div id="amountToPay">

//                         </div>
//                         <br>
//                         <br>
//                         Credit Card Number
//                         <input type="text" name="" placeholder="Enter Credit Card Number">
//                         <!-- Expiry Month
//                         <input type="text" name="" placeholder="Enter City">
//                         Expiry Year
//                         <input type="text" name="" placeholder="Enter City"> -->
//                         <div id="zip">
//                             <label>
//                                 Expiry Month
//                                 <br>
//                                 <select name="" id="">
//                                     <option value="null">Choose Month</option>
//                                     <option value="Rajasthan">2024</option>
//                                     <option value="Haryana">2025</option>
//                                     <option value="Haryana">2026</option>
//                                 </select>
//                             </label>
//                             <label for="">
//                                 Expiry Year
//                                 <br>
//                                 <select name="" id="">
//                                     <option value="null">Choose Year</option>
//                                     <option value="Rajasthan">2024</option>
//                                     <option value="Haryana">2025</option>
//                                     <option value="Haryana">2026</option>
//                                 </select>       
//                             </label>
//                             <br>    
//                         </div>
    
//                         <div id="Amount">
//                             <label for="">Enter CVV
//                                 <input type="number" name="" id="" placeholder="3 digit number">
//                                 </label>
//                             <label for="">Enter Amount
//                                 <input type="number" name="" id="" placeholder="Enter Amount">
//                                 </label>
//                         </div>
                        
//                     </form>
//                     <a href="razor.html"><button>Proceed</button></a>
//                 </div>
//             </div>
        
//     </body>
//     </html>
//     `;

//     changeBody2.innerHTML = ``;
//     changeBody3.innerHTML = ``;
//     changeBody4.innerHTML = ``;
    
//     // var amountToPay = document.getElementById("amountToPay");
//     // amountToPay.innerText = finalMoney;
//     }
    
//   })
// })();


const payment = document.getElementById("payment");
var changeBody1 = document.getElementById("product1");
var changeBody2 = document.getElementById("product2");
var changeBody3 = document.getElementById("product3");
var changeBody4 = document.getElementById("product4");


// var payWall = document.getElementsByTagName("section");
//console.log(changeBody1);

(function() {
  payment.addEventListener("click", function() {
    if(cart_number == 0)
    {
      alert("Empty Cart");
    }
    else
    {
      changeBody1.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LinkStore</title>
        <link rel="stylesheet" href="payment.css">
        <style>
        .container {
          background: #E3E6F3;
          width:450px;
        }
        </style>
    </head>
    <body>
            <div class="container">
                <div class="left">
                    <h3>BILLING ADDRESS</h3>
                    <form action="/razor.html">
                        Full Name
                        <input type="text" name="" placeholder="Enter Name" required>
                        Email
                        <br>
                        <input style="width:400px; height:35px; margin-bottom:5px;" type="email" name="" placeholder="Enter E-mail" required>
                        <br>
                        Address
                        <input type="text" name="" placeholder="Enter address" required>
                        City
                        <input type="text" name="" placeholder="Enter City" required>
                        <div id="zip">
                            <label>
                                District
                                <select name="" id="">
                                    <option value="null">Choose District</option>
                                    <option value="Rajasthan">Mumbai Suburban</option>
                                    <option value="Haryana">Mumbai City</option>
                                </select>
                            </label>
                            <label for="">Zip Code
                            <input type="number" name="" id="" placeholder="Zip Code" required>
                            </label>
                        </div>
                        <input style="text-align: center; margin-top: 5px; width:250px;" type="submit" value="Proceed to Payment">
                    </form>
                    
                </div>
                    
                </div>
            </div>
        
    </body>
    </html>
    `;

    changeBody2.innerHTML = ``;
    changeBody3.innerHTML = ``;
    changeBody4.innerHTML = ``;
    
    // var amountToPay = document.getElementById("amountToPay");
    // amountToPay.innerText = finalMoney;
    }
    
  })
})();