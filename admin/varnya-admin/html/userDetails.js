
let details = localStorage.getItem('userDetails');
let userNameMobile = localStorage.getItem('userNameMobile');
$(function(){
    console.log(details);
    $('#user_name').text(userNameMobile);
    $('#userDtails').append(details);
})
