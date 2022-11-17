  // INPUT TYPE TAG
const tagContainer =document.querySelector('.tag-container');
const input=document.querySelector('.tag-container input');
var tags=[];
function createTag(label){
  const div=document.createElement('div');
  div.setAttribute('class','tag');

  const span=document.createElement('span');
  span.innerHTML=label;
  const closeBtn=document.createElement('i');
  closeBtn.setAttribute('class','fa-solid fa-xmark');
  closeBtn.setAttribute('data-item',label);
  // closeBtn.innerHTML= 'close';
  div.appendChild(span);
  div.appendChild(closeBtn);
  return div;
}
function reset(){
  document.querySelectorAll('.tag').forEach(function(tag){
      tag.parentElement.removeChild(tag);
  })
}
function addTags(){
  reset();
  tags.slice().reverse().forEach(function(tag){
      const input=createTag(tag);
tagContainer.append(input);
  })
}
input.addEventListener('keyup',function(e){
  if(e.key === 'Enter'){
    tags.push(input.value);
    addTags(); 
    input.value = '';
  }
});



document.addEventListener('click',function(e){
  if(e.target.tagName === 'I'){
      
      const value= e.target.getAttribute('data-item');
      console.log(value);
      const index = tags.indexOf(value);
      
      tags=[...tags.slice(0,index), ...tags.slice(index + 1)];
      addTags();
      console.log(tags);    
  }
});





// CHECKBOX CHECKED TAG
var tag = [];
var section = document.getElementsByTagName('section')[0];
var inpu = document.querySelectorAll('#autocompletebox1 .checkbox');

function updateCheckboxStatus(element) {
  if(element.checked){
    tag.push(element.value)
  }else{
    tag.splice(tag.indexOf(element.value), 1);
  }
 
  displayTags();
}

  function displayTags () {
    section.innerHTML = ""
    tag.forEach( function (val) {
      section.innerHTML +=  "<span onclick='myDelete(this)'>" + "<span>" + val + "</span>" + "<span  class='close_list hide'>X</span>" + "</span>";
    })
  }

 function myDelete(index){
  var span = index;
  span.remove(span.selectedIndex);
  tag.splice(tag.indexOf(index.firstChild.innerText), 1);
  console.log(index.firstChild.innerText, tag);
  check();
}



function check(){
  console.log(inpu);
  inpu.forEach(function check1(value){
    if(tag.includes(value.value)){
    value.checked=true;
    }else{
      value.checked=false;
    }
    });
}

// ADD BUTTON -TAG

function add(){
  var li = document.createElement("p");
var inputValue = document.getElementById("txt1").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
 {
  document.getElementById("paragraph").appendChild(li);
}
document.getElementById("txt1").value = "";
var span0 = document.createElement("SPAN");
var txt0 = document.createTextNode("x");
span0.className = "close";
span0.appendChild(txt0);
li.appendChild(span0);
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
      var div1 = this.parentElement;
      div1.style.display = "none";
  }
  
}
}



 var items1= document.querySelectorAll("#list1 label");
 for(i=0;i<items1.length;i++){
     items1[i].onclick= function(){
         document.getElementById("txt1").value=this.innerHTML;
     }
 }

// SEARCH FUNCTIONALITY
  const inp = document.getElementById("txt1");
  const lis = document.querySelectorAll('#list1 li');
  //  console.log(lis);
  
  inp.addEventListener("keyup",(e)=>{
    // alert("hello");
    lis.forEach(function chk1(element){
      if(element.innerText.includes(inp.value)){
        element.style.display="block";
      }else{
        element.style.display="none";
      }
      if(element.innerText.toLowerCase().includes(inp.value.toLowerCase()) ){
        element.style.display="block";
        
      }
    })
  }
  )

