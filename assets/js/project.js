const xhr = new XMLHttpRequest();
//XMLHttpRequest() - 외부 데이터를 불러들이는 객체

xhr.open('get','project.json',true);   //요청을 준비하다
xhr.send(null);	       //요청을 전송한다

xhr.onload = function(){
  
   if(xhr.status == 200){ //서버 응답이 정상이라면 (Http status code) 
    respObj = JSON.parse(xhr.responseText);

    let newContent = '';
    for(let i = 0; i < respObj.project.length; i++){
      newContent += `<div class="box">`;
      newContent += `<div class="click">Click</div><img src= "${respObj.project[i].url}" alt="${respObj.project[i].alt}">
      `;
      newContent += `</div>`;
    }


    let newModal = '';
    for(let i = 0; i < respObj.explanation.length; i++){
      newModal += `<div class="modal-content">`;
      newModal += `<span class="close">&times;</span>`;
      newModal += `<h3>"${respObj.explanation[i].comment}"</h3>`;
      newModal += `</div>`;
    }


    document.getElementById('project_img').innerHTML = newContent;
    document.getElementById('modal').innerHTML = newModal;
  }
}  
