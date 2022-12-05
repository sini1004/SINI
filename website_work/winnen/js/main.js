//애니메이션
let text = $("header h1").text();

let split = text.split("").join("</span><span>");
split = "<span>" + split + "</span>";
$("header h1").html(split);

$(window).scroll(function(){
    let scrolTop = $(window).scrollTop();

    if(scrolTop>=0){
        $("header").addClass("show");
    }
    for(let i=1; i<=3; i++){
        if(scrolTop >= $("#section"+i).offset().top - $(window).height()/2){
            $("#section"+i).addClass("show");
        }
    }
    
})