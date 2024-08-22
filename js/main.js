const menuBtn = document.querySelector('.hamburger-menu');  

const dropdownMenu = document.querySelector('.dropdown-menu');  

const removeMenu = document.querySelector('.dropdown-menu-toggle');


menuBtn.addEventListener('click', function() {
  dropdownMenu.classList.add('menu-active');
}); 

removeMenu.addEventListener('click', function() {
  dropdownMenu.classList.remove('menu-active');
}); 


// menu scroll events 
 
let navLinks = document.querySelectorAll('.nav-link-items-m'); 

console.log(navLinks[0].childNodes[0].classList.value)  

function scrollToPercentage(element, percentage) {
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const viewportHeight = window.innerHeight;
  const scrollToPosition = elementTop - (viewportHeight * percentage / 100);
  
  window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
  });
}


navLinks.forEach(link=> { 
  link.addEventListener('click', function() { 

    console.log(link.childNodes[0].classList.value)

    if(link.childNodes[0].classList.value === "home")
    {   
        scrollToPercentage(document.querySelector('.hero-section'), 15);
    }else if (link.childNodes[0].classList.value === "about")
    {
      scrollToPercentage(document.querySelector('.about-title'), 15);
    }else if (link.childNodes[0].classList.value === "skills")
    {
      scrollToPercentage(document.querySelector('.skills-title'), 15);
    }else if (link.childNodes[0].classList.value ==="projects"){
      scrollToPercentage(document.querySelector('.projects-title'), 15);
    }else if (link.childNodes[0].classList.value ==="contacts"){
      scrollToPercentage(document.querySelector('.contact-me-title'), 15);
    }

  });
})