(function($) {
   $(function() {
      $('.icon').on('click', function(){
         $(this).closest('.menu').toggleClass('menu-open');
      });
   });
})(jQuery);
$(document).ready(function(){
    $(".links").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



  

 



       

 

       

 


       

         

       


