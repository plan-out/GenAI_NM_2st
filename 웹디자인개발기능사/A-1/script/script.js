
var i = 1;

setInterval(()=>{
  i = (i>=3) ? 0 : i;
  $("#slide ul").animate({top:-300*i++},600);
},3000);

/*팝업 열기&닫기*/
$(".open").on("click",()=>{
  $("#popup").css({display:"flex"});
});

$(".close").on("click",()=>{
  $("#popup").css({display:"none"});
});

