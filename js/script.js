// To top button

const toTop = document.querySelector("#toTop");

window.addEventListener("scroll", function(){
    if(this.window.pageYOffset > 150){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active");
    }
})

// Responsive Navigation

const menuicon = document.querySelector("#menuicon");
const responsiveNav = document.querySelector("#responsiveNav")

menuicon.addEventListener("click", function(){
    responsiveNav.classList.toggle("active");
    if(menuicon.classList.toggle("active")){
        menuicon.querySelector("svg").classList.replace("fa-bars" , "fa-xmark");
        menuicon.querySelector("svg").style.color = "rgba(45, 55, 72, 1)"
    }else{
        menuicon.querySelector("svg").classList.replace("fa-xmark" , "fa-bars");
        menuicon.querySelector("svg").style.color = "rgba(79, 209, 197, 1)"

    }
})


// change class active in navbar

const items = document.getElementsByClassName("nav-items");
console.log(items.length);


function changeActive(event){
    let i;
    for(i = 0 ; i<items.length ; i++){
        items[i].classList.remove("li-active");
    }

    event.classList.add("li-active")
}


