function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);

    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile2(data.basics);
  career(data.career);
  education(data.education);
  Technical_skills(data.Technical_skill);
})

var profile=document.querySelector(".profile");
var student_id=document.querySelector(".student_id");
var Resume=document.querySelector(".Resume");

function profile2(pro){
var image=document.createElement('img');
  image.src=pro.image;
  student_id.appendChild(image);
  profile.appendChild(student_id);

var h2=document.createElement('h2');
   h2.textContent=pro.name;
   student_id.appendChild(h2);
   profile.appendChild(student_id);

  var h3=document.createElement('h3');
    h3.textContent=pro.emain;
      student_id.appendChild(h3);
    profile.appendChild(student_id);
    var h4=document.createElement('h4');
       h4.textContent=pro.career;
       student_id.appendChild(h4);
       profile.appendChild(student_id);

}

function career(c){
  var rh=document.createElement("h1");
  rh.textContent="resume builder";
   Resume.appendChild(rh);
   var hh=document.createElement("hr");
   Resume.appendChild(hh);
   var hv=document.createElement("h2");
   hv.textContent="Career objective";
    Resume.appendChild(hv);


}
function education(edu){
  var h2=document.createElement('h2');
  h2.textContent="Education details";
  Resume.appendChild(h2);
  var hr=document.createElement('hr');
  Resume.appendChild(hr);
  var table=document.createElement('table');
  let row='';
  row +="<th>"+"seriol_no"+"</th>"+
  "<th>"+"degree"+"</th>"+
  "<th>"+"institute"+"</th>"+
  "<th>"+"per"+"</th>"+
  "</tr>";
  for(i in edu){
  row +="<tr>"+
  "<td>"+edu[i].seriol_no+"</td>"+
  "<td>"+edu[i].degree+"</td>"+
  "<td>"+edu[i].institute+"</td>"+
  "<td>"+edu[i].per+"</td>"+
  "</tr>";
}
table.innerHTML=row;
Resume.appendChild(table);
profile.appendChild(Resume);
}
function Technical_skills(l){
  var hh=document.createElement("h2");
  hh.textContent="skill set";
  Resume.appendChild(hh);
  profile.appendChild(Resume);
  var ul=document.createElement("ul");
  Resume.appendChild(ul);
  for(i in l){
    var ll=document.createElement("li");
    ll.textContent=l[i].info;
    ul.append(ll);

  }
}
