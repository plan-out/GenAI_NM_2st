
var i = 2;

/*함수를 일정시간마다 반복해서 실행시킴.*/
setInterval(()=>{
  i = (i>=4) ? 1 : i; 
  $(".view"+(i++)).fadeIn().siblings().fadeOut();
},3000);


