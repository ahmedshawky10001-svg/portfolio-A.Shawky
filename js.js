let header = document . querySelector("header")
window . onscroll = function(){
    if(this.scrollY>=50){
        header.classList.add("show")
    }else{
        header.classList.remove("show")
    }
}

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav section');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});