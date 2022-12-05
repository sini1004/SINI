//애니메이션
let text = $("header h1").text();
//  console.log(text)
let split = text.split("").join("</span><span>");
split = "<span>" + split + "</span>";
$("header h1").html(split)

$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();

  if(scrollTop>=0){
      $("header").addClass("show");
  }
  for(let i=1; i<=2; i++){
      if(scrollTop >= $("#section"+i).offset().top - $(window).height()/2){
          $("#section"+i).addClass("show");
      }
  }
    
})