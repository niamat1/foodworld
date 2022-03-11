setInterval(function(){
    if (document.getElementsByClassName("slide")[0].classList.contains("active")) {

        document.getElementsByClassName("slide")[1].classList.add("active");
        document.getElementsByClassName("slide")[0].classList.remove("active");
    }
    else if (document.getElementsByClassName("slide")[1].classList.contains("active")) {
    
        document.getElementsByClassName("slide")[2].classList.add("active");
        document.getElementsByClassName("slide")[1].classList.remove("active");
    }
    else if (document.getElementsByClassName("slide")[2].classList.contains("active")) {
    
        document.getElementsByClassName("slide")[3].classList.add("active");
        document.getElementsByClassName("slide")[2].classList.remove("active");
    }
    else if (document.getElementsByClassName("slide")[3].classList.contains("active")) {
    
        document.getElementsByClassName("slide")[0].classList.add("active");
        document.getElementsByClassName("slide")[3].classList.remove("active");
    }
}, 2000);