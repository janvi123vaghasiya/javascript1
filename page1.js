function myFunction(){
    var checkBox = document.getElementById("myCheck");
    var box = document.getElementById("box");
     box.style.display = "block";

       
    if (checkBox.checked == true){
        box.style.display = "block";
       
} else{
   box.style.display = "none";
   
}
}






// DROPDOWN VALUE TO STORE INPUT
var items= document.querySelectorAll("#list li");
            for(i=0;i<items.length;i++){
                items[i].onclick= function(){
                    document.getElementById("txt").value=this.innerHTML;
                }
            }


// SEARCH FUNCTIONALITY -VENDER
            
              var searchBx=document.getElementById("txt");
              var autobox = document.querySelectorAll("#list li")

              searchBx.addEventListener("keyup", (e) =>{
                autobox.forEach(function sugg(element){
                    if(element.innerText.includes(searchBx.value)){
                        element.style.display = "block";
                    }else{
                        element.style.display = "none";
                    }
                    if(element.innerText.toLowerCase().includes(searchBx.value.toLowerCase())){
                        element.style.display = "block";
                    }
                })
              })
           

// FIND  PROFIT AND MARGIN
function amount(){
    var price=document.getElementById('price').value;
    var dollar=document.getElementById('dollar').value;
   
    if(price>dollar){
        profit = price-dollar;
        percentage=(profit/dollar)*100;
        document.getElementById('profit').innerHTML =  "Profit :" +  "<br>"+profit;
        document.getElementById('margin').innerHTML=" Margin :"+ "<br>" +percentage+ "%";
    }
    else
    {
    loss=dollar-price;
    percentage=(profit/dollar)*100;
    document.getElementById('profit').innerHTML = "Profit : " + "<br>" + " " + "-" + loss;
    document.getElementById('margin').innerHTML=" Margin :" + "<br>"+ " " + "-" + percentage+ "%";
    }    
}
  

function btn1(){
    location.href="page2.html";
}
// SALES CHANNELS AND APPS CHECKBOX SELECT AND DESELECT-1 syntax
var checkboxes=document.querySelectorAll("input[id='checkbox']");
function checkAll(mycheckbox){
    if(mycheckbox.checked == true){
        checkboxes.forEach(function(checkbox){
            checkbox.checked = true;
        });
    }
    else{
        checkboxes.forEach(function(checkbox){
            checkbox.checked  = false;
        })
    }
}
// SALES CHANNELS AND APPS CHECKBOX SELECT AND DESELECT - 2 syntax
// var checkboxes=document.querySelectorAll("input[id='checkbox']");
// function checkAll(mycheckbox){
//     if(mycheckbox.checked == true){
//         checkboxes.forEach(checkbox)
//         function checkbox(x){
//             console.log(x)
//             x.checked = true;
//         }
//     }else{
//         checkboxes.forEach(checkbox)
//         function checkbox(x){
//             x.checked = false;
//         }
       
//     }
// }

// ADD DATA
function addData(){

    var itemdata = [];
    var chkboxvalue=[];
     var length = itemdata.length;
     var chkbox=document.querySelectorAll('input[id="checkbox"]:checked')
     for(var i=0;i<chkbox.length;i++){
      if( chkbox[i].checked == true){
       chkboxvalue.push(chkbox[i].value)
      } 
        
     }
     console.log(chkboxvalue)

    
    
    const itemd = { 
        id: Date.now(),
        Title: document.getElementById('title').value,
        discription: document.getElementById('textarea').value,
        active: document.getElementById('active').value,
        select: chkboxvalue,
        vender: document.getElementById('txt').value,
        tags: document.getElementById('txt1').value,
      };
      
      itemdata[length] =itemd;
         let arr=JSON.parse(localStorage.getItem('itemdata')) ?  JSON.parse(localStorage.getItem('itemdata')) : []
         arr.push(itemd);
        localStorage.setItem("itemdata",JSON.stringify(arr));
       
        console.log(JSON.stringify(arr));



    // UPDATE DATA
            let update = JSON.parse(localStorage.getItem('itemdata'));
            for (var i=0; i<update.length;i++) {
              if (update[i].id == productid) {
                update[i].Title = document.getElementById('title').value;
                update[i].discription = document.getElementById('textarea').value;
                update[i].active = document.getElementById('active').value;
                update[i].select = chkboxvalue;
                update[i].vender = document.getElementById('txt').value;
                update[i].tags = document.getElementById('txt1').value;
                 localStorage.itemdata = JSON.stringify(update);
               }
          }

          location.href="page2.html";
    }
// EDIT DATA
    let Params = new URLSearchParams(window.location.search);
     const productid=Params.get('id');    
     var dataitem=JSON.parse(localStorage.getItem("itemdata"))

    for(i=0;i<dataitem.length;i++){
           if(dataitem[i].id == productid){
            document.getElementById("title").value=dataitem[i].Title;
            document.getElementById("textarea").value=dataitem[i].discription;
            document.getElementById('active').value=dataitem[i].active;
            // chkboxvalue=dataitem[i].select;
            document.getElementById('txt').value=dataitem[i].vender;
            document.getElementById('txt1').value=dataitem[i].tags;
           
            var saleschk = document.querySelectorAll('.checkbox2');
            
            for(var j=0;j<saleschk.length;j++){
                if( dataitem[i].select.includes(saleschk[j].value)){
                    saleschk[j].checked = true;
                    
                    
                }   
                console.log(saleschk[j].value);
                console.log(dataitem[i].select)
            }     
                   
      }
     
    
           
           
}

function addvender(){
    var livender = document.createElement("li")
    var inputvender=document.getElementById("txt").value;
    var tvender =  document.createTextNode(inputvender)
    livender.appendChild(tvender);
    {
        document.getElementById("autocompletebox").appendChild(livender);
    }
    // document.getElementById("txt").value = this.innerHTML;
    var items= document.querySelectorAll("#list li");
    for(i=0;i<items.length;i++){
        items[i].onclick= function(){
            document.getElementById("txt").value=this.innerHTML;
        }
    }


}



  


















