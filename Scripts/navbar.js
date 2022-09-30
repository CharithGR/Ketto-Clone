

 let ActiveUser=JSON.parse(localStorage.getItem("ActiveUser"))||[];
 let FundraiseNav=document.getElementById("FundraiseNav").addEventListener("change",function(){
   location.href="./fundraise.html"
 })
 
 let isLoggedIn=localStorage.getItem("isLoggedIn") || false;
 let SignInElement=document.getElementById("SignInElement");
 SignInElement.addEventListener("click",function(){
   if(SignInElement.innerText=="Sign In"){
     location.href="./signIn.html"
   }else {
     let SignInElementSelect=document.getElementById("SignInElementSelect");
     console.log(SignInElementSelect.value)
     SignInElementSelect.addEventListener("change",function(){
    if(SignInElementSelect.value=="Logout"){
     isLoggedIn=false;
     localStorage.removeItem("isLoggedIn")
     localStorage.removeItem("ActiveUser")
     window.location.reload();
    }
   })
   }
 })
 if(isLoggedIn){
   
     SignInElement.innerHTML=ActiveUser.name
     let select =document.createElement("select"); 
     select.setAttribute("id","SignInElementSelect"); 
       let name=document.createElement("option");
       name.innerText=ActiveUser.name;
       let LogOut= document.createElement("option");
       LogOut.value="Logout"
       LogOut.innerText="Log Out";
       select.append(name,LogOut);
       SignInElement.append(select)  
   
 }
 