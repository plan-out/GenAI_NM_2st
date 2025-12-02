
var i = 1;

setInterval(()=>{
  i = (i>=3) ? 0 : i;
  $("#slide ul").animate({top:-300*i++},600);
},3000);




