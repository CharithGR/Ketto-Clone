let successSlideIndex =1;
showSlidesSuccess(successSlideIndex)

function plusSlidesSuccess(n) {
    showSlidesSuccess(successSlideIndex += n);
  }
  function showSlidesSuccess(n) {
    let i;
    let slides = document.getElementsByClassName("successSlide");
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }  
    if (n > slides.length) {
        successSlideIndex = 1       
    }    
    if (n < 1) {successSlideIndex = slides.length}
    slides[successSlideIndex-1].style.display = "flex";  
  }  



  
  let FeaturedSlideIndex =1;
showSlidesFeatured(FeaturedSlideIndex)

function plusSlidesFeatured(n) {
    showSlidesFeatured(FeaturedSlideIndex += n);
  }
  function showSlidesFeatured(n) {
    let i;
    let slides = document.getElementsByClassName("featuredSlides");
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }  
    if (n > slides.length) {
        FeaturedSlideIndex = 1       
    }    
    if (n < 1) {FeaturedSlideIndex = slides.length}


    for(i=FeaturedSlideIndex;i<FeaturedSlideIndex+6;i++) {
       
        if(i-1<0){
            slides[i-1+slides.length].style.display = "flex";
        }else if(i-1>=slides.length){
            slides[i-1-slides.length].style.display = "flex";
        }else{
            slides[i-1].style.display= "flex";
        }
    }

           

     
  }  