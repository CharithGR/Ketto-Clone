let amount = JSON.parse(localStorage.getItem("TotalAmount") || 0);
let pay_btn = document.getElementById("payBtn");
pay_btn.value="Get OTP"
  let flag=true
let OTP;

let curDate=new Date();




let payment = document.querySelector("form");
payment.addEventListener("submit", function (event) {
  event.preventDefault();

  let sel_card=document.getElementById("cardType");
  let name = document.getElementById("name");
  let cardNumber = document.getElementById("cardNum");
  let expmmyy = document.getElementById("exp");
  let cvv = document.getElementById("cvv");
  // console.log( +(expmmyy.value[5] + expmmyy.value[6]),(curDate.getMonth()+1))
if(sel_card.value=="sel"){
  alert("Please select a card");
}else if (
      name.value=="" ||
    cardNumber.value != "1234 1234 1234 1234" ||
    (+(
      expmmyy.value[0] +
      expmmyy.value[1] +
      expmmyy.value[2] +
      expmmyy.value[3]
    ) <= curDate.getFullYear() &&
      +(expmmyy.value[5] + expmmyy.value[6]) < (curDate.getMonth()+1)) ||
    cvv.value != 123
  ) {
    alert("Invalid card details");
  } else {
  
    if(flag){    
    OTP = document.createElement("input");
    OTP.placeholder = "Enter 4 digit OTP";
    OTP.type = "number";
    flag=false
    document.querySelector("#otp").append(OTP);
    }
     pay_btn.value = "Make Payment of ₹ " +amount;
    payment.addEventListener("submit", function (event) {
      event.preventDefault();
      if (OTP.value == 1234) {
        let user =JSON.parse(localStorage.getItem("DonateData"));
        alert(user.by+" is grateful for your generous donation");
        let donateAmount= localStorage.getItem("Amount");
        console.log(donateAmount);
        user.AmountRaised+=+donateAmount;
        console.log(user.AmountRaised);
        let data =JSON.parse(localStorage.getItem("browse_fundraiser_data"))
        data.forEach(function (el){
          if(el.title==user.title){
            el.AmountRaised=user.AmountRaised
            el.supporters++;
                        
          }
        })
        localStorage.setItem("browse_fundraiser_data", JSON.stringify(data));
        
        location.href = "./index.html";
       
      } else {
        alert("Incorrect OTP");
        return;
      }
    });
    // document.querySelector("#otp").append(OTP);
    // flag=false
//   }
  }
});