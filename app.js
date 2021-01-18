/*** bootstrap carousel */
var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {interval: 2000, slide: true, pause: false});


/*** marquee */
jQuery(document).ready(function($) {
    $('.slick.marquee').slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: true
    });
  });

/*$("a.nav-link").mouseover(function (){
  if($(this).hasClass("news")){
    $(".news-list").css({"height":"auto",  "display": "block"});
  }else{
    $(".news-list").css("height", "0px");
  }
  
  if($(this).hasClass("infrastructure")){
    $(".infrastructure-list").css({"height":"auto",  "display": "block"});
  }else{
    $(".infrastructure-list").css("height", "0px");
  }

  if($(this).hasClass("activity")){
    $(".activity-list").css({"height":"auto",  "display": "block"});
  }else{
    $(".activity-list").css("height", "0px");
  }

  if($(this).hasClass("student")){
    $(".student-list").css({"height":"auto",  "display": "block"});
  }else{
    $(".student-list").css("height", "0px");
  }

  if($(this).hasClass("class")){
    $(".class-list").css({"height":"auto",  "display": "block"});
  }else{
    $(".class-list").css("height", "0px");
  }

});

$("a.nav-link").mouseout(function (){

  if($(this).hasClass("news")){
    $(".news-list").css("height", "0px")
    $(".news-list").bind("mouseover", function(){
        $(".news-list").css({"height":"auto",  "display": "block"})
      })
    }
    else{
      $(".news-list").bind("mouseout", function(){
        $(this).css("height", "0px");
      })
    }
  
  if($(this).hasClass("infrastructure")){
    $(".infrastructure-list").css("height", "0px")
    $(".infrastructure-list").bind("mouseover", function(){
        $(".infrastructure-list").css({"height":"auto",  "display": "block"})
      })
    }
    else{
      $(".infrastructure-list").bind("mouseout", function(){
        $(this).css("height", "0px");
      })
    }
   
  if($(this).hasClass("activity")){
    $(".activity-list").css("height", "0px")
    $(".activity-list").bind("mouseover", function(){
        $(".activity-list").css({"height":"auto",  "display": "block"})
      })
    }
    else{
      $(".activity-list").bind("mouseout", function(){
        $(this).css("height", "0px");
      })
    }

    if($(this).hasClass("student")){
      $(".student-list").css("height", "0px")
      $(".student-list").bind("mouseover", function(){
          $(".student-list").css({"height":"auto",  "display": "block"})
        })
      }
      else{
        $(".student-list").bind("mouseout", function(){
          $(this).css("height", "0px");
        })
      }

      if($(this).hasClass("class")){
        $(".class-list").css("height", "0px")
        $(".class-list").bind("mouseover", function(){
            $(".class-list").css({"height":"auto",  "display": "block"})
          })
        }
        else{
          $(".class-list").bind("mouseout", function(){
            $(this).css("height", "0px");
          })
        }
});*/