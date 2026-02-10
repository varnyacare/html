const API_URL = "https://api.varnya.care"
$(function () {

    var token = localStorage.getItem('auth')
    //Get salon list to select location
    $.ajax({
        url: API_URL+'/salon/get-salon',
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            let data = `<option>Select</option>`;
            for(let i = 0; i < response.length; i++) {
                data += `<option value=${response[i]._id}>
                    ${response[i].location}, ( ${response[i].pin_code} )
                </option>`;
            }
            $('#location').append(data);
        },
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    });
    /// End of get salon list

    $('#create-manager').click(function(event){
        event.preventDefault();
        var name = $('#name').val()
        var salon_id = $('#salon_id').val()
        var email = $('#email').val()
        var password = $('#password').val()
        var role = "manager"
        var postData = { "name": name, "email": email, "salon_id": salon_id, "password": password, "role": role}
        console.log(postData);
        $.post({
            url: API_URL+"/admin/new",
            contentType: "application/json",
            data : JSON.stringify(postData),
                beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            },
            success: function(response) {
                alert('Added successfully');
                window.location.replace('salon-manager.php');

            },
            error: function(xhr, status, error) {
                if(xhr.status == 403) {
                    window.location.replace('login.php');
                }
            }
        })
    })
})
