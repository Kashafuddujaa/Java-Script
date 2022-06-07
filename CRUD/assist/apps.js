var rollno=[rollno]
var input=document.querySelector("#rollno");
function addrecord (){
    rollno.push(input.value)
    input.value=""
    ShowToPage=(rollno);
    console.log=(rollno);
}
var p=document.querySelector("#view")
function viewrecord (){
    p.innerHTML="Total Record is " + rollno.length
}
var p=document.querySelector("#delete");
function deleterecord(){
    deleterecord.getElementById('type', 'button');    // SET INPUT ATTRIBUTE.
    deleterecord.getElementById('value', 'Delete');
    // this.td.appendChild(btDelete);
}
var p=document.querySelector("#update")
function updaterecord (){
    updaterecord.getElementById('value', 'Update');
    updaterecord.getElementById('id', 'Edit' + i);
}


    
