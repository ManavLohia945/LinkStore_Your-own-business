var cart_number = 0;

// const cartBtn = document.querySelectorAll(".cartButtonChange");
// console.log(cartBtn);
// var item_price = document.querySelectorAll(".cart-item-price");
// console.log(item_price);

//var cartAmount = document.getElementById("cartAmount");
//cartAmount.innerHTML += "<p>  </p>";


var total = [];

(function() {

  const cartBtn = document.querySelectorAll(".cartButtonChange");

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
            <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="${itemCart.picture}" alt=""></td>
                    <td>${itemCart.prodName}</td>
                    <td >${itemCart.price}</td>
                    
            </tr>`;
        //alert("Item added");
        cart_number++;

        showTotal();
        showCartNumber();
      }
    })
  })

  function showCartNumber()
  {
    document.getElementById("cart_number").textContent = cart_number;
  }

  function showTotal()
  {
    
    //console.log("Original total ",total);
    const items = document.querySelectorAll(".cart-item-price");

    //console.log(items);

    items.forEach(function(item) {
      //console.log(item.textContent);
      total.push(parseFloat(item.textContent));
    });

    console.log("First total ",total);

    var totalMoney = total.reduce(function(total, item) {
      total += item;
      return total;      
    }, 0);

    //console.log(totalMoney);
    var finalMoney = totalMoney.toFixed(2);
    

    document.getElementById("cartAmount").textContent = finalMoney;
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
  total = [];
  })
})();



// ################## PAYMENT #############/

const payment = document.getElementById("payment");
var changeBody1 = document.getElementById("product1");
var changeBody2 = document.getElementById("product2");
var changeBody3 = document.getElementById("product3");
var changeBody4 = document.getElementById("product4");


// var payWall = document.getElementsByTagName("section");
//console.log(changeBody1);

(function() {
  payment.addEventListener("click", function() {
    if(total.length == 0)
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
        container {
          background: #E3E6F3;
        }
        </style>
    </head>
    <body>
            <div class="container">
                <div class="left">
                    <h3>BILLING ADDRESS</h3>
                    <form action="">
                        Full Name
                        <input type="text" name="" placeholder="Enter Name">
                        Email
                        <input type="text" name="" placeholder="Enter E-mail">
                        Address
                        <input type="text" name="" placeholder="Enter address">
                        City
                        <input type="text" name="" placeholder="Enter City">
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
                            <input type="number" name="" id="" placeholder="Zip Code">
                            </label>
                        </div>
                    </form>
                </div>
                <div class="right">
                    <h3>PAYMENT</h3>
                    <form action="">
                        <div id="amountToPay">

                        </div>
                        <br>
                        <br>
                        Credit Card Number
                        <input type="text" name="" placeholder="Enter Credit Card Number">
                        <!-- Expiry Month
                        <input type="text" name="" placeholder="Enter City">
                        Expiry Year
                        <input type="text" name="" placeholder="Enter City"> -->
                        <div id="zip">
                            <label>
                                Expiry Month
                                <br>
                                <select name="" id="">
                                    <option value="null">Choose Month</option>
                                    <option value="Rajasthan">2024</option>
                                    <option value="Haryana">2025</option>
                                    <option value="Haryana">2026</option>
                                </select>
                            </label>
                            <label for="">
                                Expiry Year
                                <br>
                                <select name="" id="">
                                    <option value="null">Choose Year</option>
                                    <option value="Rajasthan">2024</option>
                                    <option value="Haryana">2025</option>
                                    <option value="Haryana">2026</option>
                                </select>       
                            </label>
                            <br>    
                        </div>
    
                        <div id="Amount">
                            <label for="">Enter CVV
                                <input type="number" name="" id="" placeholder="3 digit number">
                                </label>
                            <label for="">Enter Amount
                                <input type="number" name="" id="" placeholder="Enter Amount">
                                </label>
                        </div>
                        
                    </form>
                    <input type="submit" value="Proceed to Checkout">
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