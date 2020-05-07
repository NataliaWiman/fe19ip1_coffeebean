const btnBurger = document.querySelector(".header-nav_burger");
const navList = document.querySelector(".header-nav_list");
const logoMobile = document.querySelector(".header-logo_mobile");

const nav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".header-nav_link");
const navItems = document.querySelectorAll(".header-nav_item");
const logoText = document.querySelectorAll(".header-logo_text");

// ********* BURGER MENU FUNCTIONALITY ********* //
btnBurger.addEventListener('click', function () {
    navList.classList.toggle('open');
    if (navList.classList.contains('open')) {
        nav.classList.add("header-nav-reverse");
        navLinks.forEach((link) => link.classList.add("header-nav_link-reverse"));
        navItems.forEach((item) => item.classList.add("header-nav_item-reverse"));
        logoText.forEach((logoTxt) => logoTxt.classList.add("header-logo_text-reverse"));
        btnBurger.classList.add("header-nav_burger-reverse");
        document.querySelector(".header-nav_burger-reverse").style.boxShadow = "none";
        logoMobile.classList.add("header-logo_mobile-reverse");
    } else {
        nav.classList.remove("header-nav-reverse");
        navLinks.forEach((link) => link.classList.remove("header-nav_link-reverse"));
        navItems.forEach((item) => item.classList.remove("header-nav_item-reverse"));
        logoText.forEach((logoTxt) => logoTxt.classList.remove("header-logo_text-reverse"));
        btnBurger.classList.remove("header-nav_burger-reverse");
        logoMobile.classList.remove("header-logo_mobile-reverse");
    }
})

// ********* CHANGE MENU DISPLAY ON SCROLL ********* //
window.addEventListener("scroll", function () {
    if (!navList.classList.contains('open')) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            nav.classList.add("header-nav-reverse");
            navLinks.forEach((link) => link.classList.add("header-nav_link-reverse"));
            navItems.forEach((item) => item.classList.add("header-nav_item-reverse"));
            logoText.forEach((logoTxt) => logoTxt.classList.add("header-logo_text-reverse"));
            btnBurger.classList.add("header-nav_burger-reverse");
            logoMobile.classList.add("header-logo_mobile-reverse");
        } else {
            nav.classList.remove("header-nav-reverse");
            navLinks.forEach((link) => link.classList.remove("header-nav_link-reverse"));
            navItems.forEach((item) => item.classList.remove("header-nav_item-reverse"));
            logoText.forEach((logoTxt) => logoTxt.classList.remove("header-logo_text-reverse"));
            btnBurger.classList.remove("header-nav_burger-reverse");
            logoMobile.classList.remove("header-logo_mobile-reverse");
        }
    }
})


// ********* FORM VALIDATION ********* //
const subscribeForm = document.querySelector(".hero_form");
const subscribeInput = document.querySelector(".hero_input");
const errorMessage = document.querySelector(".error_message");

subscribeForm.addEventListener("submit", function () {
    console.log(subscribeInput.value);

    if (subscribeInput.value == "") {
        subscribeInput.classList.add("error_input");
        errorMessage.innerHTML = "*Please, enter a valid e-mail address";
        return false;
    } else {
        errorMessage.innerHTML = "";
        return true;
    }
})