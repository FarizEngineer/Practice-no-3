$(document).ready(function(){

$('#btr').click(function(){
    let name=$("#inp1").val();
    let mail=$("#inp2").val();
    let password=$("#inp3").val();

// Condition
if(name=="" || mail=="" || password==""){
alert("Please fillout all fields...")
}
else{
    localStorage.setItem("username" , name)
    localStorage.setItem("usermail" , mail)
    localStorage.setItem("userpassword" , password)

    confirm("Confirm to login on this site")

    window.location.href="mainpage.html"

   

}

})



 const username = localStorage.getItem("usermame");

            if (username) {
                $('.uname').text(username);
            } else {
                $('.uname').text("Guest");
            }


})