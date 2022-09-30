

let successSlideIndex = 1;
showSlidesSuccess(successSlideIndex);

function plusSlidesSuccess(n) {
  showSlidesSuccess((successSlideIndex += n));
}
function showSlidesSuccess(n) {
  let i;
  let slides = document.getElementsByClassName("successSlide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (n > slides.length) {
    successSlideIndex = 1;
  }
  if (n < 1) {
    successSlideIndex = slides.length;
  }
  slides[successSlideIndex - 1].style.display = "flex";
}

let featuredSlides = [
  {
    name: "TOI",
    img: "https://i1.wp.com/aboutswara.com/wp-content/uploads/2016/03/Times-Of-India-Logo.png?w=600&ssl=1",
  },
  {
    name: "ET",
    img: "https://play-lh.googleusercontent.com/2G0Wjgjx5TYsLXFhig2RBYzgepW291fAZzy15ZQsnMoW4i-ThlzvhUmBNu5W76GFboUF",
  },
  {
    name: "IT",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_GiwQjAE17BC-CVz7IW5sglpobTNUG8McrShIDvUIQ&s",
  },
  {
    name: "HT",
    img: "https://play-lh.googleusercontent.com/x8tXbZbBScqoeHVV_205f9HCLcNk1ccOOxlgqQwiJPrT7HZAmnYSMnGvl391qwKjVaW_",
  },
  {
    name: "VICE",
    img: "https://i.pinimg.com/originals/02/66/5e/02665edbd00e21575a777f881aa5187f.jpg",
  },
  {
    name: "afaqs",
    img: "https://gumlet.assettype.com/afaqs%2F2019-07%2F672ebd1b-b1cc-4ae6-9063-205ff7ec7eb9%2Fafaqs_OG_image.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
  },
  {
    name: "FE",
    img: "https://play-lh.googleusercontent.com/IM5q7H7YxOAe7x0EAm6slWfaTHTKLXR9DwbAeiq418y_ZCjnoPsKI-brVrFHpF1k3LM",
  },
  {
    name: "EH",
    img: "https://www.medicalfair-india.com/medicacache/pica/3/3/4/0/4/6/1/275721646920687/Express_Healthcare_Logo_235x123.jpg",
  },
];

let featuredSlidesIndex=1
let a=0
featuredSlidesDisp();
function plusSlidesFeatured(n){
  featuredSlidesIndex+=n;
  a=0
  // featuredSlidesDisp();
}
function featuredSlidesDisp(){  
  // document.querySelector(".featuredIn").innerHTML=""
featuredSlides.forEach(function (el, i) {
  let div = document.createElement("div");
  if (a < 5) {
    if(featuredSlidesIndex>=featuredSlides.length){
      featuredSlidesIndex=0
    }if(featuredSlidesIndex<0){
      featuredSlidesIndex=featuredSlides.length-1;
    }
    if(i==featuredSlidesIndex){
      div.style.display = "flex";
      featuredSlidesIndex++
      a++
    }
  } else {
    div.style.display = "none ";
  }
  let img = document.createElement("img");
  img.src = el.img;
  div.append(img);
  document.querySelector(".featuredIn").append(div);
});

  }
  





