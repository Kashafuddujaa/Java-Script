function submit (){
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var checkbox = document.getElementById("checkbox").value;

    window.localStorage.setItem("name" , 'name')
   window. localStorage.setItem("contact" , 'contact')
    window.localStorage.setItem("email" , 'email')
   window. localStorage.setItem("checkbox" , 'checkbox')
    

}