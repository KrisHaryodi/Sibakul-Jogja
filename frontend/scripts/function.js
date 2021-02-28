function myFunction(y){
    y.classList.toggle("fa-eye-slash");
    var x = document.getElementById("myInput");
    if (x.type === "password"){
        x.type ="text";
        
    } else {
        x.type = "password";
    }
    
}

function myFunction2(y){
    y.classList.toggle("fa-eye-slash");
    var x = document.getElementById("myConfirm");
    if (x.type === "password"){
        x.type ="text";
    } else {
        x.type = "password";
    }
}

