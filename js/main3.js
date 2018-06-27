var y=0;
var rownav=0;
var wdth=$(window).width();
$(window).resize(function() {
    wdth=$(window).width();
});
if ($(this).scrollTop() > 0) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200);    // Fade in the arrow
} 
if ($(this).scrollTop() > 0) {
    $('.row_navbar').addClass('row_navbar_1');
}
if($(this).scrollTop()==0&&wdth<=1250){
    $('.row_navbar').addClass('row_navbar_1');
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else if($(this).scrollTop()>0&&y==0&&wdth>1250){
       $('.row_navbar').addClass('row_navbar_1');
    //    $('body,html').animate({
    //         scrollTop : document.getElementById('hd').offsetHeight                  
    //     }, 750);
        
    }
    else if($(this).scrollTop() ==0&&wdth>1250){
         $('.row_navbar').removeClass('row_navbar_1');
    }
    else if($(this).scrollTop()<10 ){
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
    y=$(this).scrollTop();
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 750);
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
    $(window).resize(function() {
        if (wdth <1250&&$(this).scrollTop()==0) {        
           $('.row_navbar').addClass('row_navbar_1');
        }
        else if(wdth>=1250&&$(this).scrollTop()==0){
            // $('.row_navbar').removeClass('row_navbar_1');
        }
        if (wdth >1250) {  
            $('.row_nav').removeClass('row_nav_1');
             $('.row_nav').removeClass('row_nav_2');

             rownav=0;      
         }
         else if(wdth>768&&wdth<1250&&rownav==1){
            $('.row_nav').removeClass('row_nav_2');
            $('.row_nav').addClass('row_nav_1');
         }
         else if(wdth<768&&rownav==1){
            $('.row_nav').removeClass('row_nav_1');
            $('.row_nav').addClass('row_nav_2');
         }
         
    });
});

$('.handle').on('click',function(){
    if(rownav==0){
        $('.row_nav').addClass('row_nav_1');
       
        rownav=1;
    }
    else{
        $('.row_nav').removeClass('row_nav_1');
        
        rownav=0;
    }
});
$('.handle1').on('click',function(){
    if(rownav==0){
        $('.row_nav').addClass('row_nav_2');
     
       
        rownav=1;
    }
    else{

        $('.row_nav').removeClass('row_nav_2');
        rownav=0;
    }
});
$('.navbar_row').on('click',function(){
    $('.row_nav').removeClass('row_nav_1');
    $('.row_nav').removeClass('row_nav_2');
  
    rownav=0;
});
