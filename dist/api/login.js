const API_URL = "https://api.amapure.in/admin"
$(function () {
    $('#login').click(function(event){
        document.getElementById('spinnerOverlay').style.display = 'flex';
        event.preventDefault();
        var username = $('#username').val()
        var password = $('#password').val()
        var postData = { "username": username, "password": password }
        $.post({
            url: API_URL+"/login",
            contentType: "application/json",
            data : JSON.stringify(postData),
            success: function(response) {
                localStorage.setItem("auth",response.token.access_token)
                localStorage.setItem("salon_id",response.salon_id)
                localStorage.setItem("username",username)
                localStorage.setItem("password",password)
                localStorage.setItem("varnya_mobile",response.varnya_mobile)
                window.location.replace('invoice-list.php')
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error: ", errorThrown);
                if(errorThrown == 'Forbidden'){
                    alert("Opps! login credentials are wriong");
                    document.getElementById('spinnerOverlay').style.display = 'none';
                }
                else{
                    alert(errorThrown);
                    document.getElementById('spinnerOverlay').style.display = 'none';
                }
            }
        })
    })
})
