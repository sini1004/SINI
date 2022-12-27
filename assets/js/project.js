const xhr = new XMLHttpRequest();
//XMLHttpRequest() - 외부 데이터를 불러들이는 객체

xhr.open('get','project.json',true);   //요청을 준비하다
xhr.send(null);	       //요청을 전송한다

xhr.onload = function(c){
  
   if(xhr.status == 200){ //서버 응답이 정상이라면 (Http status code) 
    respObj = JSON.parse(xhr.responseText);

    let newContent = '';
    for(let i = 0; i < respObj.site.length; i++){
      newContent += `<div class="box">`;
      newContent += `<div class="click">Click</div><img src= "${respObj.site[i].url}" alt="${respObj.site[i].alt}">
      `;
      newContent += `</div>`;
      

      let click = document.getElementsByClassName('box');
      let c = '';
      let modals = document.getElementsByClassName("modal");
      let modal = document.getElementById("modal");
      for (let c = 0; c < click.length; c++){
          click.onclick = function() {
            modal.style.display = "block";
          }
        }
    }


    let newModal = '';
    for(let i = 0; i < respObj.explanation.length; i++){
      newModal += `<div class="modal-content">`;
      newModal += `<span class="close">&times;</span>`;
      newModal += `<img src= "${respObj.explanation[i].url}" alt="${respObj.explanation[i].alt}">`;
      newModal += `<h3> ${respObj.explanation[i].title}</h3>`;
      newModal += `<p><span>skill</span> ${respObj.explanation[i].skill}</p>`;
      newModal += `<div class="click_button"><button class="view"><a href="${respObj.explanation[i].view}" target="_blank">view site</a></button>
          <button class="code">view code</button>
        </div>`;
      newModal += `</div>`;
    }

  

    let newProject = '';
    for(let i = 0; i < respObj.project.length; i++){

      let checkPdf = respObj.project[i].hasOwnProperty('pdf'); // true

      newProject += `<div class="project_wrap">`
      newProject += `<div class="project_img">`
      newProject += `<img src= "${respObj.project[i].url}" alt="${respObj.project[i].alt}">`
      newProject += `</div>`

      newProject += `<div class="project_desc">`

      newProject += `<h3>${respObj.project[i].title}</h3>`
      newProject += `<p>${respObj.project[i].desc}</p>`
      newProject += `<span>제작기간 : ${respObj.project[i].period}</span>`
      newProject += `<span>기술스택 : ${respObj.project[i].tool}</span>`

      newProject += `<div class="project_btn">`
      newProject += `<button><a href="${respObj.project[i].site}" target="_blank">View</a></button>`
      newProject += `<button><a href="${respObj.project[i].github}" target="_blank">Github</a></button>`

      if(checkPdf){
        newProject += `<button><a href="${respObj.project[i].pdf}" target="_blank">PDF</a></button>`
      }
      // newProject += `<button><a href="${respObj.project[i].pdf}">PDF</a></button>`
      newProject += `</div>`
      newProject += `</div>`
      newProject += `</div>`
    }

    document.getElementById('site_img').innerHTML = newContent;
    document.getElementById('modal').innerHTML = newModal;
    document.getElementById('project_wrap').innerHTML = newProject;
    
  }
}  
