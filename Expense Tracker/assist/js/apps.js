document.getElementById("bnt").addEventListener("click" , addTransaction);
function addTransaction (){
    var inpNum = document.getElementById("inpNum").value;
    if (inpNum > 0){
        var saveAmount = inpNum
        var addingValue = +inpNum + +saveAmount
        console.log(addingValue)

        var elements = document.querySelectorAll(" .amount");
        for (var i = 0; i < elements.length; i++){
            elements[i].innerHTML=inpNum
        }
    } else if (inpNum < 0){
        document.getElementById("sign").innerHTML = inpNum + "(You are on loan)";
        document.getElementById("exp").innerHTML = inpNum;
        document.getElementById("amount").innerHTML = inpNum;
        document.getElementById("inc").innerHTML = "0.00";
    }
    var showDescription = document.getElementById("trans").value;
    document.getElementById("list").innerHTML = showDescription;
    document.querySelector(".history", ".list").style.display = "flex";

}
