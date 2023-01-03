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
      newContent += `<div class="click clickbtn">Click</div><img src= "${respObj.site[i].url}" alt="${respObj.site[i].alt}">
      `;
      newContent += `</div>`;


      // newModal += `<div class="modal-wrap">`;
      //   newModal += `<div class="modal-content">`;
      //   newModal += `<span class="close">&times;</span>`;
      //   newModal += `<p>${respObj.site[i].e_title}</p>`;
      //   newModal += `<img src= "${respObj.site[i].e_url}" alt="${respObj.site[i].alt}">`;
      //   newModal += `</div>`;
      // newModal += `</div>`;
    }

    let newModal = '';
    for(let i = 0; i < respObj.site.length; i++){
      // newModal += `<div class="modal-wrap">`;
        newModal += `<div class="modal-content">`;
        newModal += `<span class="close">&times;</span>`;
        newModal += `<p>${respObj.site[i].e_title}</p>`;
        newModal += `<img src= "${respObj.site[i].e_url}" alt="${respObj.site[i].alt}">`;
        newModal += `<span class="e_skill">${respObj.site[i].e_skill}</span>`;
        newModal += `<span class="e_page">${respObj.site[i].e_page}</span>`;
        newModal += `<span class="e_comment">${respObj.site[i].e_comment}</span>`;
        newModal += `<button class="btn"><a href="${respObj.site[i].e_view}" target="_blank">View</a></button>`
        newModal += `<button class="btn"><a href="${respObj.site[i].e_code}" target="_blank">Github</a></button>`
        newModal += `</div>`;
      // newModal += `</div>`;
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



