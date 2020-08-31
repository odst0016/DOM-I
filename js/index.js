const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Dealing with nav links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link, i) => {
  const navToChange = document.querySelector(`nav a:nth-of-type(${i + 1})`);
  navToChange.textContent = siteContent["nav"]["nav-item-" + (i + 1)];
});
//Dealing with the h1
const h1 = document.querySelector("h1");
const h1Array = Array.from(siteContent["cta"]["h1"]);
const h1Final = h1Array.map((item) => {
  if (item === " ") {
    return "<br>";
  } else {
    return item;
  }
});
const h1Text = h1Final.toString().replace(/,/g, "");
h1.innerHTML = h1Text;
//Button
const headerButton = document.querySelector("button");
headerButton.textContent = siteContent["cta"]["button"];
//Dealing with the header image
const headerImg = document.querySelector("#cta-img");
headerImg.src = siteContent["cta"]["img-src"];

//dealing with body headers
const bodyHeadersArr = Object.values(siteContent["main-content"]);
//function to remove anything related to images from the array and return a new array
const arrBodyFilter = function (arr) {
  const arrToReturn = [];
  for (i in arr) {
    if (arr[i].includes("img") === true) {
    } else {
      arrToReturn.push(arr[i]);
    }
  }
  return arrToReturn;
};
const filteredBodyArray = arrBodyFilter(bodyHeadersArr);
console.log(filteredBodyArray);
//function to place body text content
const bodyTextContent = function (arr) {
  //all logic assumes that content on the mody has a 'header' and a 'paragrah' so
  //data should arr.lenght should be divisable by to if not an error will be thrown
  const arrayHeaders = [];
  const arrayParagrahps = [];
  if (arr.length % 2 != 0) {
    console.log("Whoopsies this aint it chief");
  }
  for (i in arr) {
    //check to see if odd if it is odd it belongs to paragrahps due to arrays starting at 0
    if (i % 2 != 0) {
      arrayParagrahps.push(arr[i]);
    } else {
      arrayHeaders.push(arr[i]);
    }
  }
  const textPositionsTop = document.querySelectorAll(
    ".top-content .text-content"
  );
  const textPositionsBottom = document.querySelectorAll(
    ".bottom-content .text-content"
  );
  //changes text in top section
  for (let i = 0; i < textPositionsTop.length; i++) {
    const textHeaderToChangeH = document.querySelector(
      `.top-content .text-content:nth-of-type(${i + 1}) h4`
    );
    const textHeaderToChangeP = document.querySelector(
      `.top-content .text-content:nth-of-type(${i + 1}) p`
    );
    textHeaderToChangeH.textContent = arrayHeaders[i];
    textHeaderToChangeP.textContent = arrayParagrahps[i];
  }
  //changes text in bottom section
  for (let i = 0; i < textPositionsBottom.length; i++) {
    const textHeaderToChangeBottomH = document.querySelector(
      `.bottom-content .text-content:nth-of-type(${i + 1}) h4`
    );
    const textHeaderToChangeBottomP = document.querySelector(
      `.bottom-content .text-content:nth-of-type(${i + 1}) p`
    );
    textHeaderToChangeBottomH.textContent =
      arrayHeaders[i + textPositionsTop.length];
    textHeaderToChangeBottomP.textContent =
      arrayParagrahps[i + textPositionsTop.length];
  }
};
bodyTextContent(filteredBodyArray);
