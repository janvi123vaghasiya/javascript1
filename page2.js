function btn(){
 location.href="page1.html";
}

function home(){
    document.getElementById("home").innerHTML="Home page";
    document.getElementById("order").innerHTML = " ";
    document.getElementById("customer").innerHTML = " ";
    document.getElementById("apps").innerHTML = " ";

}
function order(){
    document.getElementById("order").innerHTML="Order page";
    document.getElementById("home").style.display ="none";
    document.getElementById("order").style.display = "block";
    document.getElementById("customer").style.display = "none";
    
}
function product(){
    location.href="page2.html";
}

function Customers(){
    document.getElementById("customer").innerHTML="customer page";
    document.getElementById("order").innerHTML = " ";
    document.getElementById("market").innerHTML = " ";
}
function analytics(){
    document.getElementById("analytics").innerHTML="Analytics page";
    document.getElementById("order").innerHTML = " ";
    document.getElementById("market").innerHTML = " ";
    document.getElementById("customer").innerHTML = " ";
    
}
function market(){
    document.getElementById("market").innerHTML="Marketing page";
    document.getElementById("order").style.display = "none";
    document.getElementById("analytics").innerHTML = " ";
    document.getElementById("discount").innerHTML = " ";
}
function discount(){
    document.getElementById("discount").innerHTML="discount page";
    document.getElementById("market").innerHTML = " ";
    document.getElementById("order").innerHTML = " ";
}
function apps(){
    document.getElementById("apps").innerHTML="Apps page";
    document.getElementById("discount").innerHTML=" ";
    document.getElementById("order").innerHTML = " ";
}


// TABLE CREATE FUNCTIONALITY
const data1 = localStorage.getItem("itemdata");
const data= JSON.parse(data1);
console.log(data);

const createTable = (xyz) => {
//    console.log("xyz",xyz)
    const createTableData = (abc) =>{
        // console.log("abc",abc)
        var html="";
        abc.forEach(d1 => {
          html += `
  <tr id="tr">
 
  <td><input type="checkbox" id="chkbox"  >${d1.Title}</td>
  <td>${d1.discription}</td>
  <td>${d1.active}</td>
  <td>${d1.select}</td>
  <td>${d1.vender}</td>
  <td>${d1.tags}</td>
  <td><button class="btnedit" style="background-color:lightgray" onclick='editbutton(${d1.id})';">Edit</button>
       <button class="btndelete" style="background-color:lightgray" onclick='deletebutton(${d1.id})';">Delete</button></td>
  </tr>
   `
   
        })
        return html;
      }
      
    return `
          <table class="table" >
          <thead id="thead">
             <tr>
               <th><input type="checkbox" id="chkboxtitl" >Title</th>
               <th>Description</th>
               <th>Product Status</th>
               <th>Apps</th>
               <th>Vendor</th>
               <th>Tags</th>
               <th>Action</th>
             </tr>
          </thead>
          <tbody id="tbody">
          ${createTableData(xyz)}
          </tbody>
</table>`;
        
}

document.getElementById("table").innerHTML = `
<div>
${createTable(data)}
</div>
`;
//    TABLE CHECKBOX COUNT 
var chkboxtitle = document.querySelectorAll('#chkbox');
 console.log(chkboxtitle);
var count = 0;
document.getElementById("chkboxtitle").onclick = function(){
    document.getElementById("ch").style.display = "block";
   
    var titlechk = document.querySelectorAll("#chkboxtitl");
    // console.log(titlechk);
    for(var y of titlechk)
    y.checked = this.checked;
    if(y.checked == false){

    }
    for(var checkbox of chkboxtitle){
        checkbox.checked = this.checked;
        if(checkbox.checked == true){
            count++;
            document.getElementById("chtext").innerHTML = count + " " + "selected"; 
         }
        else{
           
             document.getElementById("ch").style.display = "none";
             document.getElementById("thead").style.display="table-header-group";

            count = 0;
            
             document.getElementById("chtext").innerHTML = count + " " + "selected";
            
        }
      
    }
    
    showchecked();
}

    document.getElementById("chkboxtitl").onclick = function(){
    document.getElementById("ch").style.display = "block";
    document.getElementById("thead").style.display="none";
   
    var chb=document.querySelectorAll("#chkboxtitle");
    // console.log(chb);
    for(var x of chb){
        x.checked = this.checked; 
                 
    }
    for(var chbox of chkboxtitle){
        chbox.checked = this.checked;
        if(chbox.checked == true){
             count++;
            document.getElementById("chtext").innerHTML = count + " " + "selected";
        }else{
            document.getElementById("ch").style.display = "none";
            document.getElementById("thead").style.display="table-header-group";
            count = 0;
            document.getElementById("chtext").innerHTML = count + " " + "selected";
        }
    }
   
}


