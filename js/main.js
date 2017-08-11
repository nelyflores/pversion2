$(document).ready(function(){
      $('.parallax').parallax();
       $('.tooltipped').tooltip({delay: 50});
        $('.modal').modal();
         new WOW().init();
        $("a.external").click(function() {
     url = $(this).attr("href");
     window.open(url, '_blank');
     return false;
  });
});

