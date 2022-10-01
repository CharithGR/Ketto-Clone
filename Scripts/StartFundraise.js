let button = document.querySelector('button');
let form = document.querySelector('form');
button.addEventListener('click', function(event) {    
    event.preventDefault();
    let userData=JSON.parse(localStorage.getItem("ActiveUser"));

    let obj={
        category:form.category.value,
        AmountNeeded:form.AmountRequired.value,
        title: form.title.value,
        fundsForWhom: form.fundsForWhom.value,
        desc: form.desc.value,
        img: form.image.value,
        AmountRaised:0,
        supporters:0,
        DaysLeft:90, 
        by:userData.name,

    }
    if(obj.category==""){
        alert("Please select a category");
    }if(obj.fundsForWhom==""){ 
        alert("Please select whom you are raising funds for"); 
    }


    if(isImgLink(obj.img)){
        alert("Your Fundraiser is live")
        let data=JSON.parse(localStorage.getItem("browse_fundraiser_data"))
        data.push(obj)
        localStorage.setItem("browse_fundraiser_data", JSON.stringify(data))
        location.href="./index.html"

    }else{
        alert("Please submit correct link of image")
    }

})
function isImgLink(url) {   
    const regex = new RegExp('jpg|jpeg|png|webp|avif|gif|svg|photo');
    return regex.test(url)
}