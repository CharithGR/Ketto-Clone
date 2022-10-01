let totalAmt = document.getElementById("totalAmt");
let kettoTip = document.getElementById("kettoTip");
let KettoTipManual = 0;
let flag=true
totalAmt.innerText =0
let donationAmount = document.getElementById("donationAmount");
let sub = document.getElementById("sub");
let form = document.querySelector("form");

donationAmount.addEventListener("input", function (event) {
  event.preventDefault();
  Atm();
  kettoTip.addEventListener("change", function (event) {
    if (kettoTip.value == "other" && flag) {
      let otherAmt = document.createElement("input");
      otherAmt.setAttribute("id", "otherAmt");
      otherAmt.type = "number";
      let Amt = document.getElementById("Amt");
      Amt.append(otherAmt);
      let otherAmtmanual= document.getElementById("otherAmt");
      otherAmtmanual.placeholder="Enter Tip Amount"
      otherAmtmanual.addEventListener("input", function (event){
        event.preventDefault();
        KettoTipManual = otherAmtmanual.value;
        Atm();
      })
      flag=false
    }    
    Atm();
    
  });

});
kettoTip.addEventListener("change", function (event) {
    if (kettoTip.value == "other" && flag) {
      let otherAmt = document.createElement("input");
      otherAmt.setAttribute("id", "otherAmt");
      otherAmt.type = "number";
      let Amt = document.getElementById("Amt");
      Amt.append(otherAmt);
      let otherAmtmanual= document.getElementById("otherAmt");
      otherAmtmanual.placeholder="Enter Tip Amount"
      otherAmtmanual.setAttribute("id", "tip")
      otherAmtmanual.addEventListener("input", function (event){
        event.preventDefault();
        KettoTipManual = otherAmtmanual.value;       
        Atm();
        sub.value = "Proceed to Pay ₹ " + totalAmt.innerText
      })
      flag=false
    }    
    Atm();
    
  });
  
  function Atm() {
    if (kettoTip.value != "other") {
      totalAmt.innerText =
        ((donationAmount.value * (Number(kettoTip.value) || 18)) / 100 +
          +donationAmount.value || 0).toFixed(2) ;
    } else {
      totalAmt.innerText = +donationAmount.value + +KettoTipManual;
    }
  }



  kettoTip.addEventListener("change", function (event) {
    event.preventDefault();
  sub.value = "Proceed to Pay ₹ " + totalAmt.innerText
  })


  donationAmount.addEventListener("input", function (event) {
    event.preventDefault();
    sub.value = "Proceed to Pay ₹ " + totalAmt.innerText
  })




form.addEventListener("submit", function(event) {
    event.preventDefault();
    let obj={
        Amount: form.donationAmount.value,
        name:form.name.value,
        email: form.email.value,
        mbl: form.mbl.value,
        address: form.address.value,
        pan: form.pan.value,
        pincode: form.pincode.value,
    }
    // if(obj.mbl<6000000000 || obj.mbl>9999999999){
    //     alert("Please enter a valid mobile number.");
    //     return;
    // }
    
    let UPI=document.getElementById("UPI");
    let card = document.getElementById("card");
    if(UPI.checked && card.checked) {
        alert("Please select only one payment method");
    }else if(UPI.checked || card.checked){
      if(UPI.checked){
        alert("UPI payment not available, donate using Credit/Debit card");
        return

      }
        localStorage.setItem("Amount", obj.Amount);
        localStorage.setItem("TotalAmount", totalAmt.innerText);
        location.href = "./payment.html"
    }
    else{
        alert("Please select a payment method");
    }
    

})