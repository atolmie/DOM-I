const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

const navA = document.querySelectorAll('nav a');

navA[0].textContent = siteContent.nav["nav-item-1"];
navA[1].textContent = siteContent.nav["nav-item-2"];
navA[2].textContent = siteContent.nav["nav-item-3"];
navA[3].textContent = siteContent.nav["nav-item-4"];
navA[4].textContent = siteContent.nav["nav-item-5"];
navA[5].textContent = siteContent.nav["nav-item-6"];



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const h1 = document.getElementsByClassName('cta-text')[0].children[0];
h1.textContent = siteContent.cta.h1;
console.log(h1)

const button = document.getElementsByClassName('cta-text')[0].children[1];
button.textContent = siteContent.cta.button;
console.log(button)

const ctaImg = document.getElementById("cta-img"); ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//const h4 = document.getElementsByClassName('text-content')[0].children[1];
//h4.textContent = siteContent.text-content.h4;
//console.log(h4)

const contact = document.querySelector('.contact h4');
contact.textContent = siteContent.contact['contact-h4']
console.log(contact)

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;
console.log(contactInfo)




const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;
console.log(footer)