const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.style.visibility = "hidden";
window.onscroll = function() {
    if (window.scrollY  >= 500){
        document.getElementById("btnScrollToTop").style.visibility ="visible";
       
    }else{
        document.getElementById("btnScrollToTop").style.visibility ="hidden";
    }
}

btnScrollToTop.addEventListener("click", function (){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


