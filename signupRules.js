document.getElementById("register").addEventListener("click", myfunc);
document.getElementById("pw").addEventListener("input", passwordStrength)

const names = document.getElementById("name")
const username = document.getElementById("username")
const email = document.getElementById("email")
const verEmail = document.getElementById("emailVerify")
const pw = document.getElementById("pw")
const verPw = document.getElementById("verifyPw")
const alert = document.getElementById("alert")


function passwordStrength(){
    
    document.getElementById("strenghtIndex").innerText = "";

    let strength = 0;

    const haveNumber = pw.value.match(/[0-9]/g)
    console.log(haveNumber)
    

    //does it include capital letters
    const capital = pw.value.match(/[A-Z]/g)
    console.log(capital)
    
     //does it include special character
     const specialChar = pw.value.match(/[!"#¤%&/()=?`^*~/}{€$£@§½]/g);
     console.log(specialChar)

     if(!!haveNumber && haveNumber.length >= 1){
        strength++;
     }
     if(!!capital && capital.length >= 1){
        strength++;
     }
     if (!!specialChar && specialChar.length >= 1){
        strength++;
     }
     if(strength == 0){
        document.getElementById("strenghtIndex").innerText = "Password is bad";
     }
     if (strength == 1){
        document.getElementById("strenghtIndex").innerText = "Password is weak";
     }
     if(strength == 2){
        document.getElementById("strenghtIndex").innerText = "Password is decent";
     }
     if(strength == 3){
        document.getElementById("strenghtIndex").innerText = "Password is strong";
     }
     console.log(strength)
     
}


function myfunc () {
    
    if(names.value.length > 0){
        console.log(names.value)
        if(username.value.length > 0){
            console.log(username.value)
            if(email.value = verEmail.value){
                console.log(email.value)
                if(ValidEmail = email.value.toLowerCase()){
                    console.log("valid email")
                    //password logic
                    if(pw.value = verPw.value && pw.value != ""){
                        console.log("pw1 = pw2")
                        let accountInfo = [names.value,username.value,email.value,pw.value]

                    }else{
                        alert.innerText = "check for invalid inputs or empty fields"
                        }
                }else{
                    alert.innerText = "check for invalid inputs or empty fields"
                    }
            }else{
                alert.innerText = "check for invalid inputs or empty fields"
                }
        }else{
            alert.innerText = "check for invalid inputs or empty fields"
            }
    }else{
    alert.innerText = "check for invalid inputs or empty fields"
    }
    
    function ValidEmail(){
       return email.value
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    
}
