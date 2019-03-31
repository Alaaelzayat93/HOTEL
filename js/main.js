/*global $,alert,console*/
$(function(){
  'use strict'
  //adjust header height
  $('.header').height($(window).height());
  $(window).resize(function(){
    $('.header').height($(window).height());
    $('.slider').each(function(){
 $(this).css('paddingTop',($(window).height()-$('.slider li').height())/2);
});
  });

//links active
$('.nav-link').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});
//adjust bx slider
$('.slider').each(function(){
 $(this).css('paddingTop',($(window).height()-$('.slider li').height())/2);
});



/*owl*/
$('.slider').bxSlider({
  pager:false
});

/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementByclass("navbar").style.top = "0";
  } else {
    document.getElementByclass("navbar").style.top = "-50px";
  }
}*/
/*slider*/
 $(window).scroll(function(){
var navbar = $('.navbar');
if($(window).scrollTop() >= navbar.height()){
if(!navbar.hasClass('scrolled')){
navbar.removeClass('navbar-absolute').addClass('scrolled fixed-top');
} 
}else{
navbar.removeClass('scrolled navbar-fixed-top');
}
});
});
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
/*slider owl*/
$(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    option:true,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})






