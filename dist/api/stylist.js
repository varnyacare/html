const API_URL = "https://api.amapure.in"
let userNmae = localStorage.getItem('username')
let password = localStorage.getItem('password')


if(userNmae == 'JCinvoice@varnya.care' && password == '#Va9811'){
    let generateSendInvoice = document.querySelector('#sidebarnav li:nth-child(2)');
    generateSendInvoice.remove();
}
$(function () {
    var token = localStorage.getItem('auth')
    $.get({
        url: API_URL+"/stylist/get-stylist",
        contentType: "application/json",
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            let data = ``;
            for(let i = 0; i < response.length; i++) {
                data += `<tr> <td>${response[i].name}</td><td>${response[i].mobile}</td><td>${response[i].emp_id}</td><td><button data-id="${response[i]._id}" class="btn btn-success settle-amount"> Settle </button></td></tr>`;
            }
            $('#user-list').append(data);
            $("#zero_config").DataTable();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            if(xhr.status) {
                window.location.replace('login.php');
            }
        }
    })

    $(document).on('click', '.settle-amount', function(){
        var id = $(this).attr('data-id')
        $.get({
            url: API_URL+"/admin/settle-amount/"+id,
            contentType: "application/json",
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            },
            success: function(response) {
                console.log(response)
            },
            error: function(jqXHR, textStatus, errorThrown) {
               
            }
        })
    });
})
