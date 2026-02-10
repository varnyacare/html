

  const newUserApi = "https://api.varnya.care"
$(function () {
    if (window.location.href.endsWith('/services.php')) {
        $('.create-new').append(`<li><a class="dropdown-item" href="create-new-service.php">Create New</a></li>`);
    }
    var token = localStorage.getItem('auth');
    const submit = document.querySelector(".submit-btn");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    
   

   let data = {
       name,
       email,
       mobile
   }
    
   
    submit.addEventListener('click', ()=> {
   
        console.log(name);
        console.log(email);
        console.log(mobile);
    //     let data = {};
       
        
       

    // [...payload]?.forEach(e => {
    //   data[e[0]] = e[1]

   
     $(".user-container").addClass("close");

   
})








$("#close-btn").click(function(){
    $(".user-container").addClass("close");
    console.log("im clicked");
})
    $.ajax({
        url: newUserApi + '/user/new',
        type: 'POST',
        data:data,
    
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            
        },
        success: function (response) {
           
           
console.log(response);
            
            

        }

        ,
        error: function (xhr, status, error) {
            console.log("erorr");
            if (xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    })

});


