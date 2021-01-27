// mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})


// modal window 30 sec

let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");
let time = 30000;

setTimeout(openModal, time)

function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
}

closeBtn.addEventListener ("click", closeModal)

modal.addEventListener("click", function(e){
    if(e.target == modal) {
        closeModal()
    }
})

