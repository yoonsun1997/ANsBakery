var now = 0;
var img = 3;
$('img').eq(0).siblings().hide();

function slide(){
  if (now == img){
    $('img').eq(now).fadeOut("fast");
    $('img').eq(0).fadeIn("slow");
    now = 0;
  }
  else{
    $('img').eq(now).fadeOut("fast");
    $('img').eq(now+1).fadeIn("slow");
    now++;
  }
}

setInterval(slide, 3000);