let trendingFund=[
  {
    img:"https://kettocdn.gumlet.io/media/campaign/212000/212655/image/wid1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=320&dpr=1.3",
    title:"My Little Boy’s Cancer Has Relapsed Twice But I’m Helpless. Please Save Him",
    icon:"",
    by:"Family Friends",
    AmountRaised:42135737,
    AmountNeeded:50000000,
    daysLeft:"20",
    supporters:22054,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/372000/372126/image/wid01ce2a07f56735f26b62aac7c317696e57f1c3f9.png?w=320&dpr=1.3",
    title:"Help 7yrs Old Paarnikka Beat Cancer",
    icon:"",
    by:"Rm Agarwal",
    AmountRaised:11477041,
    AmountNeeded:30000000,
    daysLeft:"Fundraiser Ended",
    supporters:6023,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/281000/281759/image/wid60211afcc8a19.png?w=320&dpr=1.3",
    title:"Offer A Helping Hand To Support Rubina Rodgers' Treatment",
    icon:"",
    by:"Sabapathy J",
    AmountRaised:7828585,
    AmountNeeded:9500000,
    daysLeft:"13",
    supporters:2794,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/686000/686992/image/wid6315de97732b3.jpg?w=320&dpr=1.3",
    title:"My Young 30 Year Old Husband Is In Urgent Need Of Heart Transplant,",
    icon:"",
    by:"Karishma Kushwaha",
    AmountRaised:1185190,
    AmountNeeded:3030000,
    daysLeft:"21",
    supporters:295,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/691000/691314/image/wid631efcd202e88.jpg?w=320&dpr=1.3",
    title:"My Nephew Is Suffering From Stroke. We Need Your Help To Provide For",
    icon:"",
    by:"Munender Egam",
    AmountRaised:434487,
    AmountNeeded:2500000,
    daysLeft:"29",
    supporters:227,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/601000/601050/image/wid6235e460d7a00.jpg?w=320&dpr=1.3",
    title:"Help End Isolation For Children In Need: Empowering Holistically",
    icon:"",
    by:"HEAL Foundation ",
    AmountRaised:429995,
    AmountNeeded:757000,
    daysLeft:"79",
    supporters:169,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/557000/557837/image/wid629f1a5fc7ce6.png?w=320&dpr=1.3",
    title:"Help Jungle Crows To Make Champions In Sport And Life!",
    icon:"",
    by:"Jungle Crows Foundation",
    AmountRaised:437207,
    AmountNeeded:500000,
    daysLeft:"29",
    supporters:63,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/669000/669924/image/widb91a9adb6d470d1a44ba1ba2a2e994a6dc41de62.jpg?w=320&dpr=1.3",
    title:"Offer A Helping Hand To Support Khursid Alam Sardar's Treatment",
    icon:"",
    by:"Rajibuddin Pailan",
    AmountRaised:322055,
    AmountNeeded:800000,
    daysLeft:"8",
    supporters:157,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/691000/691350/image/wid6328213c59751.png?w=320&dpr=1.3",
    title:"All A Parent Wants Is To See Their Child Healthy And Shower Her With Love",
    icon:"",
    by:"Rehman Shaikh",
    AmountRaised:259825,
    AmountNeeded:1200000,
    daysLeft:"29",
    supporters:68,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/625000/625122/image/wid627fff291f29d.png?w=320&dpr=1.3",
    title:"School For Special Needs",
    icon:"",
    by:"Minhaj Interfaith And Welfare Foundation ",
    AmountRaised:209734,
    AmountNeeded:1000000,
    daysLeft:"67",
    supporters:104,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/695000/695798/image/wid63286ab138222.jpg?w=320&dpr=1.3",
    title:"My Baby Battles For His Life And We Need Your Support To Save Him",
    icon:"",
    by:"Rashmi Ranjan Mishra",
    AmountRaised:175032,
    AmountNeeded:4100000,
    daysLeft:"36",
    supporters:143,
  },
  {
    img:"https://kettocdn.gumlet.io/media/campaign/687000/687597/image/wid6315e216c07e2.jpg?w=320&dpr=1.3",
    title:"My Baby Battles For Her Life And We Need Your Support To Save Her",
    icon:"",
    by:"Deep Chand Maurya",
    AmountRaised:176087,
    AmountNeeded:700000,
    daysLeft:"22",
    supporters:125,
  },

]

let trendingIndex=0;
let trendflag=trendingIndex
function plusSlidesTrending(n){
  trendingIndex+=n
  if(trendingIndex>trendingFund.length-2){
    trendingIndex=0;
  }
  if(trendingIndex<0){
    trendingIndex=trendingFund.length-3;
  }
  trendflag=trendingIndex
  trendingDisp()
}
if(trendingIndex>=trendingFund.length){
  trendingIndex=0;
}
if(trendingIndex<0){
  trendingIndex=trendingFund.length-2;
}
trendingDisp()
function trendingDisp(){
  document.querySelector("#trendingFund").innerHTML=""
  for(let i=0;i<3;i++){

    if(trendingIndex>=trendingFund.length){
      trendingIndex=0;
      trendflag=0;
      // trendingDisp()
    }
    if(trendingIndex<0){
      trendingIndex=trendingFund.length-3;
    }
  let parentDiv=document.createElement("div");
  let divImg=document.createElement("div");
  let div =document.createElement("div")
  let divChild=document.createElement("div");
  let divButton=document.createElement("div");
  divButton.setAttribute("id", "trendingButtondiv")

  divChild.setAttribute("id", "DaysSupporters")

  let img= document.createElement("img");
  img.src = trendingFund[trendingIndex].img;

  let title = document.createElement("h3");
  title.innerText=trendingFund[trendingIndex].title;

  let by = document.createElement("p");
  by.innerText="by "+trendingFund[trendingIndex].by;

  let Amount = document.createElement("h3")
  Amount.innerHTML=`₹ ${trendingFund[trendingIndex].AmountRaised} <span class="txt"> raised out of ₹ ${trendingFund[trendingIndex].AmountNeeded}</span>`;
  
  let daysLeft = document.createElement("p")
  daysLeft.setAttribute("id", "daysLeft");

  if(trendingFund[trendingIndex].daysLeft=="Fundraiser Ended"){
    daysLeft.innerText=trendingFund[trendingIndex].daysLeft;
  }else{
  daysLeft.innerText=trendingFund[trendingIndex].daysLeft+" Days Left";
  }
  let supporters = document.createElement("p")
  supporters.setAttribute("id", "supporters")
  supporters.innerText=trendingFund[trendingIndex].supporters+" Supporters"

  let buttonShare = document.createElement("button")
  buttonShare.innerText="Share"
  buttonShare.setAttribute("id", "shareButtonTrending")

  let buttonDonate = document.createElement("button")
  buttonDonate.innerText="Donate"
  buttonDonate.setAttribute("id", "donateButtonTrending")

  divImg.append(img)
  divChild.append(daysLeft,supporters);
  divButton.append(buttonShare,buttonDonate);
  div.append(title,by,Amount,divChild)
  parentDiv.append(divImg,div,divButton)  
  document.querySelector("#trendingFund").append(parentDiv)
  trendingIndex++
  
}

trendingIndex=trendflag
if(trendingIndex>=trendingFund.length){
  trendingIndex=0;
}
if(trendingIndex<0){
  trendingIndex=trendingFund.length-2;
}
}
