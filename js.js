let header = document . querySelector("header")
window . onscroll = function(){
    if(this.scrollY>=50){
        header.classList.add("show")
    }else{
        header.classList.remove("show")
    }
}

let nav_links = document.getElementById("links")
function open_colos_menu() {
    nav_links.classList.toggle("Acteve")
}
