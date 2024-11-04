$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["(Human Resources)", "Web Developer", "Blogger", "Computer Assistance", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["", "Web Developer", "(H.R)", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

$("body").on("mousemove", function (n) {
    a.css({'left' : n.clientX + "px" }); 
    a.css({'top' : n.clientY + "px" }); 
    b.css({'left' : n.clientX + "px" }); 
    b.css({'top' : n.clientY + "px" }); 
    c.css({'left' : n.clientX + "px" }); 
    c.css({'top' : n.clientY + "px" });
  });
  
  var a = $("#cursor"),
      b = $("#cursor2"),
      c = $("#cursor3");
  
  function n(t) {
    b.addClass("hover"); 
    c.addClass("hover");
  }
  
  function s(t) {
    b.removeClass("hover"); 
    c.removeClass("hover");
  }
  
  s();
  
  $(".hover-target").on('mouseover', n );
  $(".hover-target").on('mouseout', s );
  