const selected=document.getElementById('chtext');

function showchecked(){
    
    selected.innerHTML=document.querySelectorAll('input[id="chkbox"]:checked').length + " " + "selected";
         
    }     
 
document.querySelectorAll("input[id='chkbox']").forEach(i =>{
    i.onclick = () => 
    {
        var chb=document.querySelectorAll("#chkboxtitle");
    // console.log(chb);
    for(var x of chb){
        x.checked = this.checked;
        if(x.checked == false){ 
        }
        showchecked();
    }
    document.getElementById("thead").style.display="none";
    document.getElementById("ch").style.display = "block";
}
    
})



// EDIT DATA
function editbutton(clickid){
        
     location.href="page1.html?id="+ clickid;
     
         
}


// DELETE DATA
function deletebutton(id){
    location.reload();
    var delitem=JSON.parse(localStorage.getItem("itemdata"));
    
   var rowid = id;
   console.log(rowid);
   confirm("are you sure delete record?");
   var deldata =  delitem.filter((d1) => {
        return   d1.id != rowid
    })
localStorage.setItem("itemdata",JSON.stringify(deldata));

 }

 

 
 

    function active(){

     var dataitem=JSON.parse(localStorage.getItem("itemdata"))
       console.log(dataitem);
       const actdata =document.getElementById("act").innerHTML;
       var active=[];
          var selectdata = dataitem.filter((activedata) =>{

           console.log(activedata.active == actdata)
           
          return activedata.active == actdata;
          
          })

          active.push(selectdata)
          document.getElementById("table").innerHTML = `
<div>
${createTable(selectdata)}
</div>
`;
document.getElementById("archivedlink").innerHTML ="";
document.getElementById("archived").innerHTML = "";     
  }

       
       function draft(){
      
        var dataitem=JSON.parse(localStorage.getItem("itemdata"))

        console.log(dataitem);
        const actdata =document.getElementById("dra").innerHTML;
        var draft=[];
            var draftdata = dataitem.filter((activedata) =>{
    
            console.log(activedata.active == actdata)
            return activedata.active == actdata;
            
           })
        //    console.log(draftdata)
           draft.push(draftdata)
           document.getElementById("table").innerHTML = `
           <div>
           ${createTable(draftdata)}
           </div>
           `;
           document.getElementById("archivedlink").innerHTML ="";
           document.getElementById("archived").innerHTML = "";
        
     
        //   location.reload();
           
      
        }
 
 function alllist(){
    document.getElementById("table").innerHTML = `
    <div>
    ${createTable(data)}
    </div>
    `;
    document.getElementById("archivedlink").innerHTML ="";
    document.getElementById("archived").innerHTML = "";
    
// location.reload();


 }

 function archived(){
     document.getElementById("tbody").style.display = "none";
    document.getElementById("archivedlink").innerHTML ="learn more about archived product" ;
    document.getElementById("archivedlink").style.color = "blue";
    document.getElementById("link").innerHTML = "";
    document.getElementById("archivedlink").style.paddingTop = "10px";
    document.getElementById("archivedlink").style.textAlign = "center";
     document.getElementById("draft").innerHTML = "";
    document.getElementById("archived").innerHTML = "No Archived pdroduct";
    document.getElementById("archived").style.textAlign = "center";

    document.getElementById("thead").style.display = "none";
   
      
}





    // document.querySelectorAll('#tr')[1].style.display = "none"; 
    // document.querySelectorAll('#tr')[3].style.display = "none";
    // document.querySelectorAll('#tr')[4].style.display = "none";
    // document.querySelectorAll('#tr')[0].style.display = "none"; 
    // document.querySelectorAll('#tr')[2].style.display = "none";
    // document.querySelectorAll('#tr')[5].style.display = "none";