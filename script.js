$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".menu").css("background" , "rgb(39, 34, 33)");
        }
  
        else{
            $(".menu").css("background" , "transparent");  	
        }
    })
  })
  
  var lastScrollTop = 0;
  
  
  window.addEventListener("scroll", function(){ 
     var st = window.pageYOffset || document.documentElement.scrollTop;
     if (st > lastScrollTop){
       
        $(".menu").css("top" , "-100px");
        const counters = document.querySelectorAll('.counter');
const speed = 500;

counters.forEach(counter =>{
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target/speed;
        if(count<target){
            counter.innerText = count+inc;
            setTimeout(updateCount,1);
        }
        else{
            count.innerText = target;
        }
    }
    updateCount();
})
     } else {
      
        $(".menu").css("top" , "0px"); 
     }
     lastScrollTop = st <= 0 ? 0 : st; 
  }, false);
  
  

var slider_img = document.querySelector('.slider-img');
var text = document.querySelector('.text');
var images = ['pr1.jpg', 'pr2.jpg', 'pr3.jpg'];
var texts = ["TEKTA GROUP ENGAGES ONLY PROFESSIONAL CONTRACTORS WITH DOZENS OF SUCCESSFUL PROJECTS IN THEIR PORTFOLIO. THEIR EXPERIENCE AND RELIABILITY HELP US DELIVER PROJECTS ON TIME AND OFFER HIGH-QUALITY AND AESTHETICALLY FLAWLESS REAL ESTATE", "TEKTA GROUP IS A DEVELOPMENT LAB THAT DEVELOPS NEW LIFESTYLES. OUR EXCLUSIVE HOUSING FORMATS GO BEYOND WHAT PEOPLE ARE USED TO CALLING 'APARTMENTS' - AND THAT IS WHY THEY MEET THE DEMANDS OF URBAN CITIZENS OF THE 21ST CENTURY.", "TEKTA GROUP'S SUCCESS IS DEFINED BY RESPONSIBLE WORK, ADHERENCE TO QUALITY AND THE DELIVERY OF PROJECTS WITHIN THE CONTRACTUAL DEADLINES."];
var texts2 = ["RELIABILITY", "EXCLUSIVITY", "RESPONSIBILITY"];
var i = 0;

function prev(){
     if(i <= 0)  i = images.length;
     i--;
     document.getElementById("text").innerHTML = texts[i];
     document.getElementById("text2").innerHTML = texts2[i];
     return setImg();
}

function next(){
    if(i >= images.length - 1) i = -1;
    i++;
    document.getElementById("text").innerHTML = texts[i];
    document.getElementById("text2").innerHTML = texts2[i];
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', images[i]);
}

AOS.init();
$(document).ready(function(){
    $(".couter").counterUp({
        delay:10,
        time:1000
    });
});


