function transformUppercase(_val){
    return _val.toUpperCase();
}

let elnamaPengguna= document.getElementById("namaPengguna")
elnamaPengguna.addEventListener("keyup",function(){
    elnamaPengguna.value=transformUppercase(elnamaPengguna.value)
})

//second way of creating an event listener
function checkPassword(){
    let elpassword=document.getElementById("password")
    let pass_val = elpassword.value;

    if(pass_val.length > 5){
        alert("Password check....OK")
    }else{
        alert("Password too short")
    }
}

let elKL=document.getElementById("password")
elKL.onblur= checkPassword;