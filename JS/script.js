let toggleBtn = document.querySelector(".hamburger");
let closeNavBtn = document.querySelector(".closeNavBtn");
let mobileNavLink = document.querySelector('.mobile-nav-links');

toggleBtn.addEventListener('click', function() {
    mobileNavLink.classList.add("show-links");
});
closeNavBtn.addEventListener('click', function() {
    mobileNavLink.classList.remove("show-links");
});