
var i = 1;

setInterval(()=>{
  i = (i>=3)? 0 : i ;
  $("#slide ul").animate({left:-1200*(i++)},800);
},3000);

