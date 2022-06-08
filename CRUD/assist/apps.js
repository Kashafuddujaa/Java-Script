var rollno=[]
var input=document.querySelector("#rollno");
var p = document.querySelector("#totalAttendance");

function addrecord (){
    rollno.push(input.value)
    input.value=""
    console.log=(rollno);
    showDataToPage();
}
function showDataToPage(){
    p.innerHTML="Total attendance is" + rollno.length
    console.log(rollno)
}

function deleterecord (){
    var index = rollno.indexOf(input.value)
    if (index !== -1){
        rollno.splice(index, 1)
        input.value = ""
    } else {
        alert("data not found")
    }
            console.log(rollno)
}
 
function viewrecord (){
    for(i=0; i < rollno.length; i++)
    document.write(rollno[i] + "<br/>")
}

function updaterecord (){
    var updaterec = rollno.indexOf(input.value)
    console.log(updaterec)
    if (updaterec !== -1){
        var update = prompt("Which value do you like to update?" , updaterec)
        rollno.splice(updaterec, 1, update)
    } else {
        alert("Data doesn't exist in array")
    }
    console.log(rollno)

}


    
