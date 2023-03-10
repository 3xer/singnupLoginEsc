

const user = document.getElementById("loginUsername")
const pw = document.getElementById("loginPw")
function getLogin() {
    const loginInfo = [user.value, pw.value]
    console.log(loginInfo)
}
document.getElementById("login").addEventListener("click", getLogin);