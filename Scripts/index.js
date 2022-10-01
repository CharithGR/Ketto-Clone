
let fundraiseBtn = document.querySelector("#fundraiseBtn")
fundraiseBtn.addEventListener("click", function(){
  if(!isLoggedIn){
    location.href="./fundraise.html"
   }else{
     location.href="./startFundraise.html"
   }
})
let vidbtn= document.querySelector("#vidbtn");
vidbtn.addEventListener("click", function(){
  if(!isLoggedIn){
    location.href="./fundraise.html"
   }else{
     location.href="./startFundraise.html"
   }
})
let botFundbtn=document.querySelector("#botFundbtn");
botFundbtn.addEventListener("click", function(){
  if(!isLoggedIn){
    location.href="./fundraise.html"
   }else{
     location.href="./startFundraise.html"
   }
})
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
let browseFundraiserData = [
  {
    img: "https://kettocdn.gumlet.io/media/campaign/277000/277698/image/wid5fa2de60a1557.jpeg?w=300&dpr=1.1",
    title: "Schooling Special Needs Children With Custom Education",
    by: "Nithilyam Spastic Children Welfare Trust",
    AmountRaised: 5046970,
    AmountNeeded: 6000000,
    DaysLeft: "Fundraiser Ended",
    supporters: 2538,
    category: "Education",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/206000/206957/image/wid6051f4b92df69.jpg?w=300&dpr=1.1",
    title: "First Wheelchair User From India To Study At Oxford Seeking Funds",
    by: "Pratishtha Deveshwar",
    AmountRaised: 2170738,
    AmountNeeded: 2800000,
    DaysLeft: 32,
    supporters: 738,
    category: "Education",
  },  
  {
    img: "https://kettocdn.gumlet.io/media/campaign/240000/240053/image/wid5f50d49591236.jpeg?w=300&dpr=1.1",
    title: "'Gift A Brick' To Build An Inclusive School In Karjat",
    by: "Samaaveshi Pathshaala Foundation",
    AmountRaised: 918038,
    AmountNeeded: 2000000,
    DaysLeft: 42,
    supporters: 214,
    category: "Education",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/647000/647625/image/widcf5b09ad5491072f2dfb8837642f072c25e0f4bc.png?w=300&dpr=1.1",
    title:
      "Your Support Can Help 11-YO Aishwarya Complete Her Education & Fulfil Her Dream Of Becoming A Teacher.",
    by: "Child Help Foundation.",
    AmountRaised: 96847,
    AmountNeeded: 100000,
    DaysLeft: "Fundraise Ended",
    supporters: 890,
    category: "Education",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/638000/638834/image/wid88f966a941e30d94019434373fae5b133312cd96.png?w=300&dpr=1.1",
    title:
      "Your Small Contribution Can Help 9-YO Kavyansh Taywade Achieve His Dream Of Becoming A Scientist.",
    by: "Child Help Foundation.",
    AmountRaised: 101395,
    AmountNeeded: 105000,
    DaysLeft: "Fundraise Ended",
    supporters: 956,
    category: "Education",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/212000/212655/image/wid1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=320&dpr=1.3",
    title:
      "My Little Boy’s Cancer Has Relapsed Twice But I’m Helpless. Please Save Him",
    icon: "",
    by: "Family Friends",
    AmountRaised: 42135737,
    AmountNeeded: 50000000,
    DaysLeft: 20,
    supporters: 22054,
    category: "Medical",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/218000/218792/image/wid60326899153a5.jpeg?w=300&dpr=1.1",
    title:
      "elp Father And His 20-Year Old Son, Father-Kidney Transplant, Son- Bone Marrow Transplant. Please Save The Family",
    icon: "",
    by: "Mansi Singh",
    AmountRaised: 15789652,
    AmountNeeded: 16000000,
    DaysLeft: 21,
    supporters: 12549,
    category: "Medical",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/281000/281759/image/wid60211afcc8a19.png?w=320&dpr=1.3",
    title: "Offer A Helping Hand To Support Rubina Rodgers' Treatment",
    icon: "",
    by: "Sabapathy J",
    AmountRaised: 7828585,
    AmountNeeded: 9500000,
    DaysLeft: 13,
    supporters: 2794,
    category: "Medical",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/167000/167947/image/wid57beaf6d360986134ecdbd89657dd6a2b901a548.jpg?w=300&dpr=1.1",
    title:
      "Wife Fears She Will Lose The Father Of Their 2-Year-Old Daughter To Brain Haemorrhage. Please Help.",
    icon: "",
    by: "Rachit Shrivastava",
    AmountRaised: 11093326,
    AmountNeeded: 12000000,
    DaysLeft: 71,
    supporters: 7175,
    category: "Medical",
  },
  {
    img: "https://kettocdn.gumlet.io/images/fundraiser-default-image.jpg?w=768&dpr=1.1",
    title:
      "My 9 Year Only Child Is Suffering From Brain Tumor (Gliobastoma WHO Grade IV).",
    icon: "",
    by: "Bhautik Mehta",
    AmountRaised: 5883655,
    AmountNeeded: 15000000,
    DaysLeft: 78,
    supporters: 1619,
    category: "Medical",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/446000/446963/image/wid60d38fc70ee8a.jpeg?w=300&dpr=1.1",
    title:
      "My Father Is Fighting For His Life And We Need Your Support To Save Him From Stage 4 Cancer",
    icon: "",
    by: "Isha Srivastava",
    AmountRaised: 4711675,
    AmountNeeded: 5000000,
    DaysLeft: 32,
    supporters: 2358,
    category: "Medical",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/601000/601847/image/wid9b6ceae3e80f0c0e81a59ddf6224163eef3444b1.jpg?w=300&dpr=1.1",
    title:
      "Scarred But Alive - Support Acid Attack Survivors By Supporting This NGO",
    icon: "",
    by: "Chhanv Foundation ",
    AmountRaised: 817534,
    AmountNeeded: 1000000,
    DaysLeft: 1,
    supporters: 272,
    category: "Women & Girls",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/316000/316087/image/wid5ffefec9b5acf.jpeg?w=300&dpr=1.1",
    title: "Support Women Against Violence",
    icon: "",
    by: "Manya Pratap Singh",
    AmountRaised: 186200,
    AmountNeeded: 200000,
    DaysLeft: 27,
    supporters: 45,
    category: "Women & Girls",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/242000/242825/image/wid62fde5065ec55.png?w=300&dpr=1.1",
    title: "Invisible Scars - Domestic Violence And Abuse Relief Fund",
    icon: "",
    by: "Invisible Scars",
    AmountRaised: 173913,
    AmountNeeded: 1500000,
    DaysLeft: "77",
    supporters: "47",
    category: "Women & Girls",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/522000/522460/image/wid6167f51f7a909.jpeg?w=300&dpr=1.1",
    title: "URGENT HELP Needed For Our Shelter And Our Strays",
    icon: "",
    by: "People For Animals Agra",
    AmountRaised: 1175394,
    AmountNeeded: 1200000,
    DaysLeft: "24",
    supporters: "255",
    category: "Animals",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/389000/389487/image/wid609281c402715.jpeg?w=300&dpr=1.1",
    title: "Help Rescue & Feed The Strays In The Pandemic",
    icon: "",
    by: "TOUCH & TREAT ANIMAL TRUST",
    AmountRaised: 271471,
    AmountNeeded: 350000,
    DaysLeft: "14",
    supporters: "168",
    category: "Animals",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/194000/194406/image/wid5eb48997c274b.jpeg?w=300&dpr=1.1",
    title:
      "Help Me Get A Surgical Ambulance & X-Ray Machine To Save 500 + Stray Dogs",
    icon: "",
    by: "TOUCH & TREAT ANIMAL TRUST",
    AmountRaised: 809500,
    AmountNeeded: 1500000,
    DaysLeft: "87",
    supporters: "599",
    category: "Animals",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/652000/652101/image/wid62ded843de85c.jpg?w=300&dpr=1.1",
    title: "Fundraiser For 'Herd Walk' - A Documentary On Nomadic Shepherds",
    icon: "",
    by: "Ankit Pogula ",
    AmountRaised: 541688,
    AmountNeeded: 1200000,
    DaysLeft: "9",
    supporters: "53",
    category: "Creative",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/83000/83346/image/wid5c6fb27cedf3e.jpeg?w=300&dpr=1.1",
    title: "Darya Firasti II",
    icon: "",
    by: "Chinmaye Bhavé",
    AmountRaised: 485000,
    AmountNeeded: 900000,
    DaysLeft: "62",
    supporters: "119",
    category: "Creative",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/680000/680786/image/wid63273bc8194a1.jpg?w=300&dpr=1.1",
    title: "Swarpeti | A Pop-Up Book On Indian Classical Music",
    icon: "",
    by: "Pratyush",
    AmountRaised: 408850,
    AmountNeeded: 1000000,
    DaysLeft: "83",
    supporters: "84",
    category: "Creative",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/180000/180773/image/wid6089ceb85c0bd.jpeg?w=300&dpr=1.1",
    title: "Feeding From Far-Ration Distribution Amid Lockdown",
    icon: "",
    by: "Pooja Reddy",
    AmountRaised: 48241274,
    AmountNeeded: 5900000,
    DaysLeft: "93",
    supporters: "12614",
    category: "Food & Hunger",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/372000/372400/image/wid62ead544a8c3a.jpg?w=300&dpr=1.1",
    title: "Help Provide Ration To Differently Abled People",
    icon: "",
    by: "Mohammed Abdul Hafeez",
    AmountRaised: 1799283,
    AmountNeeded: 2500000,
    DaysLeft: "91",
    supporters: "446",
    category: "Food & Hunger",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/545000/545447/image/wid62beecd48ea50.jpg?w=300&dpr=1.1",
    title: "Help Us To Raise Fund To Feed Hungry",
    icon: "",
    by: "Sudhir Singh",
    AmountRaised: 305730,
    AmountNeeded: 1000000,
    DaysLeft: "32",
    supporters: "120",
    category: "Food & Hunger",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/607000/607433/image/wid6246ce452169d.png?w=300&dpr=1.1",
    title: "Help IISER Pune Students Support Farmers",
    icon: "",
    by: "Aditi Palo",
    AmountRaised: 254710,
    AmountNeeded: 500000,
    DaysLeft: "30",
    supporters: "81",
    category: "Environment",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/377000/377021/image/wid6087cbabdf2c6.jpeg?w=300&dpr=1.1",
    title: "HELP PLANT A TREE FOR HEALTHY BREATHE",
    icon: "",
    by: "Dr B Kaleemullah Khan",
    AmountRaised: 78388,
    AmountNeeded: 500000,
    DaysLeft: "59",
    supporters: "23",
    category: "Environment",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/690000/690389/image/wid631cb2ce0bb08.png?w=300&dpr=1.1",
    title: "Protecting The Lives Of Life Savers.",
    icon: "",
    by: "Pavan Joshi",
    AmountRaised: 14000,
    AmountNeeded: 500000,
    DaysLeft: "26",
    supporters: "4",
    category: "Environment",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/628000/628549/image/wid628b1b62ca90e.png?w=300&dpr=1.1",
    title: "Seed-Ball Plantation Drive By Young Indians Mumbai Chapter",
    icon: "",
    by: "Mitanshu Shah",
    AmountRaised: 26100,
    AmountNeeded: 100000,
    DaysLeft: "1",
    supporters: "4",
    category: "Environment",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/188000/188597/image/wid5ea9bcfb83ff0.jpeg?w=300&dpr=1.1",
    title: "Help To Provide Food For The Orphan Kids!",
    icon: "",
    by: "Laxmi Kathula",
    AmountRaised: 1553683,
    AmountNeeded: 180000,
    DaysLeft: "67",
    supporters: "632",
    category: "Children",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/168000/168350/image/wid6336c78ec9ab5.jpg?w=300&dpr=1.1",
    title: "HELP TO FEED HOMELESS KIDS AND NEEDY, SAVE A LIFE!",
    icon: "",
    by: "Lalitha Sampathi",
    AmountRaised: 1223272,
    AmountNeeded: 1600000,
    DaysLeft: "43",
    supporters: "635",
    category: "Children",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/631000/631961/image/wid629f3e0ab8bd4.png?w=300&dpr=1.1",
    title:
      "You Can Help India's Children Continue Their Education #LetChildrenBeChildren",
    icon: "",
    by: "Cry West - Volunteers",
    AmountRaised: 569176,
    AmountNeeded: 1600000,
    DaysLeft: "32",
    supporters: "444",
    category: "Children",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/619000/619907/image/wid626b8582337c1.jpg?w=300&dpr=1.1",
    title: "YOU Can Help Children LEARN & Not EARN. Support Now!",
    icon: "",
    by: "Child Rights And You- East Volunteers",
    AmountRaised: 279308,
    AmountNeeded: 400000,
    DaysLeft: "32",
    supporters: "303",
    category: "Children",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/620000/620846/image/wid6284e843a5f87.jpg?w=300&dpr=1.1",
    title: "Support The Underprivileged Grace Care Kids",
    icon: "",
    by: "Pallavi Agarwal",
    AmountRaised: 130376,
    AmountNeeded: 400000,
    DaysLeft: "Fundraiser Ended",
    supporters: "60",
    category: "Children",
  },
  {
    img: "https://kettocdn.gumlet.io/images/fundraiser-default-image.jpg?w=300&dpr=1.1",
    title: "Help Children Of Deceased Mother Due To Cancer",
    icon: "",
    by: "Gnana Prakash",
    AmountRaised: 635753,
    AmountNeeded: 700000,
    DaysLeft: "29",
    supporters: "115",
    category: "Memorial",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/676000/676904/image/wid62fe535a5c293.jpg?w=300&dpr=1.1",
    title:
      "Support For Family Of Late Sakila Tudu, An Alumni From NIT Rourkela",
    icon: "",
    by: "Raj Narayan Marndi",
    AmountRaised: 1431795,
    AmountNeeded: 3000000,
    DaysLeft: "3",
    supporters: "131",
    category: "Memorial",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/529000/529988/image/wid6177f1acf18f3.jpeg?w=300&dpr=1.1",
    title:
      "We Need Your Help In Sustaining This Community Center To Provide Daily Meals And Education For Children",
    icon: "",
    by: "Manjusha Varma",
    AmountRaised: 577614,
    AmountNeeded: 8000000,
    DaysLeft: "32",
    supporters: "239",
    category: "Community Development",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/365000/365233/image/wid606877ad25a5e.jpeg?w=300&dpr=1.1",
    title:
      "Masjid For 1000 Of Muslim's And A Education Centre For Dawa'ah Of Islam",
    icon: "",
    by: "Mariya Mahfooz",
    AmountRaised: 280767,
    AmountNeeded: 350000,
    DaysLeft: "77",
    supporters: "273",
    category: "Community Development",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/113000/113319/image/wid62f42706519eb.jpg?w=300&dpr=1.1",
    title: "Sri Dharmaraju Temple Construction In Mattapalle",
    icon: "",
    by: "Surendra Kongurootu",
    AmountRaised: 136232,
    AmountNeeded: 1000000,
    DaysLeft: "41",
    supporters: "23",
    category: "Community Development",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/360000/360883/image/wid60acb028dd871.png?w=300&dpr=1.1",
    title:
      "10 Lac Seed Ball Plantation In Mumbai - Yi Mumbai's Tree Plantation Drive",
    icon: "",
    by: "Mitanshu Shah ",
    AmountRaised: 85911,
    AmountNeeded: 3000000,
    DaysLeft: "1",
    supporters: "19",
    category: "Community Development",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/644000/644704/image/wid62b93d34ccc45.jpg?w=300&dpr=1.1",
    title:
      "1SAVE LIFE CHARITABLE TRUST (R) - Emergency Fund For Causes From Jul 2022",
    icon: "",
    by: "Arjun Bhandarkar",
    AmountRaised: 714240,
    AmountNeeded: 1000000,
    DaysLeft: "32",
    supporters: "553",
    category: "Others",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/601000/601050/image/wid6235e460d7a00.jpg?w=300&dpr=1.1",
    title: "Help End Isolation For Children In Need: Empowering Holistically",
    icon: "",
    by: "HEAL Foundation ",
    AmountRaised: 434995,
    AmountNeeded: 757000,
    DaysLeft: "78",
    supporters: "170",
    category: "Others",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/557000/557837/image/wid629f1a5fc7ce6.png?w=300&dpr=1.1",
    title: "Help Jungle Crows To Make Champions In Sport And Life!",
    icon: "",
    by: "Jungle Crows Foundation",
    AmountRaised: 437207,
    AmountNeeded: 500000,
    DaysLeft: "28",
    supporters: "63",
    category: "Others",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/666000/666211/image/wid62e75780bf893.png?w=300&dpr=1.1",
    title: "Empower 1000 Girls To Play Sports Of Their Choice",
    icon: "",
    by: "Joining The Dots Foundation",
    AmountRaised: 309000,
    AmountNeeded: 300000,
    DaysLeft: "1",
    supporters: "104",
    category: "Others",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/666000/666889/image/wid62f384c3c1475.jpg?w=300&dpr=1.1",
    title: "Empower 1000 Girls To Play Sports Of Their Choice",
    icon: "",
    by: "Golf Tournaments",
    AmountRaised: 282000,
    AmountNeeded: 1000000,
    DaysLeft: "1",
    supporters: "5",
    category: "Others",
  },
];
if (JSON.parse(localStorage.getItem("browse_fundraiser_data")) == null) {
  localStorage.setItem(
    "browse_fundraiser_data",
    JSON.stringify(browseFundraiserData)
  );
}

let featuredSlidesIndex=0
featuredSlidesDisp();
function plusSlidesFeatured(n){
  featuredSlidesIndex+=n;
  featuredSlidesDisp();
}
function featuredSlidesDisp(){  
  document.querySelector(".featuredIn").innerHTML=""
  let div = document.createElement("div");
 
  for(let i=0;i<6;i++){
   
    if(featuredSlidesIndex>=featuredSlides.length){
      featuredSlidesIndex=0
    }
    if(featuredSlidesIndex<0){
      featuredSlidesIndex=featuredSlides.length-1;
    }
    let img = document.createElement("img");
    img.src = featuredSlides[featuredSlidesIndex].img;
    div.append(img);
    document.querySelector(".featuredIn").append(div);
    featuredSlidesIndex++
  }

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
function plusSlidesTrending(n){
  trendingIndex+=n
  console.log(trendingIndex)
  trendingDisp()

}

trendingDisp()
function trendingDisp(){
  document.querySelector("#trendingFund").innerHTML=""
  for(let i=0;i<3;i++){

    if(trendingIndex>=trendingFund.length){
      trendingIndex=0;      
    }
    if(trendingIndex<0){
      trendingIndex=trendingFund.length-1;
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
trendingIndex=trendingIndex-3

}
