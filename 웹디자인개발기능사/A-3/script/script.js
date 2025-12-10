
var i = 2;

/*함수를 일정시간마다 반복해서 실행시킴.*/
setInterval(()=>{
  i = (i>=4) ? 1 : i; 
  $(".view"+(i++)).fadeIn().siblings().fadeOut();
},3000);

/*버튼클릭시 팝업창 나타나기*/
$(".open").on("click",()=>{
  $("#popup").show();
});

/*버튼클릭시 팝업창 사라지기*/
$(".close").on("click",()=>{
  $("#popup").hide();